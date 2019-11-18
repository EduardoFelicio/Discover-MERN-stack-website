import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import SpaceSection from '../space.js';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
    console.log(newUser);
  };
  render() {
    const { errors } = this.state;return (
      <div style={{background:"#F5F5F5"}}>
        <div style={{height:"60px"}}></div>
          <div style={{textAlign:"center"}}>
            <h3 className="dense" style={{fontSize:"35px"}}>Register</h3>
          </div>
          <div style={{paddingTop:"25px",background:"#fff",textAlign:"center", height:"400px", width:"300px", margin:"auto",borderRadius:"10px"}}>

              <form noValidate onSubmit={this.onSubmit}>
                <div>
                  <p htmlFor="name">Name</p>
                  <span className="red-text">{errors.name}</span>
                  <input
                    id="name"
                    placeholder="Your name"
                    onChange={this.onChange}
                    value={this.state.name}
                    error={errors.name}
                    type="text"
                    className={classnames("input-form","", {
                    invalid: errors.name
                  })}
                  />
                </div>
                <div>
                <p htmlFor="email">Email</p>
                <span className="red-text">{errors.email}</span>
                  <input
                    id="email"
                    placeholder="Your email"
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    type="email"
                    className={classnames("input-form","", {
                    invalid: errors.email
                  })}
                  />
                </div>
                <div>
                  <p htmlFor="password">Password</p>
                  <span className="red-text">{errors.password}</span>
                  <input
                    id="password"
                    placeholder="Your password"
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    type="password"
                    className={classnames("input-form","", {
                    invalid: errors.password
                  })}
                  />
                </div>
                <div>
                  <p htmlFor="password2">Confirm Password</p>
                  <span className="red-text">{errors.password2}</span>
                  <input
                    id="password2"
                    placeholder="Repeat your password"
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    type="password"
                    className={classnames("input-form","", {
                    invalid: errors.password2
                  })}
                  />
                </div>
                <div>
                  <button
                    className="register-button"
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "20px"
                    }} type="submit">
                    Sign up
                  </button>
                </div>
              </form>
              <p>
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <SpaceSection/>
          </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
