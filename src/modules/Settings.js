/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Avatar, Frame1, Frame2, Frame3 } from '../assets/svg';
import { SearchHeader } from '../common/components/Utils';
import './index.scss';

export default function Settings() {
  return (
    <div className="dashboard-wrapper row gy-4">
      <div className="col-12 mb-4">
        <SearchHeader enableTitle={false} />
      </div>
      <div className="col-12">
        <div className="account-setting">
          <h3 className="mb-5 text-account">Account Settings</h3>
          <div className="button-wrapper mb-5">
            <button className="button-primary" type="button">
              Password
            </button>
            <button className="button-secondary" type="button">
              Email
            </button>
            <button className="button-secondary" type="button">
              Notification
            </button>
            <button className="button-secondary" type="button">
              Settings
            </button>
          </div>
          <p className="text-avatar mb-4">Your Avatar</p>
          <div className="profile-wrapper mb-4">
            <Avatar width="64" height="64" />
            <div className="d-flex column-gap-5 row-gap-3 flex-column flex-md-row">
              <button type="button" className="button-primary">
                Upload New
              </button>
              <button type="button" className="button-normal">
                Delete Avatar
              </button>
            </div>
          </div>
          <hr className="mb-4" />
          <form className="mb-4">
            <div className="form-wrapper">
              <div className="item-wrapper">
                <label>Your Full Name</label>
                <input type="text" placeholder="Enter Your Full Name" />
              </div>
              <div className="item-wrapper">
                <label>Update PAN</label>
                <input type="text" placeholder="Enter Your PAN" />
              </div>
              <div className="item-wrapper">
                <label>Customer ID</label>
                <input type="text" placeholder="Enter Your Customer ID" />
              </div>
              <div className="item-wrapper">
                <label>Location</label>
                <input type="text" placeholder="Enter Your Location" />
              </div>
              <div className="item-wrapper">
                <button type="button" className="button-primary">
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="footer-section">
          <div className="card-item">
            <div className="d-flex flex-column">
              <h3>Withdraw</h3>
              <p>GOLD/FULL SIP</p>
            </div>
            <Frame1 />
          </div>
          <div className="card-item">
            <div className="d-flex flex-column">
              <h3>FAQ</h3>
              <p>Find your questions or ask questions</p>
            </div>
            <Frame2 />
          </div>
          <div className="card-item">
            <div className="d-flex flex-column">
              <h3>Wallet</h3>
              <p>Find your questions or ask questions</p>
            </div>
            <Frame3 />
          </div>
        </div>
      </div>
    </div>
  );
}
