import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/user/Login";
import LoginAdmin from "./pages/admin/LoginAdmin";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import InsentifNasional from "./pages/admin/InsentifNasional";
import Dashboard from "./pages/user/Dashboard";
import Biodata from "./pages/user/Biodata/Index";
import EditBiodata from "./pages/user/Biodata/Edit";
import Nasional from "./pages/user/PengajuanInsentif/Nasional";
import Internasional from "./pages/user/PengajuanInsentif/Internasional";

import { UserContext } from "./context/UserContext";

const App = () => {
  const [user] = useContext(UserContext);

  const PrivateRoute = ({ user, ...props }) => {
    if (user) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  const LoginRoute = ({ user, ...props }) => (user ? <Redirect to="/" /> : <Route {...props} />);

  return (
    <Switch>
      <LoginRoute exact path="/login" user={user} component={Login} />
      <PrivateRoute exact path="/" user={user} component={Dashboard} />
      <PrivateRoute exact path="/biodata" user={user} component={Biodata} />
      <PrivateRoute exact path="/biodata/edit" user={user} component={EditBiodata} />
      <PrivateRoute exact path="/pengajuan-insentif/internasional" user={user} component={Internasional} />
      <PrivateRoute exact path="/pengajuan-insentif/nasional" user={user} component={Nasional} />
      <Route path="/login-admin" component={LoginAdmin} />
      <Route path="/dashboard-admin" component={DashboardAdmin} />
      <Route path="/form-insentif-nasional" component={InsentifNasional} />
    </Switch>
  );
};

export default App;
