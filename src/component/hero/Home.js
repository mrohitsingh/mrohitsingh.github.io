import React from "react";
import "./Home.css";
import hero from "../pic/about.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Rohit Singh</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[
                    "  Professional Coder.",
                    "  Web Developer.",
                    "  Graphic Designer.",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </p>

            <div className="hero_btn d_flex">
              <div className="col">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <a
                      href="https://www.facebook.com/mrohitsinghonfb/"
                      target="blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a
                      href="https://www.instagram.com/rohitsingh.code/"
                      target="blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a
                      href="https://www.linkedin.com/in/mrohitsingh/"
                      target="blank"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a href="https://github.com/mrohitsingh" target="blank">
                      <i className="fab fa-github"></i>
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a href="https://wa.me/+918969680872" target="blank">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </button>
                </div>
              </div>
              <div className="col">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">
                  <i className="fab fa-html5"></i>
                </button>
                <button className="btn_shadow">
                  <i className="fab fa-css3"></i>
                </button>
                <button className="btn_shadow">
                  <i className="fab fa-js"></i>
                </button>
                <button className="btn_shadow">
                  <i className="fab fa-bootstrap"></i>
                </button>
                <button className="btn_shadow">
                  <i className="fab fa-react"></i>
                </button>
                <button className="btn_shadow">
                  <i className="fab fa-figma"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
