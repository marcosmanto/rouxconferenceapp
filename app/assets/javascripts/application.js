// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
// require jquery
//= require jquery-ui/jquery-ui
//= require jquery_ujs
//= require bootstrap-sass/assets/javascripts/bootstrap-sprockets-custom
// require bootstrap-sass-components/js/bootstrap
//= require_tree .

// http://railsapps.github.io/rails-javascript-include-external.html#implementing-conditional
console.log("Site wide JavaScript");
$(function(){
	over = "out";
	var anim = 500; 
	var li_drop = $('ul.nav li.dropdown');
	var a_drop_toggle = $('li.dropdown a.dropdown-toggle');
	var drop_menu = $('ul.dropdown-menu');
	li_drop
		.on( "hide.bs.dropdown", function(event) {
			if (over == "out") {
					event.preventDefault();
					li_drop.removeClass('open',100);
				drop_menu.fadeOut(anim, function(){
					a_drop_toggle.attr('aria-expanded', 'false');
				});				
			};
		})
		.on( "shown.bs.dropdown", function(event) {
				li_drop.addClass('open',200);
				drop_menu.fadeIn(anim);		
		});

	li_drop
		.hover(function(){
			over = "in";
			if(drop_menu.css('opacity') != 1) return
			a_drop_toggle.trigger( "click" );
		}, function() {
			over = "out";
			if(drop_menu.css('opacity') != 1) return
			a_drop_toggle.trigger( "click" );
		}); // hover

}); // JQuery is loaded

$('.artists.index').ready(function() {
  console.log("Page-specific JavaScript on the artists/index page.");
});