import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { 
  HomePage, RegisterPage, LoginPage, TaxCredibilityPage, CasesOptionPage,
  Report1, Report2, Report3, ReportFinish
} from './pages';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/report/:report/2">
            <Report2/>
          </Route>
          <Route path="/report/:report/3">
            <Report3/>
          </Route>
          <Route path="/report/:report/4">
            <ReportFinish/>
          </Route>
          <Route path="/report/:report">
            <Report1/>
          </Route>
          <Route path='/sign-in'>
            <LoginPage/>
          </Route>
          <Route path='/sign-up'>
            <RegisterPage/>
          </Route>
          <Route path="/c">
            <CasesOptionPage/>
          </Route>
          <Route path="/tax-and-credibility">
            <TaxCredibilityPage/>
          </Route>
          <Route exact path="/">
            <HomePage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
