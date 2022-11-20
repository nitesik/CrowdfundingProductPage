import { useState } from "react";
import icon from "./Images/icon-hamburger.svg";
import icon_close from "./Images/icon-close-menu.svg";
import logo from "./Images/logo.svg";

function Navbar({width}) {

  const [menu, setMenu] = useState(false)
  
  function MobileNav() {

    return (
      <div>
        {!menu ? <img src={icon} onClick={() => setMenu(true)} className="menu-close" /> : 
        <div>
          <img src={icon_close} onClick={() => setMenu(false)} className="menu-close" />
          <div className="mobile-container">
            <div className="mobile-content">
              <div className="title">About</div>
              <hr />
              <div className="title">Discover</div>
              <hr />
              <div className="title">Get Started</div>
            </div>
          </div>
        </div>}
      </div>
    )
  }
  
  return (
    <nav className="navbar">
      <img src={logo} className="logo-text" />
      {width >= 737 ? <div className="navbar-elements">
        <div>About</div>
        <div>Discover</div>
        <div>Get Started</div>
      </div> : <MobileNav />}
      
    </nav>
  )
}

export default Navbar;