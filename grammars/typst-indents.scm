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
