import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import artemis from "../images/fulls/artemis.jpg";
import nutrivision from "../images/fulls/nutrivision.jpg";
import bookhaven from "../images/fulls/bookhaven.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Artemis",
    imgPath: artemis,
    id: "1",
    shortDesc: "Pandora for podcasts - podcast reccomendation app.",
    fullDesc:
      "Artemis is a podcast recommendation and streaming single page application. A user can search for a genre to create channels in which they can rate played episodes. The channel learns what the user likes and curates future content based off the user's feedback. Artemis was built with JavaScript and the NERD stack - Node, Express, React-Redux, Postgres/Sequelize. The k-nearest neighbors algorithm was implemented to power a collaborative recommendation filtering system and the TF-IDF(Term Frequency-Inverse Document Frequency) algorithm and the Natural library were used to extract relevant tag names to feed to the recommendation engine. When a user likes or dislikes an episode, the tag scores associated with the channel are increased or decreased. Users are then played episodes from channels with similar tag scores to theirs. To ensure a consistent user experience, we created a clean and simple user interface with Material-UI.",
    title: "Artemis"
  },
  {
    label: "Nutri-Vision",
    imgPath: nutrivision,
    id: "5",
    shortDesc: "Photo 5",
    fullDesc: "Photo 5",
    title: "Photo 5"
  },
  {
    label: "Book Haven",
    imgPath: bookhaven,
    id: "5",
    shortDesc: "Photo 5",
    fullDesc: "Photo 5",
    title: "Photo 5"
  }
];

const styles = theme => ({
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default
  },
  img: {
    width: "100%",
    flex: "1",
    // marginLeft: "48px",
    position: "relative",
    zIndex: "2",
    borderRadius: "1%"
  }
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.props.nextProject();
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.props.previousProject();
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
    this.props.changeProject(this.state.activeStep);
  };

  render() {
    const {
      classes,
      theme,
      projects,
      nextProject,
      previousProject,
      changProject
    } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          flex: "2",
          marginLeft: "48px",
          position: "relative",
          zIndex: "2",
          borderRadius: "1%"
        }}
      >
        <Button
          Button
          size="small"
          onClick={this.handleBack}
          disabled={activeStep === 0}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </Button>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {projects.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <Button
          size="small"
          onClick={this.handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper
);
