import React, { useState } from "react";
import Logo from "../pic/logo-img.png";
import "./Header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  const [mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="navlink">
            {/* <ul className="link f_flex uppercase"> */}
            <ul
              className={mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#about">about-me</a>
              </li>
              <li>
                <a href="#services">services</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#blog">blog</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <button className="home-btn">HIRE ME</button>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!mobile)}>
              {mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open home-btn"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
