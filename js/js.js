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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
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
            breakpoint: 980,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
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
//show menu
$(document).ready(function () {
    var click = document.querySelector(".bar");
    var show = document.querySelector(".show-js");
    var overlay = document.querySelector(".overlay");

    click.addEventListener("click", function () {
        show.classList.add("active");
        overlay.classList.add("active");
    });

    overlay.addEventListener("click", function () {
        show.classList.remove("active");
        overlay.classList.remove("active");
    });
    show.addEventListener("click", function (e) {
        e.stopPropagation();
    });
});
// drop menu

$(document).ready(function () {
    var click = document.querySelectorAll(".click");
    var drop = document.querySelectorAll(".drop");
    // var list = document.querySelectorAll(".header__list");

    click.forEach(function (tab, index) {
        tab.onclick = function () {
            drop[index].classList.toggle("open");
            $(this).children("i").toggleClass("fa-plus-circle fa-minus-circle");

            return false;
        };
    });
});
// hien thi menu san phan
$(document).ready(function () {
    var clicks = document.querySelectorAll(".bar-2");
    var shows = document.querySelectorAll(".product__for");
    var backdrop = document.querySelector(".backdrop");
    var show;
    if (screen.width < 980) {
        clicks.forEach(function (tab, index) {
            tab.onclick = function () {
                show = shows[index];
                // console.log(show)
                show.classList.add("active");
                backdrop.classList.add("active");
                backdrop.addEventListener("click", function () {
                    show.classList.remove("active");
                    backdrop.classList.remove("active");
                });
            };
        });
    }
});
