exports.activate = function () {};

exports.consumeHyperlinkInjection = (hyperlink) => {
  hyperlink.addInjectionPoint('source.typst', {
    types: ['comment'],
  });
};

exports.consumeTodoInjection = (todo) => {
  todo.addInjectionPoint('source.typst', {
    types: ['comment'],
  });
};
