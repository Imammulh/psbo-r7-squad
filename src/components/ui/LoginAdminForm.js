import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { message } from "antd";
import { Form, Button } from "react-bootstrap";
import classes from "../Form/Form.module.css";
import axios from "axios";

const initialState = {
  email: "",
  password: "",
};

function LoginAdminForm() {
  let history = useHistory();
  const [, setUser] = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState(initialState);
  useEffect(() => {}, [currentUser]);

  function ShowPasswordHandler() {
    const x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const error = () => {
    message.error("Login gagal silahkan coba lagi!", 2);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/login", {
        username: currentUser.email,
        password: currentUser.password,
      })
      .then((res) => {
        const user = res.data.user;
        const token = res.data.token;
        const loginUser = {
          email: user.email,
          isAdmin: user.isAdmin,
          token,
        };
        setUser(loginUser);
        localStorage.setItem("user", JSON.stringify(loginUser));
        history.push("/dashboard-admin");
      })
      .catch((err) => {
        error();
      });
  };

  return (
    <div className="py-3">
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={classes.labelLogin}>Username</Form.Label>
          <Form.Control type="text" name="email" value={currentUser.email} className={classes.input} placeholder="Masukkan username" onChange={handleOnChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className={classes.labelLogin}>Password</Form.Label>
          <Form.Control type="password" name="password" value={currentUser.password} className={classes.input} placeholder="Masukkan password" id="myInput" onChange={handleOnChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" className={classes.labelLogin} label="Tampilkan password" onClick={ShowPasswordHandler} />
        </Form.Group>
        <div className="d-flex justify-content-center pt-3">
          <Button className={classes.buttonPrimary} type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default LoginAdminForm;
