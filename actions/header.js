const headerBG = () => {
    const header = document.querySelector('header');
    const headerLink = document.querySelectorAll('header a');
     window.scrollY > 60 ?  header.style.background = 'rgba(1,49,71,.7)' : header.style.background = '';
  
  }

  export default headerBG;