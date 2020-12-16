import './style.css';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import ReactLoading from 'react-loading';
import News from '../../components/News/index';

const GET_NEW = gql`
  query News($q: String) {
    articles(q: $q) {
      judul
      link
      poster
      tipe
      waktu
    }
  }
`;

export default () => {

  const { data, loading, error } = useQuery(GET_NEW, {
    variables: {
      q: 'corruption'
    }
  });

  if (data) {
    console.log(data);
  }

  return (
    <React.Fragment>
      <section className="home-section">
        <div className="home-image"></div>
          <div className="uk-container header-home">
            <h1>Be The <span style={{color: '#4cd137', fontWeight: 700}}>Observers</span> Truth <span style={{color: '#4cd137', fontWeight: 700}}>With</span> Us</h1>
          </div>
        <div className="home-container">
          <div className="uk-container">
            <div className="home-content">
              <div className="action-buttons">
                <Link to="/tax-and-credibility">
                  <button className="uk-button ins-button">Inspect</button>
                </Link>
                <Link to="/c">
                  <button className="uk-button ins-button">Report</button>
                </Link>
              </div>
              <div className="news">
                <h3>News</h3>
                <div className="ez-liner"></div>
                {loading &&
                  <ReactLoading type="spinningBubbles" color="#4cd137" className="loading"/>
                }
                <div className="news-container">
                {data?.articles.map((article, index) => (
                  <News key={index} article={article}/>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}