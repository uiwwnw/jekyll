// main logo animation
$(function () {
    'use strict';
    console_message();
    item_index();
    parell_maker();
    align_box();
    var switch_s = 'first';
    // nonSet;

    var win_w = $(window).width(),
        win_h = $(window).height(),
        scroll_width = win_w - $('.parellContainer').children('.item_blank').width();
    $('.item_fixed').css('width', 'calc(100% - ' + scroll_width+'px)');
    $('.parellContainer').scroll(function () {
        var height = $(this).scrollTop(),
            ind = parseInt(height / win_h);
        // total = $('.item').length;
        // var inde = $('.item').not($('.item_blank')).prop('inde','d')
        // var switch_s = true;
        // console.log(ind, total)
        $('.item[data-index="' + ind + '"]').addClass('active');

        $('.item[data-index="' + (ind + 1) + '"]').removeClass('active');
        $('.item[data-index="' + (ind - 1) + '"]').removeClass('active');
        $('body').css('background-position-y', -height / 3);
        // $('.item.active[data-index="'+ ind +'"]').css('margin-top', (ind * win_h)/5 - height/5);
        $('.item.active[scrolled="true"][data-index="' + ind + '"]').css('margin-top', (ind * win_h) / 5 - height / 5);

        // if($('.item').after('.item_parell')){
        // $('.item_parell').css('margin-top',-height/5)
        // }
        // if(ind>=(total-3)){
        //     $('.item_fixed').eq(total-2).addClass('active');
        // }

        // function none() {
        // }
        // if(height <= win_h && switch_s == true){
        //     $('.item_fixed[data-index="'+ ind +'"]').css('display','block');
        //     // console.log('a',height,win_h)
        //    switch_s = false;
        //     // clearTimeout(nonSet);
        // }else if(height > win_h && switch_s == false){
        //     // console.log('b',height,win_h)
        //     switch_s = true;
        //     // nonSet = setTimeout(none,1000);
        //     $('.item_fixed[data-index="'+ (ind - 1) +'"]').css('display','none');

        // }else if(switch_s == 'first'){
        //     // console.log('c')
        //     switch_s = true;
        //     // nonSet = setTimeout(none,1000);
        //     // $('.item_fixed').css('display','none');

        // }
    });
    $(window).resize(function () {
        win_w = $(window).width(),
            win_h = $(window).height(),
            scroll_width = win_w - $('.parellContainer').children().width();
    });
});

var animationEvent = whichAnimationEvent();
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);
//스크롤 알림

//정렬 박스
function align_box() {
    // $("body").click(alert('asdasdasd'))
    $.each($(".align_box"), function () {
        var th = $(this)
            , align_type = th.prop('align-type', '');
        if (th.children("i").hasClass("empty")) {
        }
        else {
            if (align_type === 'top') {
                th.addClass('top')
                    .append('<i class="empty empty_top"</i>');
            }
            else if (align_type === 'bottom') {
                th.addClass('bottom')
                    .append('<i class="empty empty_bottom"></i>');
            }
            else {
                th.addClass('middle')
                    .append('<i class="empty empty_middle"></i>');
            }
        }
    });
}
// 
function parell_maker() {
    // $("body").click(alert('asdasdasd'))
    $.each($(".item_fixed"), function (i, e) {
        var th = $(this),
            type = th.attr('type');
        // th.css('width','')
        // th.eq(i).attr('index',i);
        if (type == 'parell') {
            var target = th.find('.parell').html();
            var className = th.find('.parell').attr('class');
            th.find('.parell').remove();
            th.after('<div class="item item_parell ' + className + '">' + target + '</div>');
        } else {
            th.attr('type', 'blank').after('<div class="item item_blank"></div>');
        }
    });
}
function item_index() {
    $('.parellContainer').each(function () {
        var item = $(this).children().length;
        for (var i = 0; i <= item; i++){
            $(this).children().eq(i).attr('data-index', i);
        }
    });
}

//console.log message
function console_message() {
    // 'use strict';
    var color = {
        brown: "color:#560000;font-size:11px;"
        , red: "color:#d83128;font-size:11px;"
        , yellow: "color:#ea991b;font-size:11px;"
        , green: "color:#93ba2f;font-size:11px;"
        , blue: "color:#4da4e0;font-size:11px;"
        , black: "color:#333;font-size:11px;"
    };
    if (typeof console === "object" && console.log && typeof console.log === "function") {
        if (isUA('chrome') && !isUA('edge')) {
            console.log("\n%c프%c론%c트%c엔%c드 %c개발자 %c윤창원%c의 %c포폴사이트%c입니다.\n", color.brown, color.red, color.green, color.blue, color.yellow, color.black, color.blue, color.black, color.red, color.black);
        }
        else {
            console.log("\n프론트엔드 개발자 윤창원의 포폴사이트입니다.\n");
        }
        console.log("\x3e \x3e \x3e 채용을 희망하시는 분들은 010-4030-6087로 연락주세요.\n")
    }

    function isUA(userAgent) {
        return navigator.userAgent.toLowerCase().indexOf(userAgent) > -1;
    }
}

/*popup*/
function popup_open() {
    $.ajax({
        type: 'post'
        , url: 'page/popup.html'
        , dataType: 'html'
        , success: function (data) {
            $("#container").append(data);
            $("#container .popup").addClass('on ing');
            popup_common();
        }
    });
}

function popup_close() {
    var popup = $("#container .popup");
    // popup.remove();
    popup.addClass("off").removeClass("on");
    popup.on(animationEvent, function () {
        popup.removeClass("off").removeClass("ing").remove().unbind();
    });
}

function whichAnimationEvent() {
    var t;
    var el = document.createElement('fakeelement');
    var animations = {
        'animation': 'animationend'
        , 'OAnimation': 'oAnimationEnd'
        , 'MozAnimation': 'animationend'
        , 'WebkitAnimation': 'webkitAnimationEnd'
    }
    for (t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }
}
