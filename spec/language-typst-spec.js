describe("language-typst", () => {
  beforeEach(async () => {
    await lumine.packages.activatePackage("language-typst");
  });

  it("loads the Typst grammars", () => {
    const grammars = lumine.grammars
      .getGrammars({ includeTreeSitter: true })
      .filter((grammar) => grammar.scopeName === "source.typst");
    const types = grammars.map((grammar) => grammar.constructor.name).sort();
    expect(grammars.length).toBe(2);
    expect(types).toContain("TreeSitterGrammar");
  });

  it("selects a Typst grammar for .typ files", () => {
    const grammar = lumine.grammars.selectGrammar("document.typ", "");
    expect(grammar.scopeName).toBe("source.typst");
  });

  it("uses the tree-sitter grammar in an editor and tokenizes markup", async () => {
    const editor = await lumine.workspace.open("document.typ");
    editor.setText("#set page(width: 10cm)\n= Heading\n");
    const languageMode = editor.getBuffer().getLanguageMode();
    expect(languageMode.grammar.scopeName).toBe("source.typst");
    if (languageMode.ready) {
      await languageMode.ready;
      const scopes = editor.scopeDescriptorForBufferPosition([0, 1]).getScopesArray();
      expect(scopes[0]).toBe("source.typst");
    }
  });

  // The per-grammar settings live in the `language` namespace; under the
  // legacy `editor` one nothing reads them.
  describe("scoped settings", () => {
    it("soft wraps Typst documents", async () => {
      const editor = await lumine.workspace.open("document.typ");
      expect(editor.getGrammar().scopeName).toBe("source.typst");
      expect(editor.isSoftWrapped()).toBe(true);
    });

    it("comments a line with two slashes", async () => {
      const editor = await lumine.workspace.open("document.typ");
      editor.setText("= Heading");
      editor.toggleLineCommentsForBufferRows(0, 0);
      expect(editor.lineTextForBufferRow(0)).toBe("// = Heading");
    });
  });
});
