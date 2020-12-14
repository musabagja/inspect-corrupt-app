import ReportStep1 from './pages/report-cases-step-1/ReportStep1';
import ReportStep2 from './pages/report-cases-step-2/ReportStep2';
import ReportStep3 from './pages/Report-step-3';
import ReportFinish from './pages/Report-finish';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CasesOption from './pages/CasesOption';
import TaxAndCredibility from './pages/tax-and-credibility/TaxAndCredibility';

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
          <Route path="/report-1">
            <ReportStep1/>
          </Route>
          <Route path="/report-2">
            <ReportStep2/>
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
          <Route path="/tax-and-credibility">
            <TaxAndCredibility/>
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
