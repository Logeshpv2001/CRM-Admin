import React from "react";
import "./Navbar.css";
import navlogo from "../Assets/nav-logo.svg";
import navProfile from "../Assets/batman-logo-png.png"
import { Link } from "react-router-dom";
		
import Button from "@mui/material/Button";
// import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" className="nav-logo" />
      <img src={navProfile} alt="" className="nav-profile" />
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<Button variant="contained" onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</Button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><Button variant="contained">Login</Button></Link>}
        {/* <Link to="/cart"><img src={cart_icon} alt="cart"/></Link> */}
        {/* <div className="nav-cart-count">{getTotalCartItems()}</div> */}
      </div>
    </div>
  );
};

export default Navbar;
