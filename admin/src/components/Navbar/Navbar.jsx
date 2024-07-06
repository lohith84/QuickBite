import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = process.env.Frontend_URL; // Use window.location.href to navigate to a different origin
  };

  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="Logo" style={{ width: '70px', height: '70px'}} />
      <img className='profile' src={assets.profile_image} alt="Profile" style={{ width: '70px', height: '70px'}}/>
      <ul className="navbar-profile-dropdown">
        <li onClick={logout} style={{ width: '70px', height: '30px', lineHeight: '40px', cursor: 'pointer' }}>
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
