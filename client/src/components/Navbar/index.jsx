import './style.css';
import { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

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
        <div>
          { url !== "/" ? 
            <a href="#" onClick={ getBack }><h4>BACK</h4></a>
          :
            <div>
              { showLogout ? 
                <button className="uk-button uk-button-danger" onClick={ handleLogout }>Logout</button>
                :
                <button className="uk-button uk-button-primary" onClick={ toLogin }>Login</button>
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}