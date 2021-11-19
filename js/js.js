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
// tab
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

$(document).ready(function () {
    // them san pham vao cart
    var clicks = document.querySelectorAll(".cart-js");
    var imgs = document.querySelectorAll(".product__img img");
    var titles = document.querySelectorAll(".product__title");
    var totalPrice = document.querySelector(".cart__total-price-js");
    var newPrices = document.querySelectorAll(".price-js");
    var sum = 0;

    function add(img, title, newPrice) {
        const main = document.getElementById("cart");
        const toast = document.createElement("li");
        toast.innerHTML = `
        <div class="cart__item">
            <div class="cart__img">
                <a href="">
                    <img src="${img}"
                    alt=""/>
                </a>
            </div>
            <div class="cart__info">
                <a href="" class="cart__item-title"> ${title} </a>
                <div class="">
                    <span class="cart__item-price">$ 
                        <span class="cart__price-js">
                            ${newPrice}
                        </span>
                    </span>
                </div>
            </div>
        </div>
        <div class="cart__close">
            <i class="fas fa-times-circle"></i>
        </div>`;
        main.appendChild(toast);

        // xoa san pham
        var lis = document.querySelectorAll("#cart li");
        var closes = document.querySelectorAll("#cart .cart__close i");
        var prs = document.querySelectorAll("#cart li .cart__price-js");

        closes.forEach(function (tab, index) {
            tab.onclick = function () {
                sum = sum - Number(prs[index].innerHTML);
                totalPrice.innerHTML = sum.toFixed(2);
                main.removeChild(lis[index]);
            };
        });
    }

    clicks.forEach(function (tab, index) {
        tab.onclick = function () {
            var img = imgs[index].currentSrc;
            var title = titles[index].innerHTML;
            var newPrice = newPrices[index].innerHTML;

            sum = sum + Number(newPrice);
            add(img, title, newPrice);
            totalPrice.innerHTML = sum.toFixed(2);
            return false;
        };
    });
});
