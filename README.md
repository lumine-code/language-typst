# language-typst

Typst language support.

## Features

- **Grammars**: provides a Tree-sitter grammar built from [tree-sitter-typst](https://github.com/uben0/tree-sitter-typst).
- **Syntax highlighting**: accurate highlighting for markup, code and math modes.
- **Code folding**: folds sections, blocks, function calls and raw blocks.
- **Auto-indentation**: indents inside braces, brackets and parentheses.
- **Symbol navigation**: headings, function definitions, variables and labels.
- **Snippets**: 30+ snippets for common Typst constructs (document setup, figures, math, headings, etc.).

## Installation

To install `language-typst` search for it in the Install pane of the Lumine settings, or run the command `lumine --install lumine-code/language-typst`.

## Usage

The grammar is based on [tree-sitter-typst](https://github.com/uben0/tree-sitter-typst).

## Services

- `hyperlink.injection`: consumed to detect hyperlinks inside Typst comments.
- `todo.injection`: consumed to highlight TODO-style keywords inside Typst comments.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub. Any feedback is welcome!
