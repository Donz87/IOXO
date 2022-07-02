import headerBG from "./actions/header.js";
import year from "./actions/footer.js";
import scrollBanner from "./actions/scroll.js";
import logo from "./actions/logo.js";
import hexagonAnim from "./actions/hexagon.js"


  year();
  scrollBanner();
  logo();
  // hexagonAnim();
  window.addEventListener('scroll', () => {
    headerBG();

  } );