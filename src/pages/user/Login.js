import LoginForm from '../../components/Form/LoginForm';
import styles from './Login.module.css';

function LoginPage() {
  return (
    <section className={styles.container}>
      <h1>Log In</h1>
      <p>Masuk terlebih dahulu untuk melakukan pengajuan insentif lomba</p>
      <LoginForm />
    </section>
  );
}

export default LoginPage;
