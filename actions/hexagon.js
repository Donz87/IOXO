const hexagonAnim = () => {
    const odd = document.querySelectorAll('.block:nth-child(odd)');
    const even = document.querySelectorAll('.block:nth-child(even)');

    if (window.matchMedia("(max-width: 720px)").matches) {
        console.log(odd[0])
       
        odd.forEach(block => block.style.transform = 'translateX(-15vw)');
        even.forEach(block => block.style.transform = 'translateX(15vw)');
    } else {
        odd.forEach(block => block.style.transformX = '');
        even.forEach(block => block.style.transformX = '');
    }

}

export default hexagonAnim;