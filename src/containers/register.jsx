import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { register } from '../modules/user/actions';

class Register extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm">
            <h1>Register</h1>
            <div className="form-group">
              <label htmlFor="username">Username
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
                />
              </label>
              <small className="form-text text-muted">Must be 3 to 12 characters long.</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                Password
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                Repeat Password
              </label>
              <small className="form-text text-muted">Must be at least 6 characters long.</small>
            </div>
            <button type="submit" className="btn btn-primary">Register now</button>
            <div className="mt-5">
              <span>
                Do you have an account?
              </span>
              <Link
                to="/"
                href="/"
                className="btn btn-primary ml-1"
              >Login
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
  register,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
