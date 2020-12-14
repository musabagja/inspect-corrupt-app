import './style.css';
import React from 'react';

export default () => {
  return (
    <React.Fragment>
      <div className="home-image"></div>
      <div className="home-container">
        <div className="uk-container">
          <div className="home-content">
            <div className="action-buttons">
              <button className="uk-button ins-button">Credibility</button>
              <button className="uk-button ins-button">Report</button>
              <button className="uk-button ins-button">TAX-ID</button>
            </div>
            <h3>News</h3>
            <div className="ez-liner"></div>
            <div className="news-container">
              <div className="news-content uk-card-hover">
                <img src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"/>
                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}