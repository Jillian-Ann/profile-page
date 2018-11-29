import React from "react";
import fullArtemis from "../images/fulls/artemis.jpg";
import Stepper from "./Stepper";
import ActionGTranslate from "material-ui/SvgIcon";
import { Parallax } from "react-parallax";

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

const projects = [
  {
    label: "Artemis",
    imgPath: artemis,
    id: "1",
    shortDesc: "Pandora for podcasts",
    fullDesc:
      "A podcast recommendation and streaming single page application. Users search for genres to create channels. Episodes falling under the channel's genre are rendered and users can either like or dilike played episodes. From this feedback, the app curates future content from a collaborative recommendation engine our team built, delivering content that caters to user's interests.",
    title: "Artemis"
  },
  {
    label: "Nutri-Vision",
    imgPath: nutrivision,
    id: "5",
    shortDesc: "Menu nutrtion analyzer",
    fullDesc:
      "iOS and Android app using JavaScript and React Native. Using Expo's Camera, the app takes an image and sends it to be analyzed by Google's Vision API. Google's OCR then reads the image and the returned text is filtered for menu items. The dishes are then sent to Spoonacular's API to retrieve nutrition information. An ordered list of dishes with their nutrition is ultimately displayed to the user.",
    title: "Nutrition Vision"
  },
  {
    label: "Book Haven",
    imgPath: bookhaven,
    id: "5",
    shortDesc:
      "E-commerce platform for books. Users can search by title, author or genre to find their next read. Local storage and stripe are used to hold a cart and provide secure checkout. Admin functionality for editing and adding inventory and viewing all orders and order statuses.",
    fullDesc:
      "E-commerce platform for books. Users can search by title, author or genre to find their next read. They can create accounts, with the option of using Google Oauth, and view their orders and their statuses. Local storage and stripe are used to hold a cart and provide secure checkout. Admin functionality for editing and adding inventory and viewing all orders and order statuses. lalalalla aaaaaaaa",
    title: "Book Haven"
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
        data-aos="fade-left"
        style={{
          zIndex: 0,
          height: "100%",
          minHeight: "100vh"
        }}
      >
        {/* <section style={styles.section}> */}
        <div style={styles.div}>
          <h2 style={styles.title}>
            My <strong style={{ color: "black" }}>Projects</strong>
          </h2>
          <section style={styles.section}>
            <div style={styles.projectDiv}>
              <Stepper
                changeProject={this.changeProject}
                previousProject={this.previousProject}
                nextProject={this.nextProject}
                projects={projects}
              />
              <div style={styles.description}>
                <h1>{projects[this.state.currentProject].title}</h1>
                <IconButton aria-label="website">
                  <FontAwesomeIcon icon={faLink} />
                </IconButton>
                <IconButton aria-label="git-repo">
                  <FontAwesomeIcon icon={faGithub} />
                </IconButton>
                <IconButton aria-label="youtube">
                  <FontAwesomeIcon icon={faYoutubeSquare} />
                </IconButton>
                <div
                  style={{
                    width: "20em",
                    height: "30%",
                    overflow: "auto"
                  }}
                >
                  <p
                    style={{
                      ":hover": { visibility: "visible" },
                      ":focus": { visibility: "visible" },
                      color: "#777777"
                    }}
                  >
                    {projects[this.state.currentProject].fullDesc}
                  </p>
                </div>
              </div>
              <div style={styles.box} />
            </div>
          </section>
        </div>
        {/* </section> */}
      </div>
    );
  }
}

const styles = {
  section: {
    display: "block"
  },
  div: {
    position: "relative",
    padding: "0 32px"
    // height: "80vh"
    // maxHeight: "50%"
  },
  title: {
    color: "#777777",
    letterSpacing: "0.3em",
    top: "30px",
    left: "10%",
    textTransform: "uppercase",
    fontSize: "6vw",
    lineHeight: "1em",
    position: "relative",
    zIndex: "3"
  },
  projectDiv: {
    display: "flex"
    // padding: "19px 0"
  },
  projectPic: {
    width: "50%",
    flex: "1",
    marginLeft: "48px",
    position: "relative",
    zIndex: "2",
    borderRadius: "1%"
  },
  description: {
    // fontSize: "1vw",
    flex: "1.5",
    width: "50%",
    zIndex: "2",
    padding: "0% 0% 0% 5%"
  },
  box: {
    height: "90%",
    // transform: "translate(-220px,-80px)",
    position: "absolute",
    // alignSelf: "end",
    top: "-1vh",
    right: "0",
    width: "70%",
    zIndex: "1",
    display: "block",
    // backgroundColor: "rgba(19, 51, 0, .3)",
    // backgroundColor: "#ededed",
    backgroundColor: "#f1e0d3",
    borderRadius: "1%"
  }
};
export default Projects;
