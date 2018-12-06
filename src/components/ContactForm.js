import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
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
      name: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => evt => {
    this.setState({
      [name]: evt.target.value
    });
  };

  render() {
    // const { classes } = this.props;
    AOS.init({
      duration: 1000
    });
    return (
      <div data-aos="fade-down" className="inner contact">
        <div className="greeting">
          <h2> SAY HELLO</h2>
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
              />

              <input
                type="email"
                name="mail"
                id="mail"
                required="required"
                className="form"
                placeholder="Email"
              />

              <input
                type="text"
                name="subject"
                id="subject"
                required="required"
                className="form"
                placeholder="Subject"
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
              />
            </div>
            <div class="relative fullwidth col-xs-12">
              <button
                type="submit"
                id="submit"
                name="submit"
                className="form-btn semibold"
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
      //   <div className="mainContact">
      //     <form className={classes.container} noValidate autoComplete="off">
      //       <TextField
      //         required
      //         id="standard-name"
      //         label="Name"
      //         className={classes.textField}
      //         value={this.state.name}
      //         onChange={this.handleChange("name")}
      //         margin="normal"
      //       />
      //       <TextField
      //         required
      //         id="standard-email"
      //         label="email"
      //         className={classes.textField}
      //         value={this.state.email}
      //         onChange={this.handleChange("email")}
      //         margin="normal"
      //       />
      //       <TextField
      //         required
      //         fullwidth
      //         multiline
      //         id="standard-message"
      //         label="message"
      //         className={classes.textField}
      //         value={this.state.email}
      //         onChange={this.handleChange("message")}
      //         margin="normal"
      //       />
      //     </form>
      //   </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
