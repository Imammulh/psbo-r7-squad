import classes from "./LoginAdminLayout.module.css";

function LoginAdminLayout(props) {
  return (
    <div className={classes.myContainer}>
      <h4>Log In Admin</h4>
      <main>{props.children}</main>
    </div>
  );
}

export default LoginAdminLayout;
