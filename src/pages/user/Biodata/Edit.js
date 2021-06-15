import { Link } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import MyCard from "../../../components/ui/MyCard";
import UserLayout from "../../../components/layout/User/UserLayout";

import classes from "./Biodata.module.css";

function EditBiodata() {
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
          <Form.Group as={Row} className="mb-3 align-items-center" controlId="nama">
            <Form.Label column sm={2} className={`${classes.label} ${classes.labelColor}`}>
              Nama Lengkap <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" className={classes.input} value="Imam Mulhaq" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 align-items-center" controlId="nama">
            <Form.Label column sm={2} className={`${classes.label} ${classes.labelColor}`}>
              NIM <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" className={classes.input} value="G64180063" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 align-items-center" controlId="nama">
            <Form.Label column sm={2} className={`${classes.label} ${classes.labelColor}`}>
              Fakultas <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" className={classes.input} value="Matematika dan Ilmu Pengetahuan Alam" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 align-items-center" controlId="nama">
            <Form.Label column sm={2} className={`${classes.label} ${classes.labelColor}`}>
              Department <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" className={classes.input} value="Ilmu Komputer" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 align-items-center" controlId="nama">
            <Form.Label column sm={2} className={`${classes.label} ${classes.labelColor}`}>
              Email <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="email" className={classes.input} value="emailimam@gmail.com" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 align-items-center" controlId="nama">
            <Form.Label column sm={2} className={`${classes.label} ${classes.labelColor}`}>
              No Handphone <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" className={classes.input} value="082288983318" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 align-items-center" controlId="nama">
            <Form.Label column sm={2} className={`${classes.label} ${classes.labelColor}`}>
              No Rekening <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" className={classes.input} value="911 (BNI)" />
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
