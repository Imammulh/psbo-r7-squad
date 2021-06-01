import { Route, Switch } from 'react-router-dom';
import Login from './pages/user/Login';
import PrivateLayout from './layout/PrivateLayout';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={PrivateLayout} />
    </Switch>
  );
}

export default App;
