const annotate = RoughNotation.annotate;

const e = document.querySelector('.place-url');
const annotation = annotate(e, { type: 'box', color: 'crimson'});
annotation.show();

const a = document.querySelector('.list-title');
const annotation1 = annotate(a, { type: 'highlight', color: 'crimson'});
annotation1.show();




