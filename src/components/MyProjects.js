import React from "react";
import Stepper from "./Stepper";

import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import artemis from "../images/fulls/artemis.jpg";
import nutrivision from "../images/fulls/nutrivision.jpg";
import bookhaven from "../images/fulls/bookhaven.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

import "../../src/stylesheets/myProjects.css";

const projects = [
  {
    label: "Artemis",
    imgPath: artemis,
    id: "1",
    shortDesc: "Pandora for podcasts",
    fullDesc:
      "A podcast recommendation and streaming single page application. Users search for genres to create channels. Episodes falling under the channel's genre are rendered and users can either like or dislike played episodes. From this feedback, the app curates future content from a collaborative recommendation engine our team built, delivering content that caters to the user's interests.",
    title: "Artemis",
    webURL: "http://www.ArtemisPlayer.com/",
    youtubeURL:
      "https://www.youtube.com/watch?v=OWT9ZHea5sU&list=PLx0iOsdUOUmkPQ6KrQya18cevlXmmAckQ&index=19",
    gitURL: "https://github.com/women-who-capstone/artemis/tree/master"
  },
  {
    label: "Nutri-Vision",
    imgPath: nutrivision,
    id: "5",
    shortDesc: "Menu nutrtion analyzer",
    fullDesc:
      "iOS and Android app using JavaScript and React Native. Using Expo's Camera, the app takes an image and sends it to be analyzed by Google's Vision API. Google's OCR then reads the image and the returned text is filtered for menu items. The dishes are then sent to Spoonacular's API to retrieve nutrition information. An ordered list of dishes with their nutrition is ultimately displayed.",
    title: "Nutrition Vision",
    webURL: "",
    youtubeURL:
      "https://www.fullstackacademy.com/hackathon-presentations/nutri-vision",
    gitURL: "https://github.com/Jillian-Ann/Nutrition-Vision/tree/client"
  },
  {
    label: "Book Haven",
    imgPath: bookhaven,
    id: "5",
    shortDesc:
      "E-commerce platform for books. Users can search by title, author or genre to find their next read. Local storage and stripe are used to hold a cart and provide secure checkout. Admin functionality is built in for editing, adding inventory, and viewing all orders and order statuses.",
    fullDesc:
      "E-commerce platform for books. Users can search by title, author or genre to find their next read. They can create accounts, with the option of using Google Oauth, and view their orders and order statuses. Local storage and stripe are used to hold a cart and to ensure a secure checkout. Admin functionality is built in for editing, adding inventory and viewing all orders and order statuses.",
    title: "Book Haven",
    webURL: "https://bookhaven.herokuapp.com/",
    youtubeURL: "",
    gitURL: "https://github.com/she-bop-shoppers/Grace-Shopper"
  }
];

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      currentProject: 0
    };
    this.changeProject = this.changeProject.bind(this);
    this.nextProject = this.nextProject.bind(this);
    this.previousProject = this.previousProject.bind(this);
    this.bringToLink = this.bringToLink.bind(this);
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

  bringToLink() {
    History.push("https://github.com/she-bop-shoppers/Grace-Shopper");
  }

  render() {
    AOS.init({
      duration: 1000
    });
    return (
      <div
        data-aos="fade-left"
        style={{
          zIndex: 0,
          height: "100%",
          minHeight: "100vh"
        }}
      >
        <div className="div">
          <h2 className="title">
            My <strong style={{ color: "black" }}>Projects</strong>
          </h2>
          <section className="section">
            <div className="projectDiv">
              <Stepper
                changeProject={this.changeProject}
                previousProject={this.previousProject}
                nextProject={this.nextProject}
                projects={projects}
              />
              <div className="description">
                <h1>{projects[this.state.currentProject].title}</h1>
                {projects[this.state.currentProject].webURL && (
                  <a href={projects[this.state.currentProject].webURL}>
                    <IconButton aria-label="website">
                      <FontAwesomeIcon icon={faLink} />
                    </IconButton>
                  </a>
                )}
                {projects[this.state.currentProject].gitURL && (
                  <a href={projects[this.state.currentProject].gitURL}>
                    <IconButton aria-label="git-repo">
                      <FontAwesomeIcon icon={faGithub} />
                    </IconButton>
                  </a>
                )}
                {projects[this.state.currentProject].youtubeURL && (
                  <a href={projects[this.state.currentProject].youtubeURL}>
                    <IconButton aria-label="youtube">
                      <FontAwesomeIcon icon={faYoutubeSquare} />
                    </IconButton>
                  </a>
                )}
                <div className="paragraphText">
                  <p className="descParagraph">
                    {projects[this.state.currentProject].fullDesc}
                  </p>
                </div>
              </div>
              <div className="box" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Projects;
