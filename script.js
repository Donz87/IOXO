import headerBG from "./actions/header.js";
import year from "./actions/footer.js";
import scrollBanner from "./actions/scroll.js";
import logo from "./actions/logo.js";
import sideBar from "./actions/sideBar.js";
import hexagon from "./actions/hexagon.js";
import particles from "./actions/particles.js"






  year();
  scrollBanner();
  logo();
  sideBar();
  particles();
  window.addEventListener('scroll', () => {
    hexagon();
    headerBG();
  } );



  