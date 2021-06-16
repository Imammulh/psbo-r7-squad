import React, { useState, useContext, useEffect } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { Upload, message, Button, Select, notification  } from "antd";
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { UserContext } from "../../../context/UserContext";
import UserLayout from "../../../components/layout/User/UserLayout";
import axios from "axios";
import MyCard from "../../../components/ui/MyCard";
import classes from "../../../components/Form/Form.module.css";

const { Option } = Select;

const initialState = {
  namaKegiatan: "",
  jenisLomba: "",
  skalaKegiatan: "",
  prestasi: "",
  anggotaTim1: "",
  nim1: "",
  phone1: "",
  anggotaTim2: "",
  nim2: "",
  phone2: "",
  anggotaTim3: "",
  nim3: "",
  phone3: "",
  penyelenggara: "",
  linkWeb: "",
  linkMedsos: "",
  jumlahTim: "",
  jumlahUniv: "",
  tanggalPelaksanaan: "",
  berkasPendukung: "",
};

function Nasional() {
  const [insentif, setInsentif] = useState(initialState);
  const [user] = useContext(UserContext);
  useEffect(() => {}, [insentif]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInsentif({ ...insentif, [name]: value });
  };

  const openNotification = (message, description, status) => {
    notification.open({
      message,
      description,
      icon: status ? <SmileOutlined style={{ color: '#108ee9' }} /> : <FrownOutlined style={{ color: 'red' }}/>,
    });
  };

  const handleOnSubmit = (e) => {
    axios
      .post(
        "http://localhost:4000/api/employee/store",
        {
          namaKegiatan: insentif.namaKegiatan,
          jenisLomba: insentif.jenisLomba,
          skalaKegiatan: insentif.skalaKegiatan,
          prestasi: insentif.prestasi,
          anggotaTim1: insentif.anggotaTim1,
          nim1: insentif.nim1,
          phone1: insentif.phone1,
          anggotaTim2: insentif.anggotaTim2,
          nim2: insentif.nim2,
          phone2: insentif.phone2,
          anggotaTim3: insentif.anggotaTim3,
          nim3: insentif.nim3,
          phone3: insentif.phone3,
          penyelenggara: insentif.penyelenggara,
          linkWeb: insentif.linkWeb,
          linkMedsos: insentif.linkMedsos,
          jumlahTim: insentif.jumlahTim,
          jumlahUniv: insentif.jumlahUniv,
          tanggalPelaksanaan: insentif.tanggalPelaksanaan,
        }, {headers: { "Authorization": `Bearer ${user.token}` }})
      .then((res) => {
        if(res.data.message === 'Ticket added succesfully') {
          openNotification("Pengajuan Berhasil Dikirim", "Terimakasih atas pengajuanmu, mohon tunggu hasil review dari tim kami ya.", true);
          setInsentif(initialState);
        } else {
          openNotification("Pengajuan Berhasil Dikirim", "Terimakasih atas pengajuanmu, mohon tunggu hasil review dari tim kami ya.", false)
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  function onJenisLombaChange(value) {
    setInsentif({ ...insentif, ["jenisLomba"]: value });
  }

  function onSkalaLombaChange(value) {
    setInsentif({ ...insentif, ["skalaKegiatan"]: value });
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
              <Form.Control type="text" name="namaKegiatan" value={insentif.namaKegiatan} required className={classes.input} placeholder="Masukkan nama kegiatan " onChange={handleOnChange} />
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
              <Form.Control type="text" name="prestasi" value={insentif.prestasi} required className={classes.input} placeholder="Masukkan prestasi yang dicapai " onChange={handleOnChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2} className={classes.label}>
              Anggota Tim <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Row className="mb-3">
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} name="anggotaTim1" value={insentif.anggotaTim1} placeholder="Nama Anggota " onChange={handleOnChange} />
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} name="nim1" value={insentif.nim1} placeholder="NIM " onChange={handleOnChange} />
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} name="phone1" value={insentif.phone1} placeholder="No Telepon " onChange={handleOnChange} />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} name="anggotaTim2" value={insentif.anggotaTim2} placeholder="Nama Anggota " onChange={handleOnChange} />
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} name="nim2" value={insentif.nim2} placeholder="NIM " onChange={handleOnChange} />
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} name="phone2" value={insentif.phone2} placeholder="No Telepon " onChange={handleOnChange} />
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} name="anggotaTim3" value={insentif.anggotaTim3} placeholder="Nama Anggota " onChange={handleOnChange} />
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} name="nim3" value={insentif.nim3} placeholder="NIM " onChange={handleOnChange} />
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" className={classes.input} name="phone3" value={insentif.phone3} placeholder="No Telepon " onChange={handleOnChange} />
                </Col>
              </Row>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2} className={classes.label}>
              Penyelenggara <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" className={classes.input} name="penyelenggara" value={insentif.penyelenggara} required placeholder="Masukkan nama penyelenggara " onChange={handleOnChange} />

              <Form.Group as={Row} className="my-3">
                <Form.Label column sm={3} className={classes.label}>
                  Link Website <span className={classes.colon}>:</span>
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" className={classes.input} name="linkWeb" value={insentif.linkWeb} required placeholder="Masukkan link website " onChange={handleOnChange} />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={3} className={classes.label}>
                  Link Media Sosial <span className={classes.colon}>:</span>
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" className={classes.input} name="linkMedsos" value={insentif.linkMedsos} required placeholder="Masukkan link media sosial " onChange={handleOnChange} />
                </Col>
              </Form.Group>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2} className={classes.label}>
              Jumlah Tim Peserta <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="number" className={classes.input} name="jumlahTim" value={insentif.jumlahTim} required placeholder="Masukkan jumlah tim peserta " onChange={handleOnChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2} className={classes.label}>
              Jumlah Universitas <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="number" className={classes.input} name="jumlahUniv" value={insentif.jumlahUniv} required placeholder="Masukkan jumlah universitas " onChange={handleOnChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2} className={classes.label}>
              Tanggal Pelaksanaan <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8}>
              <Form.Group>
                <Form.Control type="date" name="tanggalPelaksanaan" value={insentif.tanggalPelaksanaan} required className={classes.input} onChange={handleOnChange} />
              </Form.Group>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2} className={classes.label}>
              Berkas Pendukung <span className={classes.colon}>:</span>
            </Form.Label>
            <Col sm={8} className="d-flex align-items-center">
              <Form.Control type="file" name="berkasPendukung" value={insentif.berkasPendukung} required onChange={handleOnChange} />
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
