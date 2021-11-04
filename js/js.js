// slick
$(document).ready(function () {
    $(".header__slick").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});
$(document).ready(function () {
    $(".parner").slick({
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

$(".most__slick").slick({
    // infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,

    prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fas fa-long-arrow-alt-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><i class="fas fa-long-arrow-alt-right"></i></button>`,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
            },
        },
    ],
});

// tabs
$(document).ready(function () {
    var btn = $(".product .product__for .product__list"),
        info = $(".product .product__nav");
    btn.click(function (e) {
        e.preventDefault();

        btn.removeClass("active");
        $(this).addClass("active");

        var index = $(this).index();
        info.removeClass("active");
        info.eq(index).addClass("active");
        return false;
    });
});
$(document).ready(function () {
    var btn = $(".part2 .product__for .product__list"),
        info = $(".part2 .product__nav");
    btn.click(function (e) {
        e.preventDefault();

        btn.removeClass("active");
        $(this).addClass("active");

        var index = $(this).index();
        info.removeClass("active");
        info.eq(index).addClass("active");
        return false;
    });
});
// PRODUCT DAY TIEN
// $(document).ready(function() {
//     $(".product .product__nav").hide();
//     $(".product .product__nav:first-child").fadeIn();

//     $(".product .product__for li").click(function(){
//         //avtive tab
//         $(".product .product__for li").removeClass("active");
//         $(this).addClass("active");
//         //show content
//         let content = $(this).children("a").attr("href");
//         $(".product .product__nav").fadeOut();
//         $(content).fadeIn();
//         return false;
//     });
// });

// $(document).ready(function() {
//     $(".test .product__nav").hide();
//     $(".test .product__nav:first-child").fadeIn();

//     $(".test .product__for li").click(function(){
//         //avtive tab
//         $(".test .product__for li").removeClass("active");
//         $(this).addClass("active");
//         //show content
//         let content = $(this).children("a").attr("href");
//         $(".test .product__nav").fadeOut();
//         $(content).fadeIn();
//         return false;
//     });
// });

//
// var acordion = document.getElementsByClassName('accordion');

// var i;
// var len = acordion.length;
// for(i = 0; i<len; i++){
//     acordion[i].addEventListener('click', function(){
//         this.classList.toggle('active');
//         var panal = this.nextElementSibling;
//         if(panal.style.maxHeight){
//             panal.style.maxHeight = null;
//         }else{
//             panal.style.maxHeight = panal.scrollHeight + 'px';
//         }
//     })
// }


// jQuery(document).ready(function ($) {
//     $("#menu_offcanvas").SnsAccordion({
//         btn_open: '<span class="ac-tongle open"></span>',
//         btn_close: '<span class="ac-tongle close"></span>',
//     });
//     $("#sns_respmenu .btn2.offcanvas").on("click", function () {
//         if ($("#menu_offcanvas").hasClass("active")) {
//             $(this).find(".overlay").fadeOut(250);
//             $("#menu_offcanvas").removeClass("active");
//             $("body").removeClass("show-sidebar", 4000);
//         } else {
//             $("#menu_offcanvas").addClass("active");
//             $(this).find(".overlay").fadeIn(250);
//             $("body").addClass("show-sidebar");
//         }
//     });

//     if ($("#sns_content .sns-right").length) {
//         $("#sns_respmenu .btn2.rightsidebar")
//             .css("display", "inline-block")
//             .on("click", function () {
//                 if ($("#sns_content .sns-right").hasClass("active")) {
//                     $(this).find(".overlay").fadeOut(250);
//                     $("#sns_content .sns-right").removeClass("active");
//                     $("body").removeClass("show-sidebar", 4000);
//                 } else {
//                     $("#sns_content .sns-right").addClass("active");
//                     $(this).find(".overlay").fadeIn(250);
//                     $("body").addClass("show-sidebar");
//                 }
//             });
//     }

//     if ($("#sns_content .sns-left").length) {
//         $("#sns_respmenu .btn2.leftsidebar")
//             .css("display", "inline-block")
//             .on("click", function () {
//                 if ($("#sns_content .sns-left").hasClass("active")) {
//                     $(this).find(".overlay").fadeOut(250);
//                     $("#sns_content .sns-left").removeClass("active");
//                     $("body").removeClass("show-sidebar", 4000);
//                 } else {
//                     $("#sns_content .sns-left").addClass("active");
//                     $(this).find(".overlay").fadeIn();
//                     $("body").addClass("show-sidebar");
//                 }
//             });
//     }
// });
