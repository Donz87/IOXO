import iconClose from "./iconClose.js";

const modal = () => {
    const wrapper = document.querySelector('.modal--wrapper');
    const btn = document.querySelector('.btn--modal');
    const close = document.querySelector('.modal--close');
    const popUp = document.querySelector('.modal');  

    const darkBg =() => {
        wrapper.style.display = 'grid';
        setTimeout(() => {popUp.style.opacity ='1'}, 100);
        setTimeout(() => {wrapper.style.background =' rgba(5, 12, 18,.8)'}, 500);
    }
    const noScroll = () => {
        document.documentElement.style.overflow = 'hidden';
    }

    const scroll = () => {
        document.documentElement.style.overflow = '';
    }
    const closeModal = () => {
        wrapper.style.display = 'none';
        wrapper.style.background = '';
        popUp.style.opacity ='0';
    }

    btn.addEventListener('click', () => {
        darkBg();
        noScroll();
        iconClose();
    });

    close.addEventListener('click', () => {
        closeModal();
        scroll();
    });
}

export default modal;