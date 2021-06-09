import LoginForm from "../../components/Form/LoginForm";
import classes from "../../components/Form/Form.module.css";

function LoginPage() {
  return (
    <section className={classes.container}>
      <h1>Log In</h1>
      <p>Masuk terlebih dahulu untuk melakukan pengajuan insentif lomba</p>
      <LoginForm />
    </section>
  );
}

export default LoginPage;
