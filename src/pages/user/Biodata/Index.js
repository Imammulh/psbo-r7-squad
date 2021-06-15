import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import MyCard from "../../../components/ui/MyCard";
import UserLayout from "../../../components/layout/User/UserLayout";
import { UserContext } from "../../../context/UserContext";

import classes from "./Biodata.module.css";

function Biodata() {
  const [user] = useContext(UserContext);

  return (
    <UserLayout>
      <MyCard>
        <div className={classes.header}>
          <h2 className={classes.title}>Biodata</h2>
          <Link to="/biodata/edit">
            <Button className={classes.btnpPrimary}>Ubah</Button>
          </Link>
        </div>
        <Row className="d-flex mb-2 align-items-center">
          <Col sm={2} className={classes.label}>
            Nama Lengkap <span className={classes.colon}>:</span>
          </Col>
          <Col className={classes.desc}>{user.nama}</Col>
        </Row>
        <Row className="d-flex mb-2 align-items-center">
          <Col sm={2} className={classes.label}>
            NIM <span className={classes.colon}>:</span>
          </Col>
          <Col className={classes.desc}>{user.nim}</Col>
        </Row>
        <Row className="d-flex mb-2 align-items-center">
          <Col sm={2} className={classes.label}>
            Fakultas <span className={classes.colon}>:</span>
          </Col>
          <Col className={classes.desc}>{user.fakultas}</Col>
        </Row>
        <Row className="d-flex mb-2 align-items-center">
          <Col sm={2} className={classes.label}>
            Department <span className={classes.colon}>:</span>
          </Col>
          <Col className={classes.desc}>{user.departemen}</Col>
        </Row>
        <Row className="d-flex mb-2 align-items-center">
          <Col sm={2} className={classes.label}>
            Email <span className={classes.colon}>:</span>
          </Col>
          <Col className={classes.desc}>{user.email}</Col>
        </Row>
        <Row className="d-flex mb-2 align-items-center">
          <Col sm={2} className={classes.label}>
            No Handphone <span className={classes.colon}>:</span>
          </Col>
          <Col className={classes.desc}>{user.phone}</Col>
        </Row>
        <Row className="d-flex align-items-center">
          <Col sm={2} className={classes.label}>
            No Rekening <span className={classes.colon}>:</span>
          </Col>
          <Col className={classes.desc}>{user.noRekening}</Col>
        </Row>
      </MyCard>
    </UserLayout>
  );
}

export default Biodata;
