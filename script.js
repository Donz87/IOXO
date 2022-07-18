import headerBG from "./actions/header.js";
import year from "./actions/footer.js";
import scrollBanner from "./actions/scroll.js";
import logo from "./actions/logo.js";
import sideBar from "./actions/sideBar.js";
import hexagon from "./actions/hexagon.js";
import particles from "./actions/particles.js";
import animSocIcon from "./actions/anim-soc-icon.js";
import modal from "./actions/modal.js";
import forms from "./actions/send.js";



  year();
  scrollBanner();
  logo();
  sideBar();
  particles();
  animSocIcon();
  modal();
  forms();
 
  window.addEventListener('scroll', () => {
    hexagon();
    headerBG();
  } );



  