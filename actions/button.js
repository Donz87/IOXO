
const Button = () => {
    const btn = document.querySelector('.btn-three');
    btn.innerHTML = '<div><span>' +
     btn.textContent.trim().split('').join('</span><span>') + 
     '</span></div>';
}

export default Button;