import React, { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import classes from "./Form.module.css";
import axios from "axios";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
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
      .post("https://radiant-cliffs-45593.herokuapp.com/api/login", {
        username: currentUser.email,
        password: currentUser.password,
      })
      .then((res) => {
        const user = res.data.user;
        const token = res.data.token;
        const loginUser = {
          id: user.id,
          nama: user.nama,
          nim: user.nim,
          fakultas: user.fakultas,
          departemen: "Ilmu Komputer",
          email: user.email,
          phone: user.phone,
          noRekening: user.noRekening,
          isAdmin: user.isAdmin,
          token,
        };
        setUser(loginUser);
        localStorage.setItem("user", JSON.stringify(loginUser));
        history.push("/");
      })
      .catch((err) => {
        error();
      });
  };

  return (
    <div className="py-3">
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className={classes.labelLogin}>E-mail IPB</Form.Label>
          <Form.Control type="text" name="email" required value={currentUser.email} className={classes.input} placeholder="Masukkan email" onChange={handleOnChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className={classes.labelLogin}>Password</Form.Label>
          <Form.Control type="password" name="password" required value={currentUser.password} className={classes.input} placeholder="Masukkan password" onChange={handleOnChange} id="myInput" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check className={classes.labelLogin} type="checkbox" label="Tampilkan password" onClick={ShowPasswordHandler} />
        </Form.Group>

        <div className="d-flex justify-content-center pt-3">
          <Button className={classes.buttonPrimary} type="submit">
            Masuk
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
