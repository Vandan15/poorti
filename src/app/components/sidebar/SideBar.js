import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../../AppContext';
import {
  Dashboard,
  DashboardGray,
  Frame,
  Logo,
  LogoutSidebar,
  Menu,
  Setting,
  SettingWhite,
  Support,
  SupportWhite,
  Transaction,
  TransactionWhite,
} from '../../../assets/svg';
import './index.scss';
import { ROUTES } from '../../../common/constants';

export default function SideBar() {
  const { state, dispatch } = useContext(AppContext);
  const { isOpen } = state;
  const { pathname } = useLocation();
  return (
    <div
      className={`sidebar-wrapper flex-column d-none d-lg-flex justify-content-between ${
        isOpen ? 'mobile' : ''
      }`}
    >
      <div>
        <div className="header justify-content-between align-items-center">
          <Link to={ROUTES?.MAIN}>
            <div className="d-flex align-items-center gap-3">
              <Logo />
              <span className="text-poorti">Poorti</span>
            </div>
          </Link>
          <div className="menu d-block d-lg-none">
            <Menu onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })} />
          </div>
        </div>
        <div className="list-wrapper">
          <Link to={ROUTES?.MAIN}>
            <div
              className={`item-wrapper ${
                pathname === ROUTES?.MAIN ? 'active' : ''
              }`}
            >
              {pathname === ROUTES?.MAIN ? <Dashboard /> : <DashboardGray />}
              <span>Dashboard</span>
            </div>
          </Link>
          <Link to={ROUTES?.TRANSACTION}>
            <div
              className={`item-wrapper ${
                pathname === ROUTES?.TRANSACTION ? 'active' : ''
              }`}
            >
              {pathname === ROUTES?.TRANSACTION ? (
                <TransactionWhite />
              ) : (
                <Transaction />
              )}
              <span>Transactions</span>
            </div>
          </Link>
          <Link to={ROUTES?.SUPPORT}>
            <div
              className={`item-wrapper ${
                pathname === ROUTES?.SUPPORT ? 'active' : ''
              }`}
            >
              {pathname === ROUTES?.SUPPORT ? <SupportWhite /> : <Support />}
              <span>Customer Support</span>
            </div>
          </Link>
          <Link to={ROUTES?.SETTINGS}>
            <div
              className={`item-wrapper ${
                pathname === ROUTES?.SETTINGS ? 'active' : ''
              }`}
            >
              {pathname === ROUTES?.SETTINGS ? <SettingWhite /> : <Setting />}
              <span>Settings</span>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="help-center-wrapper">
          <h3>Help Center</h3>
          <p>
            Having trouble in Poorti? Please contact us if you have any
            questions.
          </p>
          <button type="button" className="button-help">
            Go To Help Center
          </button>
          <Frame className="floating-frame" />
        </div>
        <Link to={ROUTES?.LOGIN} className="decoration-none">
          <div className="list-wrapper mt-5">
            <div className="item-wrapper">
              <LogoutSidebar />
              <span>Logout</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
