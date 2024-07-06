import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState(false); // State to toggle menu visibility
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State to keep track of window width
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenu(!menu); // Toggle menu state
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <nav
      className="custom-navbar navbar navbar-expand-md navbar-light bg-white"
      aria-label="Food navigation bar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={assets.dream_icon}
            alt="Logo"
            style={{ width: "70px", height: "70px" }}
          />
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <AnimatePresence>
          {(menu || windowWidth >= 768) && (
            <motion.div
              className="navbar-collapse"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link
                    to="/"
                    onClick={() => setMenu(false)}
                    className="nav-link"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="#about-us"
                    onClick={() => setMenu(false)}
                    className="nav-link"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#explore-menu"
                    onClick={() => setMenu(false)}
                    className="nav-link"
                  >
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#contact"
                    onClick={() => setMenu(false)}
                    className="nav-link"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">
                    Cart{" "}
                    <img
                      style={{ width: "19px", height: "19px" }}
                      src={assets.shopping}
                      alt="Cart"
                    />
                    <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
                  </Link>
                </li>
                <li className="nav-item">
                  {!token ? (
                    <button
                      onClick={() => setShowLogin(true)}
                      className="btn btn-link nav-link"
                    >
                      Sign In
                    </button>
                  ) : (
                    <div className="navbar-profile">
                      <img
                        style={{ width: "50px", height: "50px", cursor: "pointer" }}
                        src={assets.profile_icon}
                        alt="Profile"
                        className="nav-link"
                      />
                      <ul className="navbar-profile-dropdown">
                        <li
                          onClick={() => navigate("/myorders")}
                          style={{
                            width: "50px",
                            height: "30px",
                            lineHeight: "40px",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            src={assets.basket_icon}
                            alt="Orders"
                            style={{
                              width: "20px",
                              height: "20px",
                              marginRight: "10px",
                            }}
                          />{" "}
                          <span>Orders</span>
                        </li>
                        <hr style={{ margin: "5px 0" }} />
                        <li
                          onClick={logout}
                          style={{
                            width: "50px",
                            height: "30px",
                            lineHeight: "40px",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            src={assets.logout_icon}
                            alt="Logout"
                            style={{
                              width: "20px",
                              height: "20px",
                              marginRight: "10px",
                            }}
                          />{" "}
                          <span>Logout</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
