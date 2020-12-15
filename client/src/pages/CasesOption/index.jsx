import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <React.Fragment>
      <div className="cases-container">
        <div className="uk-container">
          <div className="title">
            <h1>What the cases ?</h1>
          </div>
          <div className="cases-contents">
            <div className="cases-content">
              <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                <h2>Abuse of power</h2>
                <ul>
                  <li><Link to="/report/abuse-of-public-fund" style={{color: "#ffffff"}} >Abuse of public fund</Link></li>
                  <li><Link to="/report/abuse-of-assets" style={{color: "#ffffff"}} >Abuse of assets</Link></li>
                  <li><Link to="/report/abusing-a-position" style={{color: "#ffffff"}} >Abusing a position</Link></li>
                </ul>
              </div>
            </div>
            <div className="cases-content">
              <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                <h2>Employment</h2>
                <ul>
                  <li><Link to="/report/corruption-to-get-a-job" style={{color: "#ffffff"}} >Corruption to get a job</Link></li>
                  <li><Link to="/report/fake-or-ghost-work" style={{color: "#ffffff"}} >Fake/ghost work</Link></li>
                </ul>
              </div>
            </div>
            <div className="cases-content">
              <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                <h2>Hover</h2>
                <ul>
                  <li><Link to="/report/corruption-to-get-a-tender" style={{color: "#ffffff"}} >Corruption to get a tender</Link></li>
                  <li><Link to="/report/irregularities-related-to-a-tender-process" style={{color: "#ffffff"}} >Irregularities related to a tender process</Link></li>
                </ul>
              </div>
            </div>
            <div className="cases-content">
              <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                <h2>Bribery</h2>
                <ul>
                  <li><Link to="/report/bribe-was-involved" style={{color: "#ffffff"}} >Bribe was involved</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}