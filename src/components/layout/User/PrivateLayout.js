import { useState } from "react";
import { Route, Switch } from "react-router";
import "antd/dist/antd.css";

import SiderMenu from "./Sider";
import HeaderMenu from "./Header";
import Dashboard from "../../../pages/user/Dashboard";
import Biodata from "../../../pages/user/Biodata/Index";
import EditBiodata from "../../../pages/user/Biodata/Edit";
import Nasional from "../../../pages/user/PengajuanInsentif/Nasional";
import Internasional from "../../../pages/user/PengajuanInsentif/Internasional";

import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

function PrivateLayout() {
  const [overlay, setOverlay] = useState(false);

  const toggleOverlay = () => {
    setOverlay(!overlay);
  };

  const hideOverlay = () => {
    setOverlay(false);
  };
  return (
    <Layout>
      <SiderMenu onCollapsed={toggleOverlay} onBreakpoint={hideOverlay} />
      <Layout className='content-layout'>
        <div className={overlay ? "overlay" : ""}></div>
        <HeaderMenu />
        <Content style={{ margin: "24px", minHeight: "84vh" }}>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/biodata' component={Biodata} />
            <Route path='/biodata/edit' component={EditBiodata} />
            <Route path='/pengajuan-insentif/nasional' component={Nasional} />
            <Route
              path='/pengajuan-insentif/internasional'
              component={Internasional}
            />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default PrivateLayout;
