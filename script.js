
const headerBG = () => {
  const header = document.querySelector('header');
   window.scrollY > 60 ?  header.style.background = 'rgba(0,0,0,.7)' : header.style.background = '';
}

const year = () => {
    const footer = document.querySelector('.misc');
    footer.innerHTML = '© ' + new Date().getFullYear() + ' IOXO';
  }

const scrollBanner = () => {
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substring(1);
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
  }  

  year();
  scrollBanner();
  window.addEventListener('scroll', headerBG);