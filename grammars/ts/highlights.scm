; highlights.scm for Typst (Pulsar tree-sitter)
; Adapted from tree-sitter-typst and nvim-treesitter queries

; FUNCTIONS & CALLS
(call
  item: (ident) @support.function.typst)
(call
  item: (field field: (ident) @support.function.method.typst))
(tagged field: (ident) @variable.other.member.typst)
(field field: (ident) @variable.other.member.typst)

; COMMENTS
(comment) @comment.typst

; CONTROL KEYWORDS
(let "let" @keyword.control.typst)
(branch ["if" "else"] @keyword.control.conditional.typst)
(while "while" @keyword.control.repeat.typst)
(for ["for" "in"] @keyword.control.repeat.typst)
(import "import" @keyword.control.import.typst)
(as "as" @keyword.operator.typst)
(include "include" @keyword.control.import.typst)
(show "show" @keyword.control.typst)
(set "set" @keyword.control.typst)
(return "return" @keyword.control.typst)
(flow ["break" "continue"] @keyword.control.typst)

; OPERATORS
(in ["in" "not"] @keyword.operator.typst)
(context "context" @keyword.control.typst)
(and "and" @keyword.operator.typst)
(or "or" @keyword.operator.typst)
(not "not" @keyword.operator.typst)
(sign ["+" "-"] @keyword.operator.typst)
(add "+" @keyword.operator.typst)
(sub "-" @keyword.operator.typst)
(mul "*" @keyword.operator.typst)
(div "/" @keyword.operator.typst)
(cmp ["==" "<=" ">=" "!=" "<" ">"] @keyword.operator.typst)
(fraction "/" @keyword.operator.typst)
(fac "!" @keyword.operator.typst)
(attach ["^" "_"] @keyword.operator.typst)
(wildcard) @keyword.operator.typst

; VALUES
(raw_blck "```" @punctuation.definition.raw.typst) @markup.raw.block.typst
(raw_span "`" @punctuation.definition.raw.typst) @markup.raw.inline.typst
(raw_blck lang: (ident) @entity.name.tag.typst)
(label) @entity.name.label.typst
(ref) @variable.other.reference.typst
(number) @constant.numeric.typst
(string) @string.quoted.typst
(content ["[" "]"] @punctuation.definition.content.typst)
(bool) @constant.language.boolean.typst
(none) @constant.language.typst
(auto) @constant.language.typst
(ident) @variable.other.typst

; MARKUP
(item "-" @markup.list.unnumbered.typst)
(term ["/" ":"] @markup.list.term.typst)
(heading "=" @markup.heading.marker.typst) @markup.heading.1.typst
(heading "==" @markup.heading.marker.typst) @markup.heading.2.typst
(heading "===" @markup.heading.marker.typst) @markup.heading.3.typst
(heading "====" @markup.heading.marker.typst) @markup.heading.4.typst
(heading "=====" @markup.heading.marker.typst) @markup.heading.5.typst
(heading "======" @markup.heading.marker.typst) @markup.heading.6.typst
(url) @markup.underline.link.typst
(emph) @markup.italic.typst
(strong) @markup.bold.typst
(symbol) @constant.character.typst
(shorthand) @constant.character.escape.typst
(quote) @markup.quote.typst
(align) @keyword.operator.typst
(letter) @constant.character.typst
(linebreak) @constant.character.typst

; MATH
(math "$" @punctuation.definition.math.typst)
"#" @punctuation.special.typst
"end" @punctuation.special.typst

; ESCAPE & PUNCTUATION
(escape) @constant.character.escape.typst
["(" ")" "{" "}"] @punctuation.bracket.typst
["," ";" ".." ":" "sep"] @punctuation.delimiter.typst
"assign" @keyword.operator.assignment.typst
(field "." @punctuation.accessor.typst)
