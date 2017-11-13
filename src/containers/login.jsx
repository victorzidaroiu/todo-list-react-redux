import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../modules/user/actions';

class Login extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm">
            <h1>Login</h1>
            <div className="form-group">
              <label htmlFor="usernameInput">
                <input
                  type="email"
                  className="form-control"
                  id="usernameInput"
                  aria-describedby="usernameHelp"
                  placeholder="Enter username"
                />
                Username
              </label>
              <small
                id="usernameHelp"
                className="form-text text-muted"
              >Must be 3 to 12 characters long.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Password"
                />
                Password
              </label>
              <small className="form-text text-muted">Must be at least 6 characters long.</small>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <div className="mt-5">
              <span>
                No account?
              </span>
              <Link
                to="/register"
                href="/register"
                className="btn btn-primary ml-1"
              >Register now
              </Link>
            </div>
          </div>
          <div className="col-sm" />
          <div className="col-sm" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
