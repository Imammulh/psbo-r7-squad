import { useState } from "react";
import { Route, Switch } from "react-router";
import "antd/dist/antd.css";

import SiderMenu from "../Menu/SiderMenu";
import HeaderMenu from "../Menu/HeaderMenu";
import Dashboard from "../../pages/user/Dashboard";
import Biodata from "../../pages/user/Biodata";
import PengajuanInsentif from "../../pages/user/PengajuanInsentif";

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
            <Route path='/biodata' component={Biodata} />
            <Route path='/pengajuan-insentif' component={PengajuanInsentif} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default PrivateLayout;
