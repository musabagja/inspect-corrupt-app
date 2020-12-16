import './style.css';
import { useEffect, useState } from 'react';
import { useHistory, useRouteMatch, Link } from 'react-router-dom';

export default () => {
  const history = useHistory();
  const { url, path } = useRouteMatch();
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setShowLogout(true);
    }
  }, [])

  const toHome = (e) => {
    e.preventDefault();
    history.push('/');
  }
  
  const toLogin = () => {
    history.push('/sign-in')
  }

  const getBack = (e) => {
    e.preventDefault();
    history.goBack();
  }

  const handleLogout = () => {
    localStorage.clear();
    setShowLogout(false);
  }

  return (
    <div className="navbar">
      <div className="uk-container navigation">
        <div>
          <a href="#" onClick={ toHome }><h3>INSPECT</h3></a>
        </div>
        { url !== "/" ? 
          <div>
            <a href="#" onClick={ getBack }><h4>BACK</h4></a>
          </div>
        :
          <div>
            { showLogout ?
              <div style={{marginTop: 20, color: 'white', fontWeight: 700}}>
                <button className="uk-button uk-button-danger" onClick={ handleLogout }>Logout</button>
              </div> 
              :
              <div style={{marginTop: 20, color: 'white', fontWeight: 700}}>
                <Link to="/sign-in" className="uk-link-text">LOGIN</Link>
              </div>
            }
          </div>
        }
      </div>
  </div>
  )
}