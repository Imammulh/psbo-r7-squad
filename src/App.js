import { Route, Switch } from 'react-router-dom';
import Login from './pages/user/Login';
import Dashboard from './pages/user/Dashboard';
import LoginAdmin from './pages/admin/LoginAdmin';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/login-admin">
        <LoginAdmin />
      </Route>
    </Switch>
  );
}

export default App;
