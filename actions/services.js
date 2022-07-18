
const serviceNoScroll = () => {
   const block = document.querySelector('.block--services');
   const content = document.querySelector('.service--content');
      block.classList.add('move--services');
      block.classList.add('change--hex');
      block.classList.add('change--size');
      content.classList.add('service--show');

}


const services = () => {
 const start = document.querySelector('.section-third').getBoundingClientRect().top;
 const block = document.querySelector('.block--services');
 const content = document.querySelector('.service--content');
 const size =document.querySelector('.section-third').getBoundingClientRect().height;


 if(start <=  size/1.3) {
    block.classList.add('move--services');
 }
 if(size/2.1< start  && start < size/1.6) {
    block.classList.add('change--hex');
    block.classList.add('change--size');
    
 } 
if(size/2.4< start  && start < size/2) {content.classList.add('service--show');}
if(start > size/1.3) {
    block.classList.remove('change--size');
    block.classList.remove('change--hex');
    block.classList.remove('move--services');
    content.classList.remove('service--show');
 }
}

export  {services, serviceNoScroll};