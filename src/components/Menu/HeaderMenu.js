import { Link } from "react-router-dom";
import { Layout, Button } from "antd";

import classes from "./Menu.module.css";

const { Header } = Layout;

function HeaderMenu() {
  return (
    <Header className={classes.header}>
      <h1 className={classes.app}>Sistem Informasi Lomba</h1>
      <Button
        type='danger'
        size='medium'
        style={{
          backgroundColor: "#F13426",
          border: "border: 1px solid #C22D22",
          borderRadius: "4px",
          fontWeight: 600,
        }}
      >
        <Link to='/login'>Keluar</Link>
      </Button>
    </Header>
  );
}

export default HeaderMenu;
