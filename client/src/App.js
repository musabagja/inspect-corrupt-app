import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReportStep1 from './pages/report-cases-step-1/ReportStep1';
import ReportStep2 from './pages/report-cases-step-2/ReportStep2';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/report-1">
          <ReportStep1/>
        </Route>
        <Route path="/report-2">
          <ReportStep2/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
