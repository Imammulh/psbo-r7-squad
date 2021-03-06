import { useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import MyCard from "../../../components/ui/MyCard";
import UserLayout from "../../../components/layout/User/UserLayout";
import { UserContext } from "../../../context/UserContext";

import classes from "./Biodata.module.css";

function EditBiodata() {
  const [user] = useContext(UserContext);

  return (
    <UserLayout>
      <MyCard>
        <div className={classes.header}>
          <h2 className={classes.title}>Biodata</h2>
          <Link to="/biodata">
            <Button variant="danger" className={classes.btnDanger}>
              Keluar
            </Button>
          </Link>
        </div>
        <Form>
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
              Fakultas / Department <span className={classes.colon}>:</span>
            </Col>
            <Col className={classes.desc}>
              Fakultas {user.fakultas} / Department <span className={classes.colon}></span>
            </Col>
          </Row>
          <Form.Group as={Row} className="mb-3 mt-3 align-items-center" controlId="nama">
            <Form.Label column sm={2} className={classes.label}>
              Email <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="email" className={classes.input} value={user.email} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 align-items-center" controlId="nama">
            <Form.Label column sm={2} className={classes.label}>
              No Handphone <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" className={classes.input} value={user.phone} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 align-items-center" controlId="nama">
            <Form.Label column sm={2} className={classes.label}>
              No Rekening <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" className={classes.input} value={user.noRekening} />
            </Col>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button type="submit">Simpan</Button>
          </div>
        </Form>
      </MyCard>
    </UserLayout>
  );
}

export default EditBiodata;
