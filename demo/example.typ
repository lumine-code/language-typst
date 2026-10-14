// A Typst sample, kept idiomatic so it is worth opening in the editor.

/* A block comment. */

#set document(title: "A Sample Document", author: "Ada Lovelace")
#set page(paper: "a4", margin: 2cm, numbering: "1 / 1")
#set text(font: "New Computer Modern", size: 11pt, lang: "en")
#set par(justify: true)
#set heading(numbering: "1.1")

#let accent = rgb("#cf9723")
#let boxed(body, fill: accent.lighten(80%)) = block(
  fill: fill,
  inset: 8pt,
  radius: 4pt,
  body,
)

#show heading.where(level: 1): it => text(fill: accent, it)
#show raw: set text(font: "DejaVu Sans Mono")

= Introduction <intro>

Text with _emphasis_, *strong*, `inline code`, and a link to
#link("https://typst.app")[the Typst site]. See @results.

An inline formula $E = m c^2$ sits in the paragraph.

$ integral_0^oo e^(-x^2) dif x = sqrt(pi) / 2 $

== Lists

- A bullet
- Another bullet
  - Nested

+ Numbered
+ Also numbered

/ Term: A description-list entry.

== Results <results>

#figure(
  table(
    columns: (auto, 1fr, auto),
    align: (left, center, right),
    table.header[Language][Extension][Bundled],
    [Typst], [`.typ`], [yes],
    [LaTeX], [`.tex`], [yes],
  ),
  caption: [A table.],
) <counts>

#boxed[
  A callout built from the `boxed` function above.
]

#for n in range(1, 4) {
  [Item #n. ]
}

#if 2 > 1 [
  The condition held.
] else [
  It did not.
]

```rust
// A raw block, highlighted by the injected grammar.
fn main() {
    println!("hello");
}
```
