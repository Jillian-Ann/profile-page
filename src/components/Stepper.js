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
import { Pause } from "@material-ui/icons";

import artemis from "../images/fulls/artemis.jpg";
import nutrivision from "../images/fulls/nutrivision.jpg";
import bookhaven from "../images/fulls/bookhaven.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
    activeStep: 0,
    paused: false,
    hovered: false
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
    if (!this.state.paused) {
      this.setState({ activeStep });
      this.props.changeProject(this.state.activeStep);
    }
  };

  handleClick = () => {
    if (this.state.paused) {
      this.setState({
        paused: false
      });
    } else {
      this.setState({
        paused: true
      });
    }
  };

  handleEnter = () => {
    this.setState({
      hovered: true
    });
  };

  handleLeave = () => {
    this.setState({
      hovered: false
    });
  };

  render() {
    const { classes, theme, projects } = this.props;
    const { activeStep } = this.state;
    const maxSteps = projects.length;

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
                  onClick={this.handleClick}
                  onMouseLeave={this.handleLeave}
                  onMouseEnter={this.handleEnter}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        {this.state.hovered ? (
          <Pause
            style={{
              right: "50%",
              top: "50%",
              position: "absolute",
              zIndex: 4
            }}
          />
        ) : (
          <div />
        )}
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
