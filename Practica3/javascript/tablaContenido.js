
const annotate3 = RoughNotation.annotate;
const annotationGroup = RoughNotation.annotationGroup;

const i = document.querySelector('.content-table');
const annotation4 = annotate3(i, { type: 'box', color: 'crimson'});
annotation4.show();