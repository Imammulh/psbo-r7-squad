import { Form, Col, Row } from "react-bootstrap";
import { Button, Select } from "antd";
import { BsFillPersonPlusFill } from "react-icons/bs";
import UserLayout from "../../../components/layout/User/UserLayout";
import MyCard from "../../../components/ui/MyCard";
import classes from "../../../components/Form/Form.module.css";

const { Option } = Select;

function Internasional() {
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onDateChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <UserLayout>
      <MyCard>
        <h2 className="header">Tambah Pengajuan Insentif Nasional</h2>
        <Form>
          <Form.Group as={Row} className="mb-3 align-items-center" controlId="nama">
            <Form.Label column sm={2} className={classes.label}>
              Nama Kegiatan <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" className={classes.input} placeholder="Masukkan nama kegiatan " />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="nama">
            <Form.Label column sm={2} className={classes.label}>
              Jenis Lomba <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Select showSearch style={{ width: "100%" }} placeholder="Pilih jenis lomba" optionFilterProp="children" onChange={onChange} filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                <Option value="lkti">LKTI</Option>
                <Option value="easi">Esai/Paper</Option>
                <Option value="debat">Debat</Option>
                <Option value="kewirus">Kewirausahaan/Business Plan/BMC</Option>
                <Option value="olahraga">Olahraga</Option>
                <Option value="seni">Seni</Option>
                <Option value="mipa">Olimpiade MIPA</Option>
                <Option value="data">Analisis Data</Option>
                <Option value="desain">Desain Grafis/Poster/Infografis</Option>
              </Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="prestasi">
            <Form.Label column sm={2} className={classes.label}>
              Prestasi yang Dicapai <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" className={classes.input} placeholder="Masukkan prestasi yang dicapai " />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="nama">
            <Form.Label column sm={2} className={classes.label}>
              Anggota Tim <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Button className={classes.smallBtn}>
                <BsFillPersonPlusFill style={{ marginRight: "4px" }} />
                Tambah
              </Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="prestasi">
            <Form.Label column sm={2} className={classes.label}>
              Penyelenggara <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" className={classes.input} placeholder="Masukkan nama penyelenggara " />

              <Form.Group as={Row} className="my-3" controlId="prestasi">
                <Form.Label column sm={3} className={classes.label}>
                  Link Website <span className={classes.colon}>:</span>
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" className={classes.input} placeholder="Masukkan link website " />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="prestasi">
                <Form.Label column sm={3} className={classes.label}>
                  Link Media Sosial <span className={classes.colon}>:</span>
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" className={classes.input} placeholder="Masukkan link media sosial " />
                </Col>
              </Form.Group>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="prestasi">
            <Form.Label column sm={2} className={classes.label}>
              Jumlah Tim Peserta <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" className={classes.input} placeholder="Masukkan jumlah tim peserta " />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="prestasi">
            <Form.Label column sm={2} className={classes.label}>
              Jumlah Universitas <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" className={classes.input} placeholder="Masukkan jumlah universitas " />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="prestasi">
            <Form.Label column sm={2} className={classes.label}>
              Tanggal Pelaksanaan <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Group controlId="date">
                <Form.Control type="date" name="date" className={classes.input} />
              </Form.Group>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="prestasi">
            <Form.Label column sm={2} className={classes.label}>
              Berkas Pendukung <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Group as={Row} controlId="prestasi">
                <Form.Label column sm={2} className={classes.label}>
                  Sertifikat<span className={classes.colon}>:</span>
                </Form.Label>
                <Col sm={9} className="d-flex align-items-center">
                  <Form.Control type="file" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="prestasi">
                <Form.Label column sm={2} className={classes.label}>
                  Foto Penyerahan <span className={classes.colon}>:</span>
                </Form.Label>
                <Col sm={9} className="d-flex align-items-center">
                  <Form.Control type="file" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="prestasi">
                <Form.Label column sm={2} className={classes.label}>
                  LoA <span className={classes.colon}>:</span>
                </Form.Label>
                <Col sm={9} className="d-flex align-items-center">
                  <Form.Control type="file" />
                </Col>
              </Form.Group>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="prestasi">
            <Form.Label column sm={2} className={classes.label}>
              Surat Izin Akademik<span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8} className="d-flex align-items-center">
              <Form.Control type="file" />
            </Col>
          </Form.Group>
          <Row>
            <Col sm={2}></Col>
            <Col>
              <Button type="submit" className={`${classes.smallBtn} px-3 mt-3`}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </MyCard>
    </UserLayout>
  );
}

export default Internasional;
