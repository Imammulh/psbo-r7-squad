import { Link } from "react-router-dom";
import { Layout, Menu, Avatar } from "antd";

import { HomeFilled, UserOutlined } from "@ant-design/icons";
import { FaUser } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

import classes from "./Menu.module.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

function SiderMenu(props) {
  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
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
        <Avatar size={124} icon={<UserOutlined />} />
        <h2>Nama</h2>
        <p>Department</p>
      </div>
      <Menu
        style={{ backgroundColor: "transparent", border: 0, marginTop: "16px" }}
        mode='inline'
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key='1' icon={<HomeFilled />}>
          <Link to='/'>Dashboard</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<FaUser />}>
          <Link to='/biodata'>Biodata</Link>
        </Menu.Item>
        <SubMenu
          key='sub1'
          icon={<IoDocumentText />}
          title='Pengajuan Insentif'
        >
          <Menu.Item key='3'>
            <Link to='/pengajuan-insentif/nasional'>Nasional</Link>
          </Menu.Item>
          <Menu.Item key='4'>
            <Link to='/pengajuan-insentif/internasional'>Internasional</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default SiderMenu;
