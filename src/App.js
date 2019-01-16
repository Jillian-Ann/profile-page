import React, { Component } from "react";
import Helmet from "react-helmet";

import Navbar from "./components/NavBar";
import Intro from "./components/Intro";
import WhatIDo from "./components/What-I-Do";
import MyProjects from "./components/MyProjects";
import ContactForm from "./components/ContactForm";

import "./stylesheets/App.css";

import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors, goToTop, goToAnchor } from "react-scrollable-anchor";
configureAnchors({ offset: -150, scrollDuration: 200 });

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
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        <Navbar />
        <ScrollableAnchor id={"intro"}>
          <Intro />
        </ScrollableAnchor>
        <ScrollableAnchor id={"projects"}>
          <MyProjects />
        </ScrollableAnchor>
        <ScrollableAnchor id={"about"}>
          <WhatIDo />
        </ScrollableAnchor>
        <ScrollableAnchor id={"contact"}>
          <ContactForm />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
