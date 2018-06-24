/*global $, console, Typed */

$('.oned').on('click', function (e) {
	"use strict";
    e.preventDefault();
    var target = $(this).get(0).id === 'oned' ? $('#header') : $('#header');
    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 1000);
});

$('.twod').on('click', function (e) {
	"use strict";
    e.preventDefault();
    var target = $(this).get(0).id === 'twod' ? $('#articles') : $('#articles');
    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 1000);
});

$('.threed').on('click', function (e) {
	"use strict";
    e.preventDefault();
    var target = $(this).get(0).id === 'threed' ? $('#news') : $('#news');
    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 1000);
});

$('.fourd').on('click', function (e) {
	"use strict";
    e.preventDefault();
    var target = $(this).get(0).className === 'fourd' ? $('#progress') : $('#progress');
    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 1000);
});

$('.fived').on('click', function (e) {
	"use strict";
    e.preventDefault();
    var target = $(this).get(0).id === 'fived' ? $('#contact') : $('#contact');
    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 1000);
});

$(document).ready(function(){
    $(".down-slider").click(function(){
        $(".navbar").slideToggle("slow");
    });
});

//var images = new Array('http://placehold.it/250x150','http://placehold.it/250x150/123456','http://placehold.it/250x150/dbca98');
//var nextimage = 0;
//
//function slideshowFadeIn() {
//	"use strict";
//    $('.slideshow').prepend($('<img class="slideshowimage" src="' + images[nextimage++] + '" style="display:none">').fadeIn(500, function () {setTimeout(doSlideshow, 1000); }));
//    if (nextimage >= images.length) nextimage=0;
//}
//
//function doSlideshow() {
//	"use strict";
//    if ($('.slideshowimage').length !== 0) {
//        $('.slideshowimage').fadeOut(500, function() {slideshowFadeIn();$(this).remove()});
//    }
//    else slideshowFadeIn();
//}
//
//doSlideshow();