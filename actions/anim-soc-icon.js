

const animSocIcon = () => {
    const icons = document.querySelectorAll('.social--items svg');
     for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener('mouseover', () => {
            console.log(1)
            icons[i].classList.add('animate__animated', 'animate__pulse');
        });
        icons[i].addEventListener('mouseleave', () => {
            icons[i].classList.remove('animate__animated', 'animate__pulse');
        });
     }
}

export default animSocIcon;