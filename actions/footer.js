const year = () => {
    const footer = document.querySelector('.misc');
    footer.innerHTML = '© ' + new Date().getFullYear() + ' IOXO';
  }

  export default year;