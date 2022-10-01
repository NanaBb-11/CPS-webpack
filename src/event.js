
const company_more = document.querySelector('.mySwiper-brand__more-input');
company_more.addEventListener('click', function (){
    const company_block = document.querySelector('.mySwiper-brand__wrapper');
    const company_checkbox = document.querySelector('.mySwiper-brand__more-checkbox');
    const company_more_text = document.querySelector('.mySwiper-brand__more-text');
    if (company_more.checked){
        company_block.style.maxHeight = '300px';
        company_block.style.transition = '1s';
        company_checkbox.style.transform = 'rotate(180deg)';
        company_more_text.textContent = 'Скрыть';
    }
    else {
        company_block.style.maxHeight = 170 + 'px';
        company_block.style.transition = '1.5s';
        company_checkbox.style.transform = 'rotate(360deg)';
        company_more_text.textContent = 'Показать все';
    }
});
const devices_more = document.querySelector('.mySwiper-devices__more-input');
devices_more.addEventListener('click', function (){
    const device_block = document.querySelector('.mySwiper-devices__wrapper');
    const device_checkbox = document.querySelector('.mySwiper-devices__more-checkbox');
    const device_more_text = document.querySelector('.mySwiper-devices__more-text');
    if (devices_more.checked){
        device_block.style.maxHeight = '600px';
        device_block.style.transition = '1s';
        device_checkbox.style.transform = 'rotate(180deg)';
        device_more_text.textContent = 'Скрыть';
    }
    else {
        device_block.style.maxHeight = 170 + 'px';
        device_block.style.transition = '1.5s';
        device_checkbox.style.transform = 'rotate(360deg)';
        device_more_text.textContent = 'Показать все';
    }
});

const side_menu = document.querySelector('.side-menu');
const content = document.querySelector('.body-content');
const close_side_menu = document.querySelector('.side-menu-header__btn-back');
const open_side_menu = document.querySelector('.header-menu__burger');
open_side_menu.addEventListener('click', function (){
    side_menu.style.transition = '1s';
    side_menu.style.transform = 'translateX(0%)';
    side_menu.style.boxShadow = '-2px 0 4px rgba(69, 79, 126, 0.02), 16px 0 52px rgba(14, 24, 80, 0.2)';
    content.style.opacity = '0.5';

});
close_side_menu.addEventListener('click', function (){
    side_menu.style.transform = 'translateX(-100%)';
    side_menu.style.boxShadow = 'none';
    content.style.opacity = '1';
});

const side_feedback = document.querySelector('.feedback__aside');
const side_call = document.querySelector('.call__aside');
const open_side_feedback = document.querySelectorAll('.repair-btn');
const open_side_call = document.querySelectorAll('.check-status-btn');
const close_side_feedback = document.querySelector('.feedback__close-btn');
const close_side_call = document.querySelector('.call__close-btn');

for (let i = 0; i < open_side_feedback.length; i++){
    open_side_feedback[i].addEventListener('click', function (){
        side_feedback.style.transition = '1s';
        side_feedback.style.transform = 'translateX(0%)';
        content.style.opacity = '0.5';
    });
}
for (let i = 0; i < open_side_call.length; i++){
    open_side_call[i].addEventListener('click', function (){
        side_call.style.transition = '1s';
        side_call.style.transform = 'translateX(0%)';
        content.style.opacity = '0.5';
    });
}
close_side_feedback.addEventListener('click', function (){
    side_feedback.style.transform = 'translateX(150%)';
    content.style.opacity = '1';
});

close_side_call.addEventListener('click', function (){
    side_call.style.transform = 'translateX(150%)';
    content.style.opacity = '1';
});