import { Switch, Route } from 'react-router-dom'
import ReportStep3 from './pages/Report-step-3'
import HomePage from './pages/Home'
import ReportFinish from './pages/Report-finish'
import { ApolloProvider } from '@apollo/client';
import client from './config/index'

function App() {
  return (
    <ApolloProvider client={client}>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/step3">
          <ReportStep3 />
        </Route>
        <Route path="/finish">
          <ReportFinish />
        </Route>
      </Switch>
    </ApolloProvider>
  );
}

export default App;
