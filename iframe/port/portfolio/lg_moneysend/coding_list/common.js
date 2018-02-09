jQuery(function($){
	var tree = $('.tree');
	var togglePlus = '<button type="button" class="toggle plus">+</button>';
	var toggleMinus = '<button type="button" class="toggle minus">-</button>';
	
	// defalt
	tree.find('li>ul').css('display','none');
	tree.find('ul>li:last-child').addClass('last');
	tree.find('li>ul:hidden').parent('li').prepend(togglePlus);
	tree.find('li>ul:visible').parent('li').prepend(toggleMinus);
	
	// active
	tree.find('li.active').parents('li').addClass('open');
	tree.find('li.open').parents('li').addClass('open');
	tree.find('li.open>.toggle').text('-').removeClass('plus').addClass('minus');
	tree.find('li.open>ul').slideDown(100);
	
	// click toggle
	$('.tree .toggle').click(function(){
		t = $(this);
		t.parent('li').toggleClass('open');
		if(t.parent('li').hasClass('open')){
			t.text('-').removeClass('plus').addClass('minus');
			t.parent('li').find('>ul').slideDown(100);
		} else {
			t.text('+').removeClass('minus').addClass('plus');
			t.parent('li').find('>ul').slideUp(100);
		}
	});
	$('.tree_name').click(function(){
		t = $(this),
		p = t.parent('li'),
		b = t.siblings('button');

		t.parent('li').toggleClass('open');
		if(t.parent('li').hasClass('open')){
			b.text('-').removeClass('plus').addClass('minus');
			p.find('>ul').slideDown(100);
		} else {
			b.text('+').removeClass('minus').addClass('plus');
			p.find('>ul').slideUp(100);
		}
	});
	
});

var ipad_check = function (){		
	var agent   = navigator.userAgent;
	if ( agent.match(/(iPod|iPad)/) ) {
		$('#viewport').attr('content','width=1000, user-scalable=yes, target-densitydpi=device-dpi');
	}
};	

var window_resize_active = function (){
	var screen_width = $(window).width();
	var screen_height = $(window).height();
	var a_obj = $('a');

	var change_target = function (ch_flag){
		if (ch_flag){
			a_obj.each(function(i){
				$(this).attr('target','_self');
			});
		}else {
			a_obj.each(function(i){
				$(this).attr('target','main_iframe');
			});
		}
	};

	var add_class = function (){
		if ( screen_width <= 550 ){
			$('html').addClass('size500');
			change_target(true);
		}else {
			$('html').removeClass('size500');
			change_target(false);
		}
	};	

	add_class();

	$(window).resize(function(){
		screen_width = $(window).width();
		screen_height = $(window).height();
		add_class();
	});
};

$(document).ready(function(){
	window_resize_active();
	ipad_check();
});