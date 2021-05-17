const annotate = RoughNotation.annotate;
const annotationGroup = RoughNotation.annotationGroup;

const a = document.querySelector('#consiguen');
const annotation1 = annotate(a, { type: 'underline', color: 'crimson', padding: 5});
annotation1.show();

const b = document.querySelector('.Ini');
const annotation2 = annotate(b, { type: 'highlight', color: 'crimson', padding: 10});
annotation2.show();

const c = document.querySelector('.vigoteespera');
const annotation3 = annotate(c, { type: 'highlight', color: 'crimson', padding: 10});
annotation3.show();

const d = document.querySelector('.ciudadvigo');
const annotation4 = annotate(d, { type: 'box', color: 'crimson', padding: 5});
annotation4.show();


const e = document.querySelector('.list');
const annotation5 = annotate(e, { type: 'bracket', brackets: ['left'], color: 'crimson', padding: [2,5]});
annotation5.show();