import './style.css';
import React from 'react';

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
                  <li>Abuse of public fund</li>
                  <li>Abuse of assets</li>
                  <li>Abusing a position</li>
                </ul>
              </div>
            </div>
            <div className="cases-content">
              <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                <h2>Employment</h2>
                <ul>
                  <li>Corruption to get a job</li>
                  <li>Fake/ghost work</li>
                </ul>
              </div>
            </div>
            <div className="cases-content">
              <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                <h2>Hover</h2>
                <ul>
                  <li>Corruption to get a tender</li>
                  <li>Irregularities related to a tender process</li>
                </ul>
              </div>
            </div>
            <div className="cases-content">
              <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                <h2>Bribery</h2>
                <ul>
                  <li>A bribe was involved</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}