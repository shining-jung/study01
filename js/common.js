let mainSlide = new Swiper(".mainSlide", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".next1",
        prevEl: ".prev1",
    },
    pagination: {
        el: ".pg1",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

var eduMonthSlide = new Swiper(".monthCourse", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    pagination: {
        clickable: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 94,
        },
    },
});

var spaceIntroSlide = new Swiper(".spaceIntroSlide", {
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: ".spaceIntropagination",
        clickable: true,
        renderBullet: function (index, className) {
            var titles = [
                "책 놀이터",
                "생활 수유실",
                "동네부엌",
                "생생 수유실",
                "마주침 공간1",
                "마주침 공간2",
                "행정전시",
                "한뼘전시",
                "무아지경",
                "생생쌀롱1",
                "생생쌀롱2",
            ];
            return (
                '<span class="' + className + '">' + titles[index] + "</span>"
            );
        },
    },
});

var snsSlide = new Swiper(".snsSlide", {
    slidesPerView: 3,
    spaceBetween: 38,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
