# language-typst

Typst language with modern tree-sitter grammar and legacy TextMate grammar.

## Features

- **Grammars**: provides both Tree-sitter and TextMate grammars.
- **Syntax highlighting**: accurate highlighting for markup, code and math modes.
- **Code folding**: folds sections, blocks, function calls and raw blocks.
- **Auto-indentation**: indents inside braces, brackets and parentheses.
- **Symbol navigation**: headings, function definitions, variables and labels.
- **Snippets**: 30+ snippets for common Typst constructs (document setup, figures, math, headings, etc.).

## Installation

To install `language-typst` search for _language-typst_ in the Install pane of the Lumine settings or run `lumine --install lumine-code/language-typst`.

## Usage

The Tree-sitter grammar is based on [tree-sitter-typst](https://github.com/uben0/tree-sitter-typst) and is used by default. The TextMate grammar is based on [typst-grammar](https://github.com/michidk/typst-grammar) and serves as a fallback when tree-sitter is disabled.

## Services

- **hyperlink.injection** (`^1.0.0`): consumed to detect hyperlinks inside Typst comments.
- **todo.injection** (`^1.0.0`): consumed to highlight TODO-style keywords inside Typst comments.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub. Any feedback is welcome!
