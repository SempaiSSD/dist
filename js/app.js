(() => {
    "use strict";

    $(document).ready((function () {
        $(".banner").slick({
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $(".site-header__burger").click((function () {
            $("body").css('overflow', 'hidden')
            $(".menu").addClass("active");
            $(this).addClass("active");
            $(".menu__close").addClass("active");
        }));
        $(".menu__close").click((function () {
            $("body").css('overflow', 'auto')
            $(".menu").removeClass("active");
            $(this).removeClass("active");
            $(".site-header__burger").removeClass("active");
        }));
        $(".video__slider").slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4e3,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: "<button type='button' class='slick-prev'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><g id='_3-Arrow_Right' data-name='3-Arrow Right'><path d='M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z'/></g></svg></button>",
            nextArrow: "<button type='button' class='slick-next'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><g id='_3-Arrow_Right' data-name='3-Arrow Right'><path d='M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z'/></g></svg></button>",
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });



        $('.myForm__form').submit(function (e) {
            e.preventDefault();
            let th = $(this);

            $.ajax({
                url: 'formfunc.php',
                type: 'POST',
                data: th.serialize(),
                success: function () {
                    alert('Данные записаны.')
                }, error: function () {
                    alert('Ошибка.')
                }
            })
        })



        $('.lang_buttons').click(function () {
            $('.rus_lang').toggleClass('active');
            $('.en_lang').toggleClass('active');
        })






        // $(".button.rus_lang").click(function () {

        //     var rusLang = document.getElementsByClassName("rus_lang");
        //     var enLang = document.getElementsByClassName("en_lang");
        //     for (i = 0; i < enLang.length; i++) {
        //         enLang[i].style.position = "static";
        //         rusLang[i].style.position = "absolute";
        //         rusLang[i].style.top = "-9999px";
        //         rusLang[i].style.left = "-9999px";
        //     }
        // });

        // $(".button.en_lang").click(function () {

        //     var rusLang = document.getElementsByClassName("rus_lang");
        //     var enLang = document.getElementsByClassName("en_lang");
        //     for (i = 0; i < enLang.length; i++) {
        //         rusLang[i].style.position = "static";
        //         enLang[i].style.position = "absolute";
        //         enLang[i].style.top = "-9999px";
        //         enLang[i].style.left = "-9999px";
        //     }
        // });













    }));
    window["FLS"] = true;
})();