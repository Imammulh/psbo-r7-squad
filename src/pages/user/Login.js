import LoginForm from "../../components/Form/LoginForm";
import { Container } from "react-bootstrap";
import classes from "./Login.module.css";

function LoginPage() {
  return (
    <Container className="d-flex flex-column align-items-center p-5">
      <div className="py-5">
        <img src="/logo/logoIPB.svg" alt="ipb" />
      </div>
      <div>
        <h1 className={classes.title}>Log In</h1>
        <p className={classes.desc}>Masuk terlebih dahulu untuk melakukan pengajuan insentif lomba</p>
        <LoginForm />
      </div>
    </Container>
  );
}

export default LoginPage;
