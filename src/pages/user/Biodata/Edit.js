import { Link } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import MyCard from "../../../components/UI/MyCard";
import classes from "./Biodata.module.css";

function EditBiodata() {
  return (
    <MyCard>
      <div className={classes.header}>
        <h2 className={classes.title}>Biodata</h2>
        <Link to='/biodata'>
          <Button variant='danger' className={classes.btnDanger}>
            Keluar
          </Button>
        </Link>
      </div>
    </MyCard>
  );
}

export default EditBiodata;
