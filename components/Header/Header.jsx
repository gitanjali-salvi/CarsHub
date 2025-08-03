import React, { useRef, useState } from "react";

import { Container,} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import CarSearch from "./Search";



const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/signup",
    display: "Signup",
  },
  
];

const Header = () => {
  const menuRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const [searchQuery, setSearchQuery] = useState('');


  return (
    <header className="header">

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
        
            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
              <CarSearch />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;