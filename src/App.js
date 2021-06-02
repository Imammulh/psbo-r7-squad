import { Route, Switch } from "react-router-dom";
import Login from "./pages/user/Login";
import Dashboard from "./pages/user/Dashboard";
import LoginAdmin from "./pages/admin/LoginAdmin";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <Route path="/dashboard-admin">
        <DashboardAdmin />
      </Route>
    </Switch>
  );
}

export default App;
