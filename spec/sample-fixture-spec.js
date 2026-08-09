const path = require("path");

// The fixture beside this file is a plain sample of the language — the file to
// open when you want to look at the highlighting rather than assert on it. This
// spec is only what stops the sample quietly rotting: the grammar still claims
// it, and it still tokenizes.

describe("Typst sample fixtures", () => {
  beforeEach(async () => {
    await lumine.packages.activatePackage("language-typst");
    lumine.config.set("language.useTreeSitterParsers", true);
  });

  it("parses sample.typ without error", async () => {
    const editor = await lumine.workspace.open(path.join(__dirname, "fixtures", "sample.typ"));
    const languageMode = editor.getBuffer().getLanguageMode();
    await languageMode.ready;

    expect(editor.getGrammar().scopeName).toBe("source.typst");
    expect(languageMode.tree.rootNode.hasError).toBe(false);
  });
});
