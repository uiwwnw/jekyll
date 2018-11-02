jQuery(function () {
    function scroll() {
        $("body").mCustomScrollbar();
    }
    function link() {
        var w_width = $(window).width();
        $('.masonry-item[data-href]').on('click', function () {
            var th = $(this),
                data_href=th.attr('data-href'),
                data_device=th.attr('data-device'),
                title = th.find('._title').text();
            if(w_width>=1024){
                dialog(data_href,title,data_device);
            }else{
                window.open(data_href, "_blank");
            }
        })
    }


    function dialog(href,title,device) {
        $('.dialog').remove();
        var t ='';
        t += '<div class="dialog">';
        t +=   '<iframe src="' + href + '">';
        t +=   '</iframe>';
        t +=   '</div>';
        $('#container').append(t);
        // $('.dialog').dialog({
        //     title:title,
        //     close: function () {
        //         $(this).parent().promise().done(function () {
        //             $('.dialog').remove();
        //         });
        //     }
        // });
        if(device=="phone"){
            $('.dialog').dialog({
                title:title,
                // maxWidth:375,
                // maxHeight: 667,
                // minHeight: 667,
                width: 375,
                height: 667,
                close: function () {
                    $(this).parent().promise().done(function () {
                        $('.dialog').remove();
                    });
                }
            });
        }else{
            $('.dialog').dialog({
                title:title,
                width: '80vw',
                height: '600',
                close: function () {
                    $(this).parent().promise().done(function () {
                        $('.dialog').remove();
                    });
                },
                create:function () {
                    $(this).closest(".ui-dialog")
                        // .find(".ui-dialog-content") // the first button
                        .addClass("large-device");
                }
            });
        }
    }


    scroll();
    link();
    // dialog();
})
$(window).load(function(){
    function masonry() {
        $('.masonry').masonry({
            itemSelector: '.masonry-item',
            // fitWidth: true,
            // use element for option
            columnWidth: '.masonry-sizer',
            percentPosition: true
            // originTop: false
            // gutter: 50
        });
    }
    masonry();
})