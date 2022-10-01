import  './styles/styles.css'

const size = function (){
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const parents_items = document.querySelectorAll('.mySwiper');
    const lists_items = document.querySelectorAll('.mySwiper__wrapper');
    const items_slides = document.querySelectorAll('.mySwiper__slide');

    const close_side_menu = document.querySelector('.side-menu-header__btn-back');
    const side_menu = document.querySelector('.side-menu');
    const content = document.querySelector('.body-content');
    const header_menu = document.querySelector('.header__container');
    if (viewport_width < 780){
        if (!parents_items[0].classList.contains('swiper')){
            header_menu.classList.add('width__container');
            for (let i = 0; i < parents_items.length; i++){
                parents_items[i].classList.add('swiper');
                lists_items[i].classList.add('swiper-wrapper');
                if (parents_items[i].classList.contains('mySwiper-services')){
                    parents_items[i].classList.remove('mySwiper-table');
                    lists_items[i].classList.remove('mySwiper-table__wrapper');
                }
                else{
                    parents_items[i].classList.remove('mySwiper-grid');
                    lists_items[i].classList.remove('mySwiper-grid__wrapper');
                }
            }
            for (let i = 0; i < items_slides.length; i++){
                items_slides[i].classList.add('swiper-slide');
                if (items_slides[i].parentElement.classList.contains('mySwiper-services__wrapper')){
                    items_slides[i].classList.remove('mySwiper-table__slide');
                }
                else {
                    items_slides[i].classList.remove('mySwiper-grid__slide');
                }
            }
        }
    }
    else{
        header_menu.classList.remove('width__container');
        if (parents_items[0].classList.contains('swiper')) {
            for (let i = 0; i < parents_items.length; i++){
                parents_items[i].classList.remove('swiper');
                lists_items[i].classList.remove('swiper-wrapper');
                if (parents_items[i].classList.contains('mySwiper-services')){
                    parents_items[i].classList.add('mySwiper-table');
                    lists_items[i].classList.add('mySwiper-table__wrapper');
                }
                else{
                    parents_items[i].classList.add('mySwiper-grid');
                    lists_items[i].classList.add('mySwiper-grid__wrapper');
                }
            }
            for (let i = 0; i < items_slides.length; i++) {
                items_slides[i].classList.remove('swiper-slide');
                if (items_slides[i].parentElement.classList.contains('mySwiper-services__wrapper')){
                    items_slides[i].classList.add('mySwiper-table__slide');
                }
                else {
                    items_slides[i].classList.add('mySwiper-grid__slide');
                }
            }
        }
        if (viewport_width < 1400){
            side_menu.style.transform = 'translateX(-100%)';
            content.style.transform = 'translateX(0%)';
            content.style.width = viewport_width + 'px';
            close_side_menu.classList.remove('side-menu-header__btn-back--1400');
        }
        else {
            side_menu.style.transform = 'translateX(0%)';
            content.style.transform = 'translateX(320px)';
            content.style.width = (viewport_width - 320) + 'px';
            close_side_menu.classList.add('side-menu-header__btn-back--1400');
        }
    }
}

size();
window.addEventListener('resize', size);