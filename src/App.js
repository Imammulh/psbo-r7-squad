import { Route, Switch } from "react-router-dom";
import Login from "./pages/user/Login";
import PrivateLayout from "./components/Layout/User/PrivateLayout";
import LoginAdmin from "./pages/admin/LoginAdmin";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import InsentifNasional from "./pages/admin/InsentifNasional";

function App() {
  return (
    <Switch>
      <Route path="/login-admin" component={LoginAdmin} />
      <Route path="/dashboard-admin" component={DashboardAdmin} />
      <Route path="/form-insentif-nasional" component={InsentifNasional} />
      <Route path="/login" component={Login} exact />
      <Route path="/" component={PrivateLayout} />
    </Switch>
  );
}

export default App;
