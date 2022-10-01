import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const swiper_brands = new Swiper(".mySwiper-brand", {
    slidesPerView: 'auto',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    keyboard: {
        enabled: true,
        pageUpDown: true,
        onlyInViewport: true,
    },
    touchRatio:1,
    watchOverFlow:true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
});

const swiper_devices = new Swiper(".mySwiper-devices", {
    slidesPerView: 'auto',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    keyboard: {
        enabled: true,
        pageUpDown: true,
        onlyInViewport: true,
    },
    touchRatio:1,
    watchOverFlow:true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
});

const swiper_services = new Swiper(".mySwiper-services", {
    slidesPerView: 'auto',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    keyboard: {
        enabled: true,
        pageUpDown: true,
        onlyInViewport: true,
    },
    touchRatio:1,
    watchOverFlow:true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
});
