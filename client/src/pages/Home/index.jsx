import './style.css';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import ReactLoading from 'react-loading';

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
  const [news, setNews] = useState([])

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
              <h3>News</h3>
              <div className="ez-liner"></div>
              {loading && 
                <div className="loading">
                  <ReactLoading type="spinningBubbles" color="#e74c3c"/>
                </div>
              }
              <div className="news-container">
              {data?.articles.map((article, index) => (
                <div key={index} className="news-content">
                  <div>
                    <img src={article.poster}/>
                  </div>
                  <div>
                    <p>{article?.judul}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}