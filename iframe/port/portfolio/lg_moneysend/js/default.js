jQuery(window).load(function () {
    "use strict";
    // function treeToggle() {
    //     $('.fold_btn').on({
    //         "click": function () {
    //             var th = $(this);
    //             th.toggleClass('on');
    //             th.parents('.m-treelist').find('.tree').toggleClass('on');
    //         },
    //     })
    // }

    //normal scroll
    function scroll_default() {
        $('.area').each(function (index, data) {
            var wrap = $(this),
                tar = wrap.children('._area_scroll'),
                title_area = wrap.children('.title_area'),
                content_area = wrap.children('.content_area'),
                pro_tab_area = wrap.children('.pro_tab_area'),
                tab_area = wrap.children('.tab_area'),
                footer_area = wrap.children('footer'),
                t = 0,
                b = 0;

            if (title_area.length > 0) {
                t = t + 1 + title_area.height();
                pro_tab_area.removeClass('liiv');
                tab_area.removeClass('liiv');
                content_area.removeClass('liiv');
            } else {
                pro_tab_area.addClass('liiv');
                tab_area.addClass('liiv');
                content_area.addClass('liiv');
            }
            if (pro_tab_area.length > 0) {
                t = t + pro_tab_area.height();
            }
            if (tab_area.length > 0) {
                t = t + tab_area.height();
            }
            if (content_area.length > 0) {
                t = t + content_area.height();
                // console.log(content_area.height())
            }
            if (footer_area.length > 0) {
                b = b + footer_area.height() + 20;
                // console.log(footer_area.height())
            }
            tar.css('margin-top', t + 'px');
            tar.css('margin-bottom', b + 'px');
            // alert(title_area.length)
        });
    }

    //common open
    function common_toggle() {
        $(".common-toggle").on("click", function () {
            var target = $(this).attr('data-class');
            $('.' + target).toggleClass('on');
            scroll_default()
        })
    }

    function common_view() {
        $(".common-view").on("click", function () {
            var target = $(this).attr('data-class');
            $('.' + target).addClass('on');
            scroll_default()
        })
    }

    //common close
    function common_close() {
        $(".common-close").on("click", function () {
            var target = $(this).attr('data-class');
            $('.' + target).removeClass('on');
            scroll_default()
        })
    }


    //  popup  start
    // function popup_view() {
    //     $(".popup-view").on("click", function () {
    //         var id = $(this).attr('data-popup-id');
    //                 // idd = '#' + id;
    //         $('#' + id).addClass("ing").addClass("on");
    //     });
    // }
    //
    // function popup_close() {
    //     $(".popup-close").on("click", function () {
    //         var popup = $(this).parents('.popup_area')
    //
    //         popup.addClass("off").removeClass("on");
    //         popup.on(animationEvent, function () {
    //             popup
    //                     .removeClass("off")
    //                     .removeClass("ing")
    //                     .unbind();
    //         });
    //     })
    // }
    function ani_toggle() {
        $(".ani-toggle").on("click", function () {
            var target = $(this).attr('data-class');
            if ($('.' + target).hasClass("on")) {
                $('.' + target).addClass("off").removeClass("on");
                $('.' + target).on(animationEvent, function () {
                    $('.' + target)
                        .removeClass("off")
                        .removeClass("ing")
                        .unbind();
                });
            } else {
                $('.' + target).addClass("ing").addClass("on");
            }
            scroll_default()
        })
    }

    function ani_view() {
        $(".ani-view").on("click", function () {
            var target = $(this).attr('data-class');
            $('.' + target).addClass("ing").addClass("on");
            scroll_default()
        })
    }

    function ani_close() {
        $(".ani-close").on("click", function () {
            var target = $(this).attr('data-class');
            $('.' + target).addClass("off").removeClass("on");
            $('.' + target).on(animationEvent, function () {
                $('.' + target)
                    .removeClass("off")
                    .removeClass("ing")
                    .unbind();
            });
            scroll_default()
        })
    }

    function tab_toggle() {
        $(".tab-toggle-2").on("click", function () {
            var th = $(this),
                pa = th.parent().parent();
            th.toggleClass('on');
            pa.find('.tab-toggle-2').not(th).removeClass('on');
            scroll_default()
        });
        $(".tab-toggle-1").on("click", function () {
            var th = $(this),
                pa = th.parent();
            th.toggleClass('on');
            pa.find('.tab-toggle-1').not(th).removeClass('on');
            scroll_default()
        })
    }

    function tab_on() {
        $(".tab-on-2").on("click", function () {
            var th = $(this),
                pa = th.parent().parent();
            th.addClass('on');
            pa.find('.tab-on-2').not(th).removeClass('on');
            scroll_default()
        });
        $(".tab-on-1").on("click", function () {
            var th = $(this),
                pa = th.parent();
            th.addClass('on');
            pa.find('.tab-on-1').not(th).removeClass('on');
            scroll_default()
        })
    }

    function normal_toggle() {
        $(".normal-toggle-3").on("click", function () {
            var th = $(this),
                pa = th.parent().parent().parent();
            pa.toggleClass('on');
            pa.parent().children().not(pa).removeClass('on');
            scroll_default()
        });
        $(".normal-toggle-2").on("click", function (event) {
            var th = $(this),
                pa = th.parent().parent();
            pa.toggleClass('on');
            pa.parent().children().not(pa).removeClass('on');
            scroll_default()
            if(th.hasClass('_rdo_box')){
                event.preventDefault();
                // alert('dddd')
                var inp = th.children('input'),
                      check = inp.is(":checked");
                inp.prop('checked', true);
                // alert($check);
            }
        });
        $(".normal-toggle-1").on("click", function () {
            var th = $(this),
                pa = th.parent();
            pa.toggleClass('on');
            pa.parent().children().not(pa).removeClass('on');
            // pa.find('.normal-toggle-1').not(th).removeClass('on');
            scroll_default();
            // alert('ddddd')
        })
    }

    function normal_on() {
        $(".normal-on-2").on("click", function () {
            var th = $(this),
                pa = th.parent().parent();
            pa.addClass('on');
            // pa.find('.normal-on-2').not(th).removeClass('on');
            scroll_default()
        });
        $(".normal-on-1").on("click", function () {
            var th = $(this),
                pa = th.parent();
            pa.addClass('on');
            // pa.find('.normal-on-1').not(th).removeClass('on');
            scroll_default()
        })
    }

    function accordion() {
        $(".accordion_wrap ._front").on("click", function () {
            var th = $(this),
                pa = th.parent(),
                pas = th.parent().parent();
            pa.toggleClass('on');
            pas.children('.accordion_wrap').not(pa).removeClass('on');
        });
    }

    function placeholder_floating() {
        var tar = $('.floating_inp');
        tar.each(function () {
            // alert('d');
            var th = $(this),
                pa = th.parent('label'),
                placeholder = th.attr('placeholder');
            th.attr('placeholder', '');
            pa.addClass('floating_wrap').append('<span class="_floating">' + placeholder + '</span>');
            th.on("focusin", function () {
                pa.addClass('floating');
            }).on("focusout", function () {
                if (th.val().length == 0)
                    pa.removeClass('floating');
            })
        })
    }

    function search_form() {
        var tar = $('input[type="search"]');
        var cancel = "취소";
        tar.each(function () {
            // alert('d');
            var th = $(this),
                pa = th.parents('.box_inp_wrap');
            // th.attr('placeholder','');
            // pa.append('<button class="_cancel">' + cancel + '</button>');
            th.on("focusin", function () {
                pa.addClass('cancel_on');
                pa.addClass('del_on');
            }).on("focusout", function () {
                if (th.val().length == 0 && pa.hasClass('cancel_on') == false) {
                    setTimeout(remove_cancel, 300);
                    function remove_cancel() {
                        // alert('dd')
                        pa.removeClass('cancel_on')
                    }
                }
            });
            pa.find('._cancel').on("click", function () {
                pa.find(tar).val('');
                pa.find(tar).blur();
                pa.removeClass('del_on cancel_on')
            })
        });


    }

    // function input_delete() {
    // $('._cancel').on("click", function () {
    //     var th = $(this);
    //     alert('dd')
    // })
    // }
    function input_delete() {
        var tar = $('input[type="text"],input[type="password"],input[type="search"],textarea');
        tar.each(function () {
            var th = $(this),
                pa = th.parents('.box_inp_wrap');
            // if(th[0].tagName == "TEXTAREA"){
            //     pa.addClass('textarea_wrap');
            // }
            // pa.append('<button class="_delete"><i class="x_close_small"></i></button>');
            th.on("focusin", function () {
                // if(th.val().length != 0){
                pa.addClass('del_on');
                // }
            }).on("focusout", function () {
                if (th.val().length == 0 && pa.hasClass('cancel_on') == false) {
                    setTimeout(remove_delete, 300);
                    function remove_delete() {
                        pa.removeClass('del_on');
                    }
                }
            });
            pa.find('._delete').on("click", function () {
                // var th = $(this);
                pa.find(tar).val('');
                if (pa.hasClass('cancel_on')) {
                    pa.removeClass('del_on');
                    pa.find(tar).focus();
                } else {
                    pa.find(tar).blur();
                }
            })
        })
    }

    function date_pick() {
        var dateFormat = "yy-mm-dd",
            from = $("#from")
                .datepicker({
                    // defaultDate: "+8w",
                    // selectOtherMonths: false,
                    // selectOtherMonths: false,
                    // showOtherMonths: false,
                    showMonthAfterYear: true,
                    // changeMonth: true,
                    changeYear: true,
                    // yearSuffix: '',
                    changeMonth: true,
                    dateFormat: "yy-mm-dd",
                    numberOfMonths: 1,
                    firstDay: 1,
                    dayNames:
                        [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ],
                    dayNamesShort:
                        [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ],
                    dayNamesMin:
                        [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ],
                    monthNames:
                        [ "01", "02", "03", "04", "05", "06",
                            "07", "08", "09", "10", "11", "12" ],
                    monthNamesShort:
                        [ "01", "02", "03", "04", "05", "06",
                            "07", "08", "09", "10", "11", "12" ]
                })
                .on("change", function () {
                    to.datepicker("option", "minDate", getDate(this));
                }),
            to = $("#to").datepicker({
                // defaultDate: "+8w",
                // selectOtherMonths: false,
                // selectOtherMonths: false,
                // showOtherMonths: false,
                // showMonthAfterYear: true,
                showMonthAfterYear: true,
                // changeMonth: true,
                changeYear: true,
                // yearSuffix: '',
                changeMonth: true,
                dateFormat: "yy-mm-dd",
                numberOfMonths: 1,
                firstDay: 1,
                dayNames:
                    [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ],
                dayNamesShort:
                    [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ],
                dayNamesMin:
                    [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ],
                monthNames:
                    [ "01", "02", "03", "04", "05", "06",
                        "07", "08", "09", "10", "11", "12" ],
                monthNamesShort:
                    [ "01", "02", "03", "04", "05", "06",
                        "07", "08", "09", "10", "11", "12" ]
            })
                .on("change", function () {
                    from.datepicker("option", "maxDate", getDate(this));
                });

        function getDate(element) {
            var date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }

            return date;
        }
    }
    function skip_btn_txt() {
        // slick-active
        var tar = $('.intro_skip'),
            watch_wrap = $('.slick-dots'),
            watch_item = watch_wrap.children(),
            watch_item_lth = watch_item.length - 1,
            watch_item_last = watch_item.eq(watch_item_lth);
        // alert(watch_item_last);
        $('.intro-slider').on('swipe', function(event, slick, direction){
            switch_txt();
        });

        watch_item.on('click', function () {
            switch_txt();
        });
        function switch_txt() {
            // alert('dd')
            if(watch_item_last.hasClass('slick-active')){
                tar.addClass('done');
            }else{
                tar.removeClass('done');
            }
        }
        // watch_item_last.click(function () {
        //     alert('ddd')
        //     // var th = $(this);
        //     // console.log(watch_item_last);
        //     //
        //     // if(th.hasClass('slick-active')){
        //     //
        //     // }
        // })
    }
    function input_focus_on() {
        var tar = $('input[type="text"],input[type="password"],input[type="search"],textarea');
        tar.each(function () {
            var th = $(this),
                pa = th.parent();

            th.on("focusin", function () {
                // if(th.val().length != 0){
                pa.addClass('focus_on');
                // }
            }).on("focusout", function () {
                pa.removeClass('focus_on');
            });
        })
    }
    function slider() {
        $('.intro-slider').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
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
        };

        for (t in animations) {
            if (el.style[t] !== undefined) {
                return animations[t];
            }
        }
    }


    //  popup  end

    /* Listen for a animation! */
    var animationEvent = whichAnimationEvent();


    // document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);


    //실행함수
    scroll_default();
    common_toggle();
    common_view();
    common_close();

    ani_toggle();
    ani_view();
    ani_close();

    // loaded ();
    tab_toggle();
    tab_on();
    normal_toggle();
    // normal_on();

    // accordion();


    // placeholder_floating();

    search_form();

    input_delete();
    slider();

    input_focus_on();


    date_pick();
    skip_btn_txt();

});
