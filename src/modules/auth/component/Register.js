/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { Apple, Eye, Google, Logo } from '../../../assets/svg';
import './index.scss';
import { ROUTES } from '../../../common/constants';
import history from '../../../historyData';

export default function Register() {
  const handleSubmit = (e) => {
    e?.preventDefault();
    history?.push(ROUTES?.MAIN);
  };
  
  return (
    <div className="container auth-wrapper">
      <Logo className="logo"/>
      <h1 className="text-header">Open a new account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <div className="item-wrapper">
            <label>
              Name <span className="required-field"> *</span>
            </label>
            <input
              type="email"
              className="custom-input"
              placeholder="Input your full name"
            />
          </div>
          <div className="item-wrapper">
            <label>
              Work Email <span className="required-field"> *</span>
            </label>
            <input
              type="email"
              className="custom-input"
              placeholder="example@company.com"
            />
          </div>
          <div className="item-wrapper mb-3">
            <label>
              Password <span className="required-field"> *</span>
            </label>
            <Eye className="floating-icon" />
            <input
              type="password"
              className="custom-input"
              placeholder="Input your password account"
            />
          </div>
          <div className="item-wrapper">
            <button
              type="submit"
              className="button-primary"
              placeholder="Input your password"
            >
              Create Account
            </button>
          </div>
          <div className="login-with d-flex no-wrap justify-content-between gap-3 align-items-center">
            <hr className="w-100" />
            <span className="text-login">Or register with</span>
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
              Already have an account <Link to={ROUTES?.LOGIN}>Login</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
