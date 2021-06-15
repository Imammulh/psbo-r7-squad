import { useState } from "react";
import "antd/dist/antd.css";

import SiderMenu from "./Sider";
import HeaderMenu from "./Header";

import { Layout } from "antd";
const { Content } = Layout;

function UserLayout(props) {
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
      <Layout className="content-layout">
        <div className={overlay ? "overlay" : ""}></div>
        <HeaderMenu />
        <Content style={{ margin: "24px", minHeight: "84vh" }}>{props.children}</Content>
      </Layout>
    </Layout>
  );
}

export default UserLayout;
