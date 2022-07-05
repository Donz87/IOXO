
const hexagon = () => {

    const one = document.querySelector('.b-one');
    const two = document.querySelector('.b-second');
    const three = document.querySelector('.b-third');
    const four = document.querySelector('.b-fourth');
    const five = document.querySelector('.b-fifth');

    // for (let i = 0; i < block.length; i++) {
    //    console.log( block[i].getBoundingClientRect().top + '--' + i)
    let count = 0.5;

    const animation = (elem, elemClass) => {
        let scroll = elem.getBoundingClientRect().top;
        console.log(scroll);
        if(window.scrollY > scroll + 100) {     
            elem.classList.add(elemClass);
        } else {
           elem.classList.remove(elemClass); 
        }
    
    
    }
   animation(one, 'scale-one');
   animation(two, 'scale-two');
   animation(three, 'scale-three');
   animation(four, 'scale-four');
   animation(five, 'scale-five');
   animation(one, 'scale-one');
}

export default hexagon;