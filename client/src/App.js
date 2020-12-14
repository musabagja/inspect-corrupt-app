import ReportStep3 from './pages/Report-step-3';
import ReportFinish from './pages/Report-finish';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CasesOption from './pages/CasesOption';

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
          <Route path="/step3">
            <ReportStep3 />
          </Route>
          <Route path="/finish">
            <ReportFinish />
          </Route>
          <Route path="/c">
            <CasesOption/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
