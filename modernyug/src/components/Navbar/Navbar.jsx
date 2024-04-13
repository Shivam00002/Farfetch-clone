import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import "../../css/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { Navigate, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>;

const Navbar = () => {
  const [ showMediaIcons, setShowMediaIcons ] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="Nav-container">

      <nav className="main-nav">
     
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
            <p onClick={ () => { navigate('/womens'); } }>women</p>
            </li>
            <li>
              <p onClick={ () => { navigate('/mens'); } }>Men</p>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>

            <li>
            <a onClick={ () => { navigate('/admin'); } }>Admin</a>
            </li>
          </ul>
        </div>

        {/* 2nd part Title*/ }

        <div className="logo">
          <h2 onClick={ () => { navigate('/'); } }>
            FarFetch
          </h2>
        </div>

        {/* 3rd parts Social Media connections */ }
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a onClick={ () => { navigate('/account'); } }>
                { " " }
                <CgProfile />{ " " }
              </a>
            </li>
            <li>
              <p onClick={ () => { navigate('/wishlist'); } }>
                { " " }
                <AiOutlineHeart />{ " " }
              </p>
            </li>
            <li>
              <p onClick={ () => { navigate('/cart'); } }  >
                { " " }
                <FaCartPlus />{ " " }
              </p>
            </li>

            
          </ul>
          {/* hamburget menu start  */ }
          <div className="hamburger-menu">
            <a href="#" onClick={ () => setShowMediaIcons(!showMediaIcons) }>
              <GiHamburgerMenu />
            </a>
          </div>

         


          

        </div>
      </nav>
      <  div className="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.."  />
          <button type="submit"><AiOutlineSearch /></button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;


