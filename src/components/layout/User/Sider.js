import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Avatar } from "antd";
import { useLocation } from "react-router-dom";
import { HomeFilled, UserOutlined } from "@ant-design/icons";
import { FaUser } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { UserContext } from "../../../context/UserContext";

import classes from "./Layout.module.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

function SiderMenu(props) {
  const [user] = useContext(UserContext);
  const location = useLocation();
  const pathname = location.pathname === "/biodata/edit" ? "/biodata" : location.pathname;
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        backgroundColor: "#1C7BD9",
        minHeight: "100vh",
        position: "fixed",
        zIndex: 2,
      }}
      width={250}
      onCollapse={(collapsed, type) => {
        if (type === "clickTrigger") props.onCollapsed();
      }}
      onBreakpoint={(broken) => {
        props.onBreakpoint();
      }}
    >
      <div className={classes.user}>
        <Avatar size={124} icon={<UserOutlined />} className="d-flex align-items-center justify-content-center" />
        <h2>{user.nama}</h2>
        <p>{user.departemen}</p>
      </div>
      <Menu style={{ backgroundColor: "transparent", border: 0, marginTop: "16px" }} mode="inline" defaultSelectedKeys={[`${pathname}`]}>
        <Menu.Item key="/" icon={<HomeFilled />}>
          <NavLink to="/">Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key="/biodata" icon={<FaUser />}>
          <NavLink to="/biodata">Biodata</NavLink>
        </Menu.Item>
        <SubMenu key="/pengajuan-insentif" icon={<IoDocumentText />} title="Pengajuan Insentif">
          <Menu.Item key="/pengajuan-insentif/nasional">
            <NavLink to="/pengajuan-insentif/nasional">Nasional</NavLink>
          </Menu.Item>
          <Menu.Item key="/pengajuan-insentif/internasional">
            <NavLink to="/pengajuan-insentif/internasional">Internasional</NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default SiderMenu;
