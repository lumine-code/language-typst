; tags.scm for Typst (Pulsar tree-sitter)
; Symbol navigation for headings, functions, labels

; Headings
(section
  (heading) @name) @definition.section

; Function definitions: #let name(...) = ...
(let
  pattern: (call
    item: (ident) @name)) @definition.function

; Variable definitions: #let name = ...
(let
  pattern: (ident) @name) @definition.variable

; Labels
(label) @definition.label
