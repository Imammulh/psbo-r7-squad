import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { Upload, message, Button, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { BsFillPersonPlusFill } from "react-icons/bs";
import UserLayout from "../../../components/layout/User/UserLayout";

import MyCard from "../../../components/ui/MyCard";
import classes from "../../../components/Form/Form.module.css";

const { Option } = Select;
const initialState = {
  namaKegiatan: "",
  jenisLomba: "",
  skalaKegiatan: "",
  prestasi: "",
};

function Nasional() {
  const [insentif, setInsentif] = useState(initialState);
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onDateChange(date, dateString) {
    console.log(date, dateString);
  }

  const handleOnSubmit = (e) => {
    console.log("clicked");
  };

  function onJenisLombaChange(e) {
    console.log(`jenis lomba ${e}`);
  }

  function onSkalaLombaChange(e) {
    console.log(`skala kegiatan ${e}`);
  }

  return (
    <UserLayout>
      <MyCard>
        <h2 className="header">Tambah Pengajuan Insentif Nasional</h2>
        <Form>
          <Form.Group as={Row} className="mb-3 align-items-center">
            <Form.Label column sm={2} className={classes.label}>
              Nama Kegiatan <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" name="namaKegiatan" required className={classes.input} placeholder="Masukkan nama kegiatan " />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2} className={classes.label}>
              Jenis Lomba <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Select
                showSearch
                style={{ width: "100%" }}
                name="jenisLomba"
                required
                placeholder="Pilih jenis lomba"
                optionFilterProp="children"
                onChange={onJenisLombaChange}
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="LKTI">LKTI</Option>
                <Option value="Esai/Paper">Esai/Paper</Option>
                <Option value="Debat">Debat</Option>
                <Option value="Kewirausahaan/Business Plan/BMC">Kewirausahaan/Business Plan/BMC</Option>
                <Option value="Olahraga">Olahraga</Option>
                <Option value="Seni">Seni</Option>
                <Option value="Olimpiade MIPA">Olimpiade MIPA</Option>
                <Option value="Analisis Data">Analisis Data</Option>
                <Option value="Desain Grafis/Poster/Infografis">Desain Grafis/Poster/Infografis</Option>
              </Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2} className={classes.label}>
              Skala Kegiatan <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Select
                showSearch
                style={{ width: "100%" }}
                name="skalaKegiatan"
                required
                placeholder="Pilih skala kegiatan"
                optionFilterProp="children"
                onChange={onSkalaLombaChange}
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="Kabupaten / Kota">Kabupaten / Kota</Option>
                <Option value="Provinsi">Provinsi</Option>
                <Option value="Regional Wilayah">Regional Wilayah (Kurang dari 5 provinsi)</Option>
              </Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2} className={classes.label}>
              Prestasi yang Dicapai <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" name="prestasi" required className={classes.input} placeholder="Masukkan prestasi yang dicapai " />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2} className={classes.label}>
              Anggota Tim <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Row className="mb-3">
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} placeholder="Nama Anggota " />
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} placeholder="NIM " />
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} placeholder="No Telepon " />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} placeholder="Nama Anggota " />
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} placeholder="NIM " />
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} placeholder="No Telepon " />
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} placeholder="Nama Anggota " />
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} placeholder="NIM " />
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} placeholder="No Telepon " />
                </Col>
              </Row>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2} className={classes.label}>
              Penyelenggara <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" className={classes.input} placeholder="Masukkan nama penyelenggara " />

              <Form.Group as={Row} className="my-3">
                <Form.Label column sm={3} className={classes.label}>
                  Link Website <span className={classes.colon}>:</span>
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" className={classes.input} placeholder="Masukkan link website " />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={3} className={classes.label}>
                  Link Media Sosial <span className={classes.colon}>:</span>
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" className={classes.input} placeholder="Masukkan link media sosial " />
                </Col>
              </Form.Group>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2} className={classes.label}>
              Jumlah Tim Peserta <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" name="jumlahTim" required className={classes.input} placeholder="Masukkan jumlah tim peserta " />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2} className={classes.label}>
              Jumlah Universitas <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" name="jumlahUniv" required className={classes.input} placeholder="Masukkan jumlah universitas " />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2} className={classes.label}>
              Tanggal Pelaksanaan <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Group controlId="date">
                <Form.Control type="date" name="tanggalPelaksanaan" required className={classes.input} />
              </Form.Group>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2} className={classes.label}>
              Berkas Pendukung <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8} className="d-flex align-items-center">
              <Form.Control type="file" />
            </Col>
          </Form.Group>
          <Row>
            <Col sm={2}></Col>
            <Col>
              <Button type="submit" onClick={handleOnSubmit} className={`${classes.smallBtn} px-3 mt-2`}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </MyCard>
    </UserLayout>
  );
}

export default Nasional;
