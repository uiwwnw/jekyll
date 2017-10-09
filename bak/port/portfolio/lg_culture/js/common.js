$(document).ready(function () {
tile_resize();
})


function tile_resize(){
    var tWid= $(window).width(),
//        tHei= $(window).height(),
        tWid1= tWid/4.6 ,
//        left= 100/4.6,
        tWid2= tWid/10 ,
        tWid3= tWid/2.3 ,
        tWid4= tWid/3,
        tWid5= (tWid-30)/3;
    
    $('.tile .type-1 td').css({
        width:tWid1,
        minWidth:tWid1,
        maxWidth:tWid1,
        height:tWid1,
        minHeight:tWid1,
        maxHeight:tWid1
    })
    $('.tile .type-2 td').css({
        width:tWid2,
        minWidth:tWid2,
        maxWidth:tWid2,
        height:tWid2,
        minHeight:tWid2,
        maxHeight:tWid2
    })
    $('.tile .type-3 td').css({
        width:tWid3,
        minWidth:tWid3,
        maxWidth:tWid3,
        height:tWid3,
        minHeight:tWid3,
        maxHeight:tWid3
    })
    $('.tile .type-4 td').css({
        width:tWid4,
        minWidth:tWid4,
        maxWidth:tWid4,
        height:tWid4,
        minHeight:tWid4,
        maxHeight:tWid4
    })
    
    
//    매거진 디테일 테이블 width 값 

    $('.listWrap .imgwrap').css({
//        width:tWid5,
//        minWidth:tWid5,
//        maxWidth:tWid5,
        height:tWid5,
        minHeight:tWid5,
        maxHeight:tWid5
    })
    $('.listWrap .imgwrap.time3').css({
        height:tWid5 * 3,
        minHeight:tWid5 * 3,
        maxHeight:tWid5 * 3
    })
    $('.listWrap .imgwrap.time2').css({
        height:tWid5 * 2,
        minHeight:tWid5 * 2,
        maxHeight:tWid5 * 2
    })

    
}