import React from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./Form.module.css";

const LoginForm = () => {
  function ShowPasswordHandler() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div className="py-3">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={classes.labelLogin}>E-mail IPB</Form.Label>
          <Form.Control type="text" className={classes.input} placeholder="Masukkan email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className={classes.labelLogin}>Password</Form.Label>
          <Form.Control type="password" className={classes.input} placeholder="Masukkan password" id="myInput" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
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
