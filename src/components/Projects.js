import PropTypes from "prop-types";
import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

import thumbArtemis from "../images/thumbs/artemis.png";
import thumb05 from "../images/thumbs/06.jpg";
import thumb06 from "../images/thumbs/06.jpg";

import fullArtemis from "../images/fulls/artemis.jpg";
import full05 from "../images/fulls/nutrivision.jpg";
import full06 from "../images/fulls/bookhaven.jpg";

const DEFAULT_PROJECTS = [
  {
    id: "1",
    shortDesc: "Pandora for podcasts - podcast reccomendation app.",
    fullDesc:
      "Artemis is a podcast recommendation and streaming single page application. A user can search for a genre to create channels in which they can rate played episodes. The channel learns what the user likes and curates future content based off the user's feedback. Artemis was built with JavaScript and the NERD stack - Node, Express, React-Redux, Postgres/Sequelize. The k-nearest neighbors algorithm was implemented to power a collaborative recommendation filtering system and the TF-IDF(Term Frequency-Inverse Document Frequency) algorithm and the Natural library were used to extract relevant tag names to feed to the recommendation engine. When a user likes or dislikes an episode, the tag scores associated with the channel are increased or decreased. Users are then played episodes from channels with similar tag scores to theirs. To ensure a consistent user experience, we created a clean and simple user interface with Material-UI.",
    title: "Artemis",
    image: fullArtemis,
    date: "10.01.2018"
  },
  {
    id: "5",
    shortDesc: "Photo 5",
    fullDesc: "Photo 5",
    title: "Photo 5",
    image: full05,
    date: "10.01.2018"
  },
  {
    id: "6",
    shortDesc: "Photo 6",
    fullDesc: "Photo 6",
    title: "Photo 6",
    image: full06,
    date: "10.01.2018"
  }
];

class Gallery extends Component {
  render() {
    const projects = DEFAULT_PROJECTS;
    return (
      <div style={{ padding: "50px 0 50px 0" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {projects.map(project => {
            return (
              <ProjectCard
                image={project.image}
                id={project.id}
                shortDesc={project.shortDesc}
                fullDesc={project.fullDesc}
                title={project.title}
                date={project.date}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

Gallery.displayName = "Gallery";
Gallery.propTypes = {
  images: PropTypes.array
};

export default Gallery;
