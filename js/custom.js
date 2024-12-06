
//메인비주얼 슬라이드
$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        pauseOnHover: false,
        useTransform: false,
        fade: true
    });

$(function () {
    $('.main_content .inner').slick({
        arrows: true,
        slidesToShow: 5
    })
})

$(function () {
    $('.Ti_itm_content .itm_box').slick({
        arrows: true,
        slidesToShow: 5
    })
})
    //슬라이드로 탭구현.
    $('.main_visual_slide').on('afterChange', function (e, s, c) {
        $('.main_visual .lnk li').removeClass('on');
        $('.main_visual .lnk li').eq(c).addClass('on')
    });


    $('.main_content .inner').on('afterChange', function (e, s, c) {
        $('.main_content .itm').removeClass('on');
        $('.main_content .itm').eq(c).addClass('on')
    });

    $('.Ti_itm_content').on('afterChange', function (e, s, c) {
        $('.Ti_itm_content .itm_box').removeClass('on');
        $('.Ti_itm_content .itm_box').eq(c).addClass('on')
    });
    //슬라이드 arrow
    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });

    $('.main_visual .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });

    $('.Ti_itm_content .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });

    $('.Ti_itm_content .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });
    //main_content 슬라이드 arrow


    $('.charact_content .inner .card_itm').on('click', function () {
        let idx = $(this).index();
        $('.charact_content .charac_img .charac').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('.ovmap_content .iconimgbox').on('click', function () {
        let idx = $(this).index();
        $('.ovmap_content .ovmap_img').eq(idx).addClass('on').siblings().removeClass('on');
        $('.ovmap_content').css({
            background: `url(./images/ovmap_${idx + 1}.jpg)no-repeat center center/cover`
        })
    })


});


$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header .gnb>ul').addClass('on')
        } else {
            $('.header .gnb>ul').removeClass('on')
        }
    })
})

$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })
})
