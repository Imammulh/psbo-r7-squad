import { Route, Switch } from 'react-router-dom';
import Login from './pages/user/Login';
import Dashboard from './pages/user/Dashboard';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default App;
