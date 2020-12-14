import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/sign-in'>
            <Login/>
          </Route>
          <Route path='/sign-up'>
            <Register/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
