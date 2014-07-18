jQuery(document).ready(function() {

var menuactive = "false";
jQuery("#mobilemenubtn").click(function() { 
console.log('clicky!');
if (menuactive == "false") {
jQuery("nav ul.links").addClass("active");
menuactive = "true";
}
else {
jQuery("nav ul.links").removeClass("active");
menuactive = "false";
}
});
var aboutactive = "false";

jQuery('#block-menu-menu-project-menu .menu .expanded a:first').prepend('<span class="droplinksymbol">&#187;</span>');

jQuery("#aboutbtn").click(function() { 
console.log('clicky!');
if (aboutactive == "false") {
jQuery("#block-menu-menu-project-menu .menu .expanded .menu, #block-menu-menu-project-menu .menu, #block-menu-menu-project-menu").addClass("active");
aboutactive = "true";
}
else {
jQuery("#block-menu-menu-project-menu .menu .expanded .menu, #block-menu-menu-project-menu .menu, #block-menu-menu-project-menu").removeClass("active");
aboutactive = "false";
}
});

var nubactive = "false";
jQuery("#searchnub").click(function() { 
console.log('clicky!');
if (nubactive == "false") {
jQuery("#regionsidebar").addClass("slidout");
nubactive = "true";
}
else {
jQuery("#regionsidebar").removeClass("slidout");
nubactive = "false";
}
});


var exposedform = jQuery(".view-filters");
jQuery("#regionsidebar").prepend(exposedform);
jQuery("#regionmain .view-filters").remove();

jQuery(".openlayers-popup a").addClass("colorbox-node");


jQuery('.media-image').each(function() {
var caption = jQuery(this).attr("alt");
console.log(caption);
jQuery(this).after('<p class="imagecopyright">' + caption + '</p>');
});

jQuery('iframe').not('.soundcloud').not('.custom').wrap('<div class="videowrapper" />');

jQuery('#block-menu-menu-project-menu .menu .expanded').mouseover(function() {
	if (jQuery(window).width() > 768) {
jQuery('#block-menu-menu-project-menu .menu .expanded .menu').toggle();
}
else{}
});
jQuery('#block-menu-menu-project-menu .menu .expanded').mouseout(function() {
		if (jQuery(window).width() > 768) {
jQuery('#block-menu-menu-project-menu .menu .expanded .menu').toggle();
}
else {}
});

jQuery('#storycontent .media-image').parent().addClass("imagecontainer");

jQuery(".openlayers-popup a").addClass("colorbox-node");

// resizes captions to the width of the image they belong to
if (jQuery('.imgcaption').length > 0) {
jQuery('.imagecontainer').each(function() {
var captionwidth = jQuery('img', this).width();
console.log(captionwidth);
jQuery(this).next('.imgcaption').css('max-width', (captionwidth - 20));	
//jQuery(this).css('max-width',captionwidth);
});
}

});
