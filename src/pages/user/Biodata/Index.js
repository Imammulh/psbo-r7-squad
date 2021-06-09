import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import MyCard from "../../../components/ui/MyCard";
import classes from "./Biodata.module.css";

function Biodata() {
  return (
    <MyCard>
      <div className={classes.header}>
        <h2 className={classes.title}>Biodata</h2>
        <Link to="/biodata/edit">
          <Button className={classes.btnPrimary}>Ubah</Button>
        </Link>
      </div>
      <Row className="d-flex mb-2 align-items-center">
        <Col className={classes.label}>
          Nama Lengkap <span className={classes.colon}>:</span>
        </Col>
        <Col sm={9} className={classes.desc}>
          Imam Mulhaq
        </Col>
      </Row>
      <Row className="d-flex mb-2 align-items-center">
        <Col className={classes.label}>
          NIM <span className={classes.colon}>:</span>
        </Col>
        <Col sm={9} className={classes.desc}>
          G64180063
        </Col>
      </Row>
      <Row className="d-flex mb-2 align-items-center">
        <Col className={classes.label}>
          Fakultas <span className={classes.colon}>:</span>
        </Col>
        <Col sm={9} className={classes.desc}>
          Matematika dan Ilmu Pengetahuan Alam
        </Col>
      </Row>
      <Row className="d-flex mb-2 align-items-center">
        <Col className={classes.label}>
          Department <span className={classes.colon}>:</span>
        </Col>
        <Col sm={9} className={classes.desc}>
          Ilmu Komputer
        </Col>
      </Row>
      <Row className="d-flex mb-2 align-items-center">
        <Col className={classes.label}>
          Email <span className={classes.colon}>:</span>
        </Col>
        <Col sm={9} className={classes.desc}>
          emailimam@gmail.com
        </Col>
      </Row>
      <Row className="d-flex mb-2 align-items-center">
        <Col className={classes.label}>
          No Handphone <span className={classes.colon}>:</span>
        </Col>
        <Col sm={9} className={classes.desc}>
          082288983318
        </Col>
      </Row>
      <Row className="d-flex align-items-center">
        <Col className={classes.label}>
          No Rekening <span className={classes.colon}>:</span>
        </Col>
        <Col sm={9} className={classes.desc}>
          911 (BNI)
        </Col>
      </Row>
    </MyCard>
  );
}

export default Biodata;
