import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Layout, Button } from "antd";
import { UserContext } from "../../../context/UserContext";
import classes from "./Layout.module.css";

const { Header } = Layout;

function HeaderMenu() {
  let history = useHistory();
  const [, setUser] = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    history.push("/");
  };

  return (
    <Header className={classes.header}>
      <h1 className={classes.app}>Sistem Informasi Lomba</h1>
      <Button
        type="danger"
        size="medium"
        style={{
          backgroundColor: "#F13426",
          border: "1px solid #C22D22",
          borderRadius: "4px",
          fontWeight: 600,
        }}
        onClick={handleLogout}
      >
        Keluar
      </Button>
    </Header>
  );
}

export default HeaderMenu;
