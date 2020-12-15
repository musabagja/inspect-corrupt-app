import './style.css';
import { useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

export default () => {
  const history = useHistory();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    console.log(path)
    console.log(url)
  }, [])

  const toHome = (e) => {
    e.preventDefault();
    history.push('/');
  }

  const getBack = (e) => {
    e.preventDefault();
    history.goBack();
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
            ''
          }
        </div>
      </div>
    </div>
  )
}