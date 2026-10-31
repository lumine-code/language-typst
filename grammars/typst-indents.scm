; Raw fences can survive after recovery drops their raw_blck wrapper.
; Their following delimiters are raw text, including on later rows.
(source_file (ERROR "```") (text) @preserve
  (#is? indent.reindent true)
  (#set! indent.force true))

(ERROR "```" ["(" ")" "[" "]" "{" "}"] @_IGNORE_
  (#set! capture.final true))

; Preserve the exact contents of multiline literals during explicit reindent.
([(raw_blck) (raw_span) (string) (comment)] @preserve
  (#is? indent.reindent true)
  (#is-not? indent.matchesCurrentRow startPosition)
  (#set! indent.force true))

; indents.scm for Typst (tree-sitter)

[
  "{"
  "["
  "("
] @indent

[
  "}"
  "]"
  ")"
] @dedent
