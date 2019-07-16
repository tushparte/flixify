import React from "react";
import "materialize-css/dist/css/materialize.min.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue">
            <a href="#" className="brand-logo">
              Flixify
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
