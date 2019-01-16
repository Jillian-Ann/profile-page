import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheets/intro.css";

class Intro extends React.Component {
  render() {
    AOS.init({
      duration: 2000
    });
    return (
      <div data-aos="fade-in" className="mainIntro">
        <div className="introTitle">
          <div className="introWrapper">
            <div className="container">
              <div className="name">
                <span>J</span>
                <span>i</span>
                <span>l</span>
                <span>l</span>
                <span>&nbsp;</span>
                <span />
                <span>M</span>
                <span>c</span>
                <span>L</span>
                <span>a</span>
                <span>r</span>
                <span>e</span>
                <span>n</span>
              </div>
              <div className="line" />
              <div className="sub">
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
