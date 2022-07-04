import headerBG from "./actions/header.js";
import year from "./actions/footer.js";
import scrollBanner from "./actions/scroll.js";
import logo from "./actions/logo.js";
import sideBar from "./actions/sideBar.js";
import Button from "./actions/button.js"




  year();
  scrollBanner();
  logo();
  sideBar();
  Button();
  window.addEventListener('scroll', () => {
    headerBG();

  } );