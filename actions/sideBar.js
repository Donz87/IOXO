const sideBar = () => {
    const hamburger = document.querySelector('.hamburger');
    const sideBar = document.querySelector('.side-bar');
    const line = document.querySelector('.side-bar--line');

    const open = () => {
        sideBar.classList.add('active');
        document.documentElement.style.overflowY= 'hidden';
        let width = 1;
        setTimeout ( () => {
        const lineAn = setInterval(() => {
            width = width + 1 ;

            if (width < 90)  {
                line.style.width = width + '%';
            } else {
                clearInterval(lineAn);
            }
        },10)} , 400);
    }

    const close = () => {
        sideBar.classList.remove('active');
        document.documentElement.style.overflowY= '';
        let width = 90;
        const lineAn = setInterval(() => {
            width = width - 5 ;

            if (width > 1)  {
                line.style.width = width + '%';
            } else {
                clearInterval(lineAn);
            }
        },10)
    }

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
   
        if( hamburger.classList.contains('is-active')) {
            open();
         
        } else {
           close();
        }
    });
}

export default sideBar;