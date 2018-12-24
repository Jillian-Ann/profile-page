import React from "react";
import axios from "axios";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "../stylesheets/contactForm.css";

import AOS from "aos";
import "aos/dist/aos.css";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      // name: "",
      email: "",
      subject: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    await axios.post(
      "https://jj8dtjhftj.execute-api.us-east-1.amazonaws.com/default/ContactFormLambda",
      this.state,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, OPTIONS"
        }
      }
    );
    this.setState({
      message: "",
      // name: "",
      email: "",
      subject: ""
    });
    alert("email successfully sent");
  };

  render() {
    // const { classes } = this.props;
    AOS.init({
      duration: 1000
    });
    return (
      <div data-aos="fade-in" className="inner contact">
        <div className="greeting">
          <h2>SAY HELLO</h2>
          <h3>
            Whether you have a work enquiry or simply want to find out more,
            let's talk.
          </h3>
        </div>
        <div className="contact-form">
          <form id="contact-us" method="post" action="#">
            <div
              className="col-xs-6 wow animated slideInLeft"
              data-wow-delay=".5s"
            >
              <input
                type="text"
                name="name"
                id="name"
                required="required"
                className="form"
                placeholder="Name"
                // onChange={this.handleChange}
              />

              <input
                type="email"
                name="email"
                id="mail"
                required="required"
                className="form"
                placeholder="Email"
                onChange={this.handleChange}
              />

              <input
                type="text"
                name="subject"
                id="subject"
                required="required"
                className="form"
                placeholder="Subject"
                onChange={this.handleChange}
              />
            </div>
            <div
              className="col-xs-6 wow animated slideInRight"
              data-wow-delay=".5s"
            >
              <textarea
                name="message"
                id="message"
                className="form textarea"
                placeholder="Message"
                onChange={this.handleChange}
              />
            </div>
            <div class="relative fullwidth col-xs-12">
              <button
                type="submit"
                id="submit"
                name="submit"
                className="form-btn semibold"
                onClick={this.handleSubmit}
              >
                Send Message
              </button>
            </div>
            <div className="clear" />
          </form>
          <div className="mail-message-area">
            <div className="alert gray-bg mail-message not-visible-message">
              <strong>Thank You !</strong> Your email has been delivered.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
