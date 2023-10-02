import React from 'react';
import {
  EmptyWallet,
  EmptyWalletWhite,
  Facebook,
  Gold,
  Instagram,
  TrendingDown,
  TrendingUp,
} from '../assets/svg';
import { CustomCard, SearchHeader } from '../common/components/Utils';
import './index.scss';

export default function DashboardWrapper() {
  return (
    <>
      <div className="dashboard-wrapper row gy-4">
        <div className="col-12 mb-4">
          <SearchHeader enableTitle />
        </div>
        <div className="col-12 col-lg-4">
          <div className="card-wrapper">
            <CustomCard
              heading="Total Wallet Balance"
              icon1={<EmptyWallet />}
              icon2={<TrendingDown />}
              text="-5% More than last month"
              type="danger"
              value="1,222"
            />
            <CustomCard
              heading="Total Wallet Balance"
              icon1={<EmptyWallet />}
              icon2={<TrendingUp />}
              text="+7% More than last month"
              type="success"
              value="1,222"
            />
            <CustomCard
              heading="Total Wallet Balance"
              icon1={<EmptyWallet />}
              icon2={<TrendingUp />}
              text="-5% More than last month"
              type="danger"
              value="1,222"
            />
            <div className="wallet">
              <div className="d-flex gap-3">
                <div className="rounded-bg">
                  <EmptyWalletWhite />
                </div>
                <div className="d-flex flex-column">
                  <h2>1,222</h2>
                  <p>(Available Balance)</p>
                </div>
              </div>
              <div className="button-wrapper">
                <div className="list">
                  <input type="radio" />
                  <h3>Withdraw in Bank Account</h3>
                </div>
                <div className="list">
                  <input type="radio" />
                  <h3>Poorti Wallet</h3>
                </div>
                <button type="button" className="button-primary p-2">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <div className="graph-wrapper p-5 mb-4">
            <h3>Customer’s Daily Gold Performance</h3>
            <div className="entity-wrapper">
              <div className="rounded-bg">
                <Gold />
              </div>
              <div className="d-flex flex-column">
                <h3>Gold Spot</h3>
                <p>Per INR Rupee</p>
              </div>
            </div>
            <div className="point-wrapper">
              <h2>1,540</h2>
              <div className="point">
                <TrendingUp />
                <span className="success ms-1">0.05%</span>
              </div>
            </div>
            <div className="chart-wrapper" />
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="card-wrapper">
                <div className="custom-card flex-column">
                  <div className="d-flex justify-content-between">
                    <div className="rounded-bg">
                      <EmptyWallet />
                    </div>
                    <div className="description">
                      <p>SIP Amount</p>
                      <h2>1,222</h2>
                      <p className="danger">Due date 10 Oct 2023</p>
                    </div>
                    <div className="rounded-bg">
                      <TrendingDown />
                    </div>
                  </div>
                  <h2 className="text-center sip-text">Increase SIP Amount</h2>
                  <input type="range" />
                  <div className="button-wrapper d-flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="button-secondary py-1 px-3 w-auto"
                    >
                      1,000
                    </button>
                    <button
                      type="button"
                      className="button-secondary py-1 px-3 w-auto"
                    >
                      1,000
                    </button>
                    <button
                      type="button"
                      className="button-secondary py-1 px-3 w-auto"
                    >
                      1,000
                    </button>
                    <button
                      type="button"
                      className="button-secondary py-1 px-3 w-auto"
                    >
                      1,000
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="gy-4">
                <div className="collection-card col-12 mb-4">
                  <h3>Poorti Postpaid</h3>
                  <button type="button" className="button-primary p-2 px-3">
                    Check your Eligibility here
                  </button>
                </div>
                <div className="collection-card col-12">
                  <h3>Follow us on</h3>
                  <div className="d-flex gap-2 flex-column w-100">
                    <button
                      type="button"
                      className="button-primary p-2 px-3 w-max gap-2"
                    >
                      <Facebook />
                      Facebook
                    </button>
                    <button
                      type="button"
                      className="button-primary p-2 px-3 w-max gap-2"
                    >
                      <Instagram />
                      Instagram
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
