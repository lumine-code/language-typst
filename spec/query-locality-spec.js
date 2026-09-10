const fs = require("fs");
const path = require("path");
const { Point } = require("lumine");

describe("Typst highlight query locality", () => {
  let editor;

  beforeEach(async () => {
    await lumine.packages.activatePackage("language-typst");
    editor = await lumine.workspace.open("content.typ");
  });

  afterEach(() => editor?.destroy());

  async function setUp(text) {
    editor.setText(text);
    await editor.languageMode.ready;
    await editor.languageMode.atTransactionEnd();
  }

  function capturesForRows(startRow, endRow) {
    const layer = editor.languageMode.rootLanguageLayer;
    return layer.queries.highlightsQuery.captures(layer.tree.rootNode, {
      startPosition: new Point(startRow, 0),
      endPosition: new Point(endRow, 0),
    });
  }

  it("scopes both delimiters of empty and non-empty content", async () => {
    await setUp("#let empty = []\n#let value = [text]");

    const delimiters = capturesForRows(0, 2).filter(
      (capture) => capture.name === "punctuation.definition.content.typst",
    );
    expect(delimiters.map((capture) => capture.node.text)).toEqual(["[", "]", "[", "]"]);
    for (const [row, columns] of [
      [0, [13, 14]],
      [1, [13, 18]],
    ]) {
      for (const column of columns) {
        expect(editor.scopeDescriptorForBufferPosition([row, column]).getScopesArray()).toContain(
          "punctuation.definition.content.typst",
        );
      }
    }
  });

  it("does not revisit delimiters outside a tile in 6000-row content", async () => {
    const lines = ["#let value = ["];
    for (let index = 0; index < 6000; index++) lines.push(`  content ${index}`);
    lines.push("]");
    await setUp(lines.join("\r\n"));

    expect(editor.languageMode.rootLanguageLayer.tree.rootNode.hasError).toBe(false);
    const captures = capturesForRows(3000, 3006);
    expect(captures.length).toBeLessThanOrEqual(64);
    expect(
      captures.filter((capture) => capture.name === "punctuation.definition.content.typst"),
    ).toEqual([]);

    const query = fs.readFileSync(
      path.join(__dirname, "..", "grammars", "typst-highlights.scm"),
      "utf8",
    );
    expect(query).not.toContain('(content ["[" "]"]');
    expect(query).toContain("(#is? test.childOfType content)");
    expect(query).toContain("(#is? test.first true)");
    expect(query).toContain("(#is? test.last true)");
  });
});
