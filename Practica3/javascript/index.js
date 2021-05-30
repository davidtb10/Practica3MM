const annotate1 = RoughNotation.annotate;
const annotationGroup1 = RoughNotation.annotationGroup;

const a = document.querySelector('#consiguen');
const annotation1 = annotate1(a, { type: 'underline', color: '#343a40', padding: 5});
annotation1.show();

const b = document.querySelector('.Ini');
const annotation2 = annotate1(b, { type: 'highlight', color: '#343a40', padding: 10});
annotation2.show();

const c = document.querySelector('.vigoteespera');
const annotation3 = annotate1(c, { type: 'highlight', color: '#343a40', padding: 10});
annotation3.show();

const d = document.querySelector('.ciudadvigo');
const annotation4 = annotate1(d, { type: 'box', color: '#343a40', padding: 5});
annotation4.show();

const e = document.querySelector('.list');
const annotation5 = annotate1(e, { type: 'bracket', brackets: ['left'], color: '#343a40', padding: [2,5]});
annotation5.show();


function pauseCarousel() {
    $('#control-pause').hide();
    $('#control-play').show();
    $('.carousel').carousel('pause');
}

function playCarousel() {
    $('#control-play').hide();
    $('#control-pause').show();
    $('.carousel').carousel('cycle');
}

$(function() {
    $("#control-play").hide();
    $("#control-pause").click(pauseCarousel);
    $("#control-play").click(playCarousel);
});