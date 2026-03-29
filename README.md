# language-typst

Typst language with modern tree-sitter grammar and legacy TextMate grammar.

## Features

- **Tree-sitter grammar**: Typst with syntax highlighting, code folding, indentation, and symbol navigation.
- **TextMate grammar**: fallback for Typst markup and code modes.
- **30+ snippets**: for common Typst constructs (document setup, figures, math, headings, etc.).

## Installation

To install `language-typst` search for [language-typst](https://web.pulsar-edit.dev/packages/language-typst) in the Install pane of the Pulsar settings or run `ppm install language-typst`. Alternatively, you can run `ppm install asiloisad/pulsar-language-typst` to install a package directly from the GitHub repository.

## Grammars

### Tree-sitter (modern)

Based on [tree-sitter-typst](https://github.com/uben0/tree-sitter-typst). Used by default when Pulsar's modern tree-sitter parser is enabled.

Provides:
- Accurate syntax highlighting for markup, code, and math modes
- Code folding for sections, blocks, function calls, and raw blocks
- Auto-indentation inside braces, brackets, and parentheses
- Symbol navigation for headings, function definitions, variables, and labels
- Hyperlink and TODO detection in comments

### TextMate (legacy)

Based on [typst-grammar](https://github.com/michidk/typst-grammar) (used by GitHub Linguist), patched for Pulsar's `second-mate` engine. Used as fallback when tree-sitter is disabled.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub. Any feedback is welcome!
