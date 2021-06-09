import { Form, Col, Row } from "react-bootstrap";
import MyCard from "../../../components/ui/MyCard";
import classes from "../../../components/Form/Form.module.css";

function Internasional() {
  return (
    <MyCard>
      <h2 className="header">Tambah Pengajuan Insentif Internasional</h2>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="nama">
          <Form.Label column sm={2} className={classes.label}>
            Nama Kegiatan <span className={classes.colon}>:</span>
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" className={classes.input} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="nama">
          <Form.Label column sm={2} className={classes.label}>
            Jenis Lomba <span className={classes.colon}>:</span>
          </Form.Label>
          <Col sm={8}></Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="prestasi">
          <Form.Label column sm={2} className={classes.label}>
            Prestasi yang Dicapai <span className={classes.colon}>:</span>
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" className={classes.input} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="nama">
          <Form.Label column sm={2} className={classes.label}>
            Anggota Tim <span className={classes.colon}>:</span>
          </Form.Label>
          <Col sm={8}></Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="prestasi">
          <Form.Label column sm={2} className={classes.label}>
            Penyelenggara <span className={classes.colon}>:</span>
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" className={classes.input} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="prestasi">
          <Form.Label column sm={2} className={classes.label}>
            Jumlah Tim Peserta <span className={classes.colon}>:</span>
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" className={classes.input} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="prestasi">
          <Form.Label column sm={2} className={classes.label}>
            Jumlah Universitas <span className={classes.colon}>:</span>
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" className={classes.input} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="prestasi">
          <Form.Label column sm={2} className={classes.label}>
            Tanggal Pelaksanaan <span className={classes.colon}>:</span>
          </Form.Label>
          <Col sm={8}></Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="prestasi">
          <Form.Label column sm={2} className={classes.label}>
            Berkas Pendukung <span className={classes.colon}>:</span>
          </Form.Label>
          <Col sm={8}></Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="prestasi">
          <Form.Label column sm={2} className={classes.label}>
            Surat Izin Akademik<span className={classes.colon}>:</span>
          </Form.Label>
          <Col sm={8}></Col>
        </Form.Group>
      </Form>
    </MyCard>
  );
}

export default Internasional;
