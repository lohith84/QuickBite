import React from 'react';
import './Header.css'; // Custom styles including fonts
import '../../assets/animate/animate.css'; // Custom animation styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons CSS
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header-container">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-7 col-md-12 order-lg-1 order-md-2">
            <h1 className="display-1 mb-4 animated bounceInDown">
              Order from <span className="text-color">QuickBites</span> Today!
            </h1>
            <a className="clk" href="#explore-menu">
              <i>E</i><i>x</i><i>p</i><i>l</i><i>o</i><i>r</i><i>e</i><i> </i><i> </i><i> </i>
              <i>M</i><i>e</i><i>n</i><i>u</i>
            </a>
          </div>
          <div className="col-lg-5 col-md-12 order-lg-2 order-md-1">
            <img src={assets.hero} className="img-fluid rounded animated zoomIn" alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
