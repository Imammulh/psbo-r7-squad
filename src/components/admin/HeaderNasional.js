import { BsArrowLeftShort } from "react-icons/bs";
import { Form } from "react-bootstrap";
import classes from "./HeaderNasional.module.css";
function HeaderNasional() {
  return (
    <div>
      <div className=" d-flex flex-row justify-content-between mt-5">
        <div className="d-flex flex-row align-items-center">
          <a href="/dashboard-admin" className={classes.backButton}>
            <BsArrowLeftShort />
            Balik ke Dashboard
          </a>
        </div>
        <div>
          <Form.Check type="checkbox" label="Menerima respon" />
        </div>
      </div>
      <div className="d-flex flex-row">
        <h3 className={classes.title}>Form Insentif Nasional</h3>
      </div>
    </div>
  );
}

export default HeaderNasional;
