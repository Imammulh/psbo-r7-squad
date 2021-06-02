import { Route, Switch } from "react-router-dom";
import Login from "./pages/user/Login";
import PrivateLayout from "./layout/PrivateLayout";
import Dashboard from "./pages/user/Dashboard";
import LoginAdmin from "./pages/admin/LoginAdmin";
import DashboardAdmin from "./pages/admin/DashboardAdmin";

function App() {
  return (
    <Switch>
      <Route path="/login-admin" component={LoginAdmin} />
      <Route path="/dashboard-admin" component={DashboardAdmin} />
      <Route path="/login" component={Login} exact />
      <Route path="/" component={PrivateLayout} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
