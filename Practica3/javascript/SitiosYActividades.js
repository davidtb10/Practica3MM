const annotate2 = RoughNotation.annotate;
const annotationGroup = RoughNotation.annotationGroup;



const g = document.querySelector('.description');
const annotation2 = annotate2(g, { type: 'box', color: 'crimson'});
annotation2.show();

const h = document.querySelector('.title-description');
const annotation3 = annotate2(h, { type: 'underline', color: 'crimson'});
annotation3.show();




