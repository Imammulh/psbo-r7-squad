import { Route, Switch } from "react-router-dom";
import Login from "./pages/user/Login";
import PrivateLayout from "./layout/PrivateLayout";
import Dashboard from "./pages/user/Dashboard";
import LoginAdmin from "./pages/admin/LoginAdmin";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route path="/" component={PrivateLayout} />
      <Route path="/dashboard" component={Dashboard} />

      <Route path="/login-admin">
        <LoginAdmin />
      </Route>
      <Route path="/dashboard-admin">
        <DashboardAdmin />
      </Route>
    </Switch>
  );
}

export default App;
