import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import client from './config/index';
import { 
  HomePage, RegisterPage, LoginPage, TaxCredibilityPage, CasesOptionPage,
  Report1, Report2, Report3, ReportFinish, AdminReport
} from './pages';
import { Navbar } from './components';
import Footer from './components/Footer/index';
// import store from './store';

function App() {
  return (
    <>
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
            <Switch>
              <Route path="/report/:report/2">
                <Navbar/>
                <Report2/>
              </Route>
              <Route path="/report/:report/3">
                <Navbar/>
                <Report3/>
              </Route>
              <Route path="/report/:report/4">
                <Navbar/>
                <ReportFinish/>
              </Route>
              <Route path="/report/:report">
                <Navbar/>
                <Report1/>
              </Route>
              <Route path="/admin">
                <Navbar/>
                <AdminReport/>
              </Route>
              <Route path="/c">
                <Navbar/>
                <CasesOptionPage/>
              </Route>
              <Route path="/tax-and-credibility">
                <Navbar/>
                <TaxCredibilityPage/>
              </Route>
              <Route exact path="/">
                <Navbar/>
                <HomePage/>
              </Route>
              <Route path='/sign-in'>
                <LoginPage/>
              </Route>
              <Route path='/sign-up'>
                <RegisterPage/>
              </Route>
            </Switch>
        </Router>
      </ApolloProvider>
    </div>
    </>
  );
}

export default App;
