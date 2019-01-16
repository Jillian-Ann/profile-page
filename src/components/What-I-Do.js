import React from "react";
import MediaQuery from "react-responsive";
import Stepper from "./Stepper";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import fullstack from "../images/fullstack.jpg";
import salesanalyst from "../images/salesanalyst.jpg";
import ucsb from "../images/ucsb.png";
import resume from "../resume.pdf";

import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheets/about.css";

const projects = [
  {
    label: "Grace-Hopper",
    imgPath: fullstack,
    id: "1",
    shortDesc: "Grace Hopper",
    fullDesc:
      "I am a teaching fellow at Fullstack Academy, an immersive software engineering bootcamp. The program focuses on JavaScript, Node, Sequelize/PostgreSQL, Express, React, Redux, data structures and algorithms, system architecture, and test-driven development. As a fellow, I mentor and hold reviews for students on these concepts, lead group projects, and conduct technical interviews for prospective students.",
    title: "Software Engineering Fellow"
  },
  {
    label: "Sales Analyst",
    imgPath: salesanalyst,
    id: "5",
    shortDesc: "Sales Data Analyst",
    fullDesc:
      "As a Sales Analyst at Sheehan Family Companies, a beverage distributor, I gathered and manipulate marketing and sales data for valuable insights. Throughout my time there, I mastered many new softwares, including their CRM Karma software, SAP Concur, and other sales reporting tools on VIP. I became advanced in excel and used VBA to program macros and improve the efficiency of running reports.",
    title: "Sales Data Analyst"
  },
  {
    label: "UCSB",
    imgPath: ucsb,
    id: "5",
    shortDesc:
      "E-commerce platform for books. Users can search by title, author or genre to find their next read. Local storage and stripe are used to hold a cart and provide secure checkout. Admin functionality for editing and adding inventory and viewing all orders and order statuses.",
    fullDesc:
      "I am a total foodie and an environmentalist with a passion for local, organic, sustainable, and responsibly sourced food. Thus, I studied environmental science with a focus in world agriculture and food production at the University of California, Santa Barbara. Upon graduating in June of 2016, I landed a job in the food and beverage industry. I started as a media assistant  and worked my way to a sales analyst role.",
    title: "Environmentalist"
  }
];

class WhatIDo extends React.Component {
  constructor() {
    super();
    this.state = {
      currentProject: 0
    };
    this.changeProject = this.changeProject.bind(this);
    this.nextProject = this.nextProject.bind(this);
    this.previousProject = this.previousProject.bind(this);
  }

  nextProject() {
    this.setState(prevState => ({
      currentProject: prevState.currentProject + 1
    }));
  }

  previousProject() {
    this.setState(prevState => ({
      currentProject: prevState.currentProject - 1
    }));
  }

  changeProject = currentProject => {
    this.setState({ currentProject });
  };

  render() {
    AOS.init({
      duration: 1000
    });
    return (
      <div
        data-aos="fade-right"
        style={{
          zIndex: 0,
          height: "100%",
          minHeight: "100vh"
        }}
      >
        <div className="aboutDiv">
          <h2 className="aboutTitle">
            My <strong style={{ color: "black" }}>Background</strong>
          </h2>
          <section className="aboutSection">
            <MediaQuery query="(max-width: 750px)">
              <Stepper
                changeProject={this.changeProject}
                previousProject={this.previousProject}
                nextProject={this.nextProject}
                projects={projects}
              />
            </MediaQuery>
            <div className="aboutProjectDiv">
              <div className="aboutDescription">
                <h1>{projects[this.state.currentProject].title}</h1>
                <a href={resume}>
                  <IconButton aria-label="website">
                    <FontAwesomeIcon icon={faFile} />
                  </IconButton>
                </a>
                <a href="https://github.com/Jillian-Ann">
                  <IconButton aria-label="git-repo">
                    <FontAwesomeIcon icon={faGithub} />
                  </IconButton>
                </a>
                <a href="https://www.linkedin.com/in/jillianmclaren/">
                  <IconButton aria-label="youtube">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </IconButton>
                </a>
                <div className="aboutParagraphText">
                  <p className="aboutDescParagraph">
                    {projects[this.state.currentProject].fullDesc}
                  </p>
                </div>
              </div>
              <MediaQuery query="(min-width: 750px)">
                <Stepper
                  changeProject={this.changeProject}
                  previousProject={this.previousProject}
                  nextProject={this.nextProject}
                  projects={projects}
                />
              </MediaQuery>
              <div className="aboutBox" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default WhatIDo;
