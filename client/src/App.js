import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CasesOption from './pages/CasesOption';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
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
