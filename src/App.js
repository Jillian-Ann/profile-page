import React, { Component } from "react";
import Helmet from "react-helmet";

import Header from "./components/Header";
import Navbar from "./components/NavBar";
import Intro from "./components/Intro";
import WhatIDo from "./components/What-I-Do";
import Gallery from "./components/Projects";
import PrimaryProject from "./components/PrimaryProject";
import MyProjects from "./components/MyProjects";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import background from "./images/backgroundbw.jpg";
import { Parallax } from "react-parallax";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#86c7bf"
    },
    secondary: {
      main: "#FFF6F4"
    }
  }
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }
  render() {
    const siteTitle = "Jillian McLaren";
    const siteDescription = "Profile Page";

    return (
      // <Parallax style={{ height: "300%" }} bgImage={background} strength={500}>
      <div style={{ width: "100vw" }}>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        <Navbar />
        <Intro />
        <MyProjects />
        <WhatIDo />
        {/* <PrimaryProject />
        <SecondaryProject />
        <Gallery />
        <WhatIDo /> */}
      </div>
      /* </Parallax> */
    );
  }
}

export default App;
