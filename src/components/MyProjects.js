import React from "react";
import fullArtemis from "../images/fulls/artemis.jpg";
import Stepper from "./Stepper";
import ActionGTranslate from "material-ui/SvgIcon";
import { Parallax } from "react-parallax";

import artemis from "../images/fulls/artemis.jpg";
import nutrivision from "../images/fulls/nutrivision.jpg";
import bookhaven from "../images/fulls/bookhaven.jpg";

const projects = [
  {
    label: "Artemis",
    imgPath: artemis,
    id: "1",
    shortDesc: "Pandora for podcasts",
    fullDesc:
      "Artemis is a podcast recommendation and streaming single page application. A user can search for a genre to create channels in which they can rate played episodes. The channel learns what the user likes and curates future content based off the user's feedback. Artemis was built with JavaScript and the NERD stack - Node, Express, React-Redux, Postgres/Sequelize. The k-nearest neighbors algorithm was implemented to power a collaborative recommendation filtering system and the TF-IDF(Term Frequency-Inverse Document Frequency) algorithm and the Natural library were used to extract relevant tag names to feed to the recommendation engine. When a user likes or dislikes an episode, the tag scores associated with the channel are increased or decreased. Users are then played episodes from channels with similar tag scores to theirs. To ensure a consistent user experience, we created a clean and simple user interface with Material-UI.",
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
    shortDesc: "E-commerce platform for books",
    fullDesc: "Photo 5",
    title: "Book Haven"
  }
];

// const styles = theme => ({
//   header: {
//     display: "flex",
//     alignItems: "center",
//     height: 50,
//     paddingLeft: theme.spacing.unit * 4,
//     backgroundColor: theme.palette.background.default
//   },
//   img: {
//     width: "100%",
//     flex: "1",
//     // marginLeft: "48px",
//     position: "relative",
//     zIndex: "2",
//     borderRadius: "1%"
//   }
// });

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
    return (
      <div style={{ height: "100vh" }}>
        <section style={styles.section}>
          <div style={styles.div}>
            <h2 style={styles.title}>My Projects</h2>
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
                  <h3>{projects[this.state.currentProject].shortDesc}</h3>
                  <p>{projects[this.state.currentProject].fullDesc}</p>
                </div>
                <div style={styles.box} />
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

const styles = {
  section: {
    display: "block",
    // verticalAlign: "baseline",
    color: "#232323"
    // height: "100vh"
  },
  div: {
    position: "absolute",
    padding: "0 32px"
    // maxWidth: "1184px",
    // margin: "0 auto"
  },
  title: {
    left: "10%",
    textTransform: "uppercase",
    fontSize: "64px",
    lineHeight: "1em",
    position: "relative",
    zIndex: "3"
  },
  projectDiv: {
    display: "flex"
    // flexDirection: "row",
    // alignItems: "flex-start",
    // justifyContent: "flex-start"
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
    overflow: "scroll",
    flex: "1",
    width: "431px",
    zIndex: "2",
    padding: "0% 0% 0% 5%"
  },
  box: {
    height: "100%",
    transform: "translate(-220px,-80px)",
    position: "absolute",
    alignSelf: "end",
    top: "10%",
    right: "-250px",
    width: "70%",
    zIndex: "1",
    display: "block",
    backgroundColor: "#f1e0d3",
    borderRadius: "1%"
  }
};
export default Projects;
