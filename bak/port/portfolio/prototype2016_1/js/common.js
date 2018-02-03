
// main logo animation
$(function () {
    'use strict';
    console_message();
    first_page();
});
var animationEvent = whichAnimationEvent();
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);
function top_menu() {
    // alert('ddd')
    $("header button").on("click", function () {
        var th = $(this);
        th.addClass("on");
        $("header button").not(th).removeClass('on');
    })
}
//로딩 버블 애니메이션
function bubbles() {
    $.each($(".bubbles"), function () {
        var bubblecount = ($(this).width() / 50) * 10;
        for (var i = 0; i <= bubblecount; i++) {
            var size = ($.rnd(40, 80) / 10);
            $(this).append('<span class="particle" style="top:' + $.rnd(20, 80) + '%; left:' + $.rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
        }
    });
}

//정렬 박스
function align_box() {
    // $("body").click(alert('asdasdasd'))
    $.each($(".align-box"), function () {
        var th = $(this),
            align_type = th.prop('align-type', '');
        if (th.children("i").hasClass("empty")) {
        } else {
            if (align_type === 'top') {
                $(this).append('<i class="empty" style="width: 0 !important;height: 100% !important;vertical-align: top !important "></i>');
            } else if (align_type === 'bottom') {
                $(this).append('<i class="empty" style="width: 0 !important;height: 100% !important;vertical-align: bottom !important "></i>');
            } else {
                $(this).append('<i class="empty" style="width: 0 !important;height: 100% !important;vertical-align: middle !important "></i>');
            }
        }
    });
}
function masonry() {
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 200
    });
}
//console.log message
function console_message() {
    // 'use strict';
    var color = {
        brown: "color:#560000;font-size:11px;",
        red: "color:#d83128;font-size:11px;",
        yellow: "color:#ea991b;font-size:11px;",
        green: "color:#93ba2f;font-size:11px;",
        blue: "color:#4da4e0;font-size:11px;",
        black: "color:#333;font-size:11px;"
    };

    if (typeof console === "object" && console.log && typeof console.log === "function") {
        if (isUA('chrome') && !isUA('edge')) {
            console.log(
                "\n%c프%c론%c트%c엔%c드 %c개발자 %c윤창원%c의 %c포폴사이트%c입니다.\n",
                color.brown, color.red, color.green, color.blue, color.yellow,
                color.black, color.blue, color.black, color.red, color.black
            );
        } else {
            console.log(
                "\n프론트엔드 개발자 윤창원의 포폴사이트입니다.\n"
            );
        }
        console.log("\x3e \x3e \x3e 채용을 희망하시는 분들은 010-2354-6087로 연락주세요.\n")
    }

    function isUA(userAgent) {
        return navigator.userAgent.toLowerCase().indexOf(userAgent) > -1;
    }
}
jQuery.rnd = function (m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
};
var slider_tineout;
function slider() {
    slider_timeout(1);
    $('.slider-gauge > i').on({
        click: function () {
            var th = $(this),
                index = th.index();
            $('.slider-wrap').attr('slide-index', index);
            $('.slider-help').removeClass('click');
            clearInterval(slider_tineout);
            slider_timeout(index);
        },
        dblclick: function () {
            var th = $(this),
                index = th.index();
            $('.slider-wrap').attr('slide-index', index);
            $('.slider-help').addClass('click');
            clearInterval(slider_tineout);
            // slider_timeout(index);
        }
    })
}
function slider_timeout(x) {
    slider_tineout = setInterval(function () {
        var num = $('.slider-wrap li').length;
        // alert(num);
        // console.log(num)
        if (x < num) {
            x++;
        } else {
            x = 1;
        }
        $('.slider-wrap').attr('slide-index', x);
    }, 6000);
}
function settimeout(func, time) {
    setTimeout(func, time);
}
/*popup*/
function popup_open() {
    $.ajax({
        type: 'get'
        , url: './page/popup.html'
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
        popup
            .removeClass("off")
            .removeClass("ing")
            .remove()
            .unbind();
    });
}
function whichAnimationEvent() {
    var t;
    var el = document.createElement('fakeelement');
    var animations = {
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd'
    }
    for (t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }
}


/*페이지 전환*/
//common
function popup_common() {
    align_box();
    masonry();
    // clearInterval(slider_tineout);
    // pop_up();
}
function common() {
    align_box();
    masonry();
    clearInterval(slider_tineout);
    // pop_up();
}
//first_page
function first_page() {
    bubbles();
    common();
    settimeout('skip()', 1000 * 7);
    settimeout('main_page()', 1000 * 6);
}
function skip() {
    $('.skip').addClass('on')
}

//main
function main_page() {
    $.ajax({
        type: 'get'
        , url: './page/main.html'
        , dataType: 'html'
        , success: function (data) {
            $("#container").html(data);
            overview_page();
            top_menu();
            common();
        }
    });
}


//1page - p_overview
function overview_page() {
    $.ajax({
        type: 'get'
        , url: './page/p_overview.html'
        , dataType: 'html'
        , success: function (data) {
            $(".content").html(data);
            common();
            slider();
        }
    });
}
//2page - portfolio_page
function portfolio_page() {
    $.ajax({
        type: 'get'
        , url: './page/p_portfolio.html'
        , dataType: 'html'
        , success: function (data) {
            $(".content").html(data);
            common();
        }
    });
}
//3page - portfolio_page
//4page - portfolio_page
function profile_page() {
    $.ajax({
        type: 'get'
        , url: './page/p_profile.html'
        , dataType: 'html'
        , success: function (data) {
            $(".content").html(data);
            common();
        }
    });
}