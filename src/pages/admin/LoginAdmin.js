import { Container } from "react-bootstrap";
import LoginAdminForm from "../../components/ui/LoginAdminForm";
import classes from "../user/Login.module.css";

function LoginAdmin() {
  return (
    <Container className="d-flex flex-column align-items-center p-5">
      <div className="py-5">
        <img src="/logo/logoIPB.svg" alt="ipb" />
      </div>
      <div className={classes.minWidth}>
        <h1 className={classes.title}>Log In Admin</h1>
        <LoginAdminForm />
      </div>
    </Container>
  );
}

export default LoginAdmin;
