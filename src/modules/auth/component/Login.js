/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { Apple, Eye, Google, Logo } from '../../../assets/svg';
import './index.scss';
import { ROUTES } from '../../../common/constants';
import history from '../../../historyData';

export default function Login() {
  const handleSubmit = (e) => {
    e?.preventDefault();
    history?.push(ROUTES?.MAIN);
  };
  
  return (
    <div className="container auth-wrapper">
      <Logo className="logo" />
      <h1 className="text-header">Login first to your account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <div className="item-wrapper">
            <label>
              Email Address <span className="required-field"> *</span>
            </label>
            <input
              type="email"
              className="custom-input"
              placeholder="Input your registered email"
            />
          </div>
          <div className="item-wrapper">
            <label>
              Password <span className="required-field"> *</span>
            </label>
            <Eye className="floating-icon" />
            <input
              type="password"
              className="custom-input"
              placeholder="Input your password"
            />
          </div>
          <div className="remember-wrapper d-flex justify-content-between">
            <div className="d-flex">
              <input type="checkbox" />
              <span className="ms-2 text-small">Remember Me</span>
            </div>
            <span className="text-small">Forgot Password</span>
          </div>
          <div className="item-wrapper">
            <button
              type="submit"
              className="button-primary"
              placeholder="Input your password"
            >
              Login
            </button>
          </div>
          <div className="login-with d-flex no-wrap justify-content-between gap-3 align-items-center">
            <hr className="w-100" />
            <span className="text-login">Or login with</span>
            <hr className="w-100" />
          </div>
          <div className="item-wrapper flex-row">
            <button className="button-secondary gap-2" type="button">
              <Google />
              <span>Google</span>
            </button>
            <button className="button-secondary gap-2" type="button">
              <Apple />
              <span>Apple</span>
            </button>
          </div>
          <div className="item-wrapper">
            <p>
              You’re new in here? <Link to={ROUTES?.SIGNUP}>Create an account</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
