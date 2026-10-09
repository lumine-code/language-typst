const fs = require("node:fs");
const path = require("node:path");

describe("Typst multiline snippets in native editors", () => {
  let editor, service, packagePath, lease;

  beforeEach(async () => {
    for (const method of ["openExternal", "openPath", "showItemInFolder", "openApplication"])
      spyOn(lumine.shell, method).and.returnValue(Promise.resolve());
    spyOn(lumine.application, "openWindow").and.returnValue(Promise.resolve());
    spyOn(lumine.clipboard, "read").and.returnValue(Promise.resolve(""));
    packagePath = (await lumine.packages.activatePackage("language-typst")).path;
    lease = lumine.packages.serviceHub.consume("snippets", "^1.0.0", (provider) => {
      service = provider;
    });
    await (await lumine.packages.activatePackage("snippets")).mainModule.waitForSnippetsLoaded();
    editor = await lumine.workspace.open();
    editor.setGrammar(lumine.grammars.grammarForScopeName("source.typst"));
    await editor.languageMode.ready;
  });

  afterEach(() => {
    editor?.destroy();
    lease?.dispose();
    editor = service = packagePath = lease = null;
  });

  async function expand(name) {
    const data = JSON.parse(
      fs.readFileSync(path.join(packagePath, "snippets", "main.json"), "utf8"),
    );
    await service.insertSnippet(data[".source.typst"][name].body, editor);
    if (name === "If Else") {
      lumine.commands.dispatch(editor.getElement(), "snippets:next-tab-stop");
      lumine.commands.dispatch(editor.getElement(), "snippets:next-tab-stop");
      editor.insertText("fallback");
    }
    await editor.languageMode.atTransactionEnd();
  }

  for (const [name, lines] of [
    ["If", 3],
    ["If Else", 5],
    ["For Loop", 3],
    ["While Loop", 3],
    ["Figure", 4],
    ["Table", 4],
    ["Code Block", 3],
    ["Grid", 4],
  ]) {
    it(`inserts real line breaks for ${name}`, async () => {
      await expand(name);
      expect(editor.getLineCount()).toBe(lines);
      expect(editor.getText()).not.toContain("\\n");
      expect(editor.getText()).not.toContain("\\t");
      expect(editor.languageMode.tree.rootNode.hasError).withContext(editor.getText()).toBe(false);
    });
  }

  it("preserves the correctly multiline document template", async () => {
    await expand("Document Template");
    expect(editor.getLineCount()).toBe(7);
    expect(editor.getText()).toContain('\n#set page(paper: "a4")\n');
    expect(editor.languageMode.tree.rootNode.hasError).toBe(false);
  });
});
