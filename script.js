
const headerBG = () => {
  const header = document.querySelector('header');
  const headerLink = document.querySelectorAll('header a');
   window.scrollY > 60 ?  header.style.background = 'rgba(1,49,71,.7)' : header.style.background = '';

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