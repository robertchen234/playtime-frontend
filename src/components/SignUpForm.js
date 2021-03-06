import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

class SignUpForm extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    alert_error: false
  };

  componentWillUnmount() {
    localStorage.removeItem("signupError");
  }

  render() {
    return (
      <div id="signup-form" className="ui card form">
        <h2>Sign Up</h2>
        <Route
          path="/(signup|home|)"
          render={() => {
            return (
              <div>
                <form onSubmit={this.submitSignUpHandler}>
                  <label htmlFor="username">Username:</label>
                  <input
                    id="username"
                    className="form-control"
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    value={this.state.username}
                    onChange={this.changeHandler}
                  />
                  <br />
                  <label htmlFor="password">Password:</label>
                  <input
                    id="password"
                    className="form-control"
                    name="password"
                    type="password"
                    placeholder="Enter a password"
                    value={this.state.password}
                    onChange={this.changeHandler}
                  />
                  <br />
                  <label htmlFor="first-name">First Name:</label>
                  <input
                    id="first-name"
                    className="form-control"
                    name="first_name"
                    type="text"
                    placeholder="Enter your first name"
                    value={this.state.first_name}
                    onChange={this.changeHandler}
                  />
                  <br />
                  <label htmlFor="last-name">Last Name:</label>
                  <input
                    id="last-name"
                    className="form-control"
                    name="last_name"
                    type="text"
                    placeholder="Enter your last name"
                    value={this.state.last_name}
                    onChange={this.changeHandler}
                  />
                  <br />

                  {this.state.alert_error ? (
                    <span className="alert-error">
                      Username and password field cannot be empty.
                    </span>
                  ) : null}
                  <span className="alert-error">
                    {localStorage.getItem("signupError") !== ""
                      ? localStorage.getItem("signupError")
                      : null}
                  </span>
                  <input
                    type="submit"
                    className="signup button pointer"
                    value="Submit"
                  />
                </form>
              </div>
            );
          }}
        />
      </div>
    );
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitSignUpHandler = event => {
    event.preventDefault();

    if (this.state.username !== "" && this.state.password !== "") {
      this.props.submitSignUpHandler(this.state, event);
      this.setState({
        username: "",
        password: "",
        first_name: "",
        last_name: ""
      });
    } else {
      this.setState({ alert_error: true });
      // this.props.history.push("/signup");
    }
  };
}

export default withRouter(SignUpForm);
