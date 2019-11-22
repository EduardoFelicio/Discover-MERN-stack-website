import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import SpaceSection from '../space';
import Reveal from 'react-reveal/Reveal';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      window.location = "https://felicio-discover.herokuapp.com/";
    }if (nextProps.errors) {
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
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };
  render() {
    const { errors } = this.state;return (

        <div style={{background:"#F5F5F5"}}>
        <Reveal effect="fadeInUp">
          <div style={{height:"60px"}}></div>
            <div style={{textAlign:"center"}}>
              <h3 className="dense" style={{fontSize:"35px"}}>Login</h3>
            </div>
            <div style={{paddingTop:"25px",background:"#fff",textAlign:"center", height:"auto", width:"300px", margin:"auto",borderRadius:"10px"}}>

                <form noValidate onSubmit={this.onSubmit}>
                  <div>
                    <p htmlFor="email">Email</p>
                    <span className="red-text">
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
                    <input
                      placeholder="Your email"
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      className={classnames("input-form","", {
                        invalid: errors.email || errors.emailnotfound
                      })}
                      type="email"
                    />
                  </div>
                  <div>
                    <p htmlFor="password">Password</p>
                    <span className="red-text">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                    <input
                      placeholder="Your password"
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      className={classnames("input-form","", {
                        invalid: errors.password || errors.passwordincorrect
                      })}
                      type="password"
                    />
                  </div>
                  <div>
                  <button
                    className="register-button"
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    type="submit">
                    Login
                  </button>
                  </div>
                </form>
                <p>
                  Dont have an account? <Link to="/register">Sign Up</Link>
                </p>
                <div style={{height:"20px"}}></div>
              </div>
              </Reveal>
              <SpaceSection/>
              <SpaceSection/>
            </div>

    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
