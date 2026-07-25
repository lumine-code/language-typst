describe("language-typst", () => {
  beforeEach(async () => {
    await atom.packages.activatePackage("language-typst");
  });

  it("loads the Typst grammars", () => {
    const grammars = atom.grammars
      .getGrammars({ includeTreeSitter: true })
      .filter((grammar) => grammar.scopeName === "source.typst");
    const types = grammars.map((grammar) => grammar.constructor.name).sort();
    expect(grammars.length).toBe(2);
    expect(types).toContain("WASMTreeSitterGrammar");
  });

  it("selects a Typst grammar for .typ files", () => {
    const grammar = atom.grammars.selectGrammar("document.typ", "");
    expect(grammar.scopeName).toBe("source.typst");
  });

  it("uses the tree-sitter grammar in an editor and tokenizes markup", async () => {
    const editor = await atom.workspace.open("document.typ");
    editor.setText("#set page(width: 10cm)\n= Heading\n");
    const languageMode = editor.getBuffer().getLanguageMode();
    expect(languageMode.grammar.scopeName).toBe("source.typst");
    if (languageMode.ready) {
      await languageMode.ready;
      const scopes = editor.scopeDescriptorForBufferPosition([0, 1]).getScopesArray();
      expect(scopes[0]).toBe("source.typst");
    }
  });
});
