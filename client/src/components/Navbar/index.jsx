import './style.css';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();

  const toHome = (e) => {
    e.preventDefault();
    history.push('/');
  }

  return (
    <div className="navbar">
      <div className="uk-container navigation">
        <div>
          <a href="#" onClick={ toHome }><h3>INSPECT</h3></a>
        </div>
      </div>
    </div>
  )
}