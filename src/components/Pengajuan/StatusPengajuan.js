import { useState } from "react";
import { Button, Modal, Container, Row, Col, Card } from "react-bootstrap";
import { IoOpenOutline } from "react-icons/io5";
import { HiDocumentAdd } from "react-icons/hi";
import { RiShieldCheckFill } from "react-icons/ri";
import { FaClipboardCheck } from "react-icons/fa";
import classes from "./Pengajuan.module.css";

function StatusPengajuan(props) {
  const [show, setShow] = useState(false);
  const data = props.data;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className={classes.card}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3 className={classes.title}>{data.namaKegiatan}</h3>
            <p className={classes.desc}>
              Insentif {data.kategori === "Internasional" ? "Internasional" : "Nasional"} • {data.createdAt} • {data.prestasi}
            </p>
            <div className={`${classes.badge} ${data.status === "Diterima" ? classes.accepted : classes.pending}`}>{data.status}</div>
          </div>
          <div>
            <Button
              variant="outline-secondary"
              style={{
                border: "1px solid #EBF0F5",
                display: "flex",
                alignItems: "center",
                fontWeight: 600,
                boxShadow:
                  "0px 27px 80px rgba(4, 32, 64, 0.02), 0px 11.28px 33.4221px rgba(4, 32, 64, 0.0122451), 0px 6.0308px 17.869px rgba(4, 32, 64, 0.0103394), 0px 3.38082px 10.0172px rgba(4, 32, 64, 0.00983385), 0px 1.79553px 5.32008px rgba(4, 32, 64, 0.00934265), 0px 0.747159px 2.21381px rgba(4, 32, 64, 0.00749322)",
              }}
              onClick={handleShow}
            >
              <IoOpenOutline />
              <span className={classes.status}>Open</span>
            </Button>
          </div>
        </div>
      </Card>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <Container style={{ paddingTop: "16px" }}>
            <Card>
              <Card.Body className={classes.timeline}>
                <h4 className={classes.title}>Timeline Pengajuan</h4>
                <Row>
                  <Col xs={12} lg={4} className="d-flex mb-2">
                    <div className={classes.icon}>
                      <HiDocumentAdd style={{ fontSize: "40px" }} />
                    </div>
                    <div className={classes.detailStatus}>
                      <span className={classes.bolder}>Pengajuan dibuat</span> <br />
                      {data.createdAt}
                    </div>
                  </Col>
                  <Col xs={12} lg={4} className="d-flex mb-2">
                    <div className={classes.icon}>
                      <RiShieldCheckFill style={{ fontSize: "32px", marginRight: "6px" }} />
                    </div>
                    <div className={classes.detailStatus}>
                      <span className={classes.bolder}> Menunggu Verifikasi</span> <br />
                      {data.createdAt}
                    </div>
                  </Col>
                  {data.status === "Diterima" && (
                    <Col xs={12} lg={4} className="d-flex mb-2">
                      <div className={`${classes.icon} ${classes.diterima}`}>
                        <FaClipboardCheck style={{ fontSize: "32px", marginRight: "6px" }} />
                      </div>
                      <div className={classes.detailStatus}>
                        <span className={classes.bolder}> Pengajuan Diterima</span> <br />
                        {data.updatedAt}
                      </div>
                    </Col>
                  )}
                </Row>
              </Card.Body>
            </Card>
            <Card className="mt-3 px-2">
              <Card.Body>
                <Row className="justify-content-between align-items-center pb-3 mb-4 border-bottom">
                  <Col>
                    <h3 className={`${classes.title} mb-0`}>Data Pengajuan Insentif Nasional</h3>
                  </Col>
                  {/* {data.status === "Pending" && 
                    <Button
                      type="danger"
                      size="small"
                      style={{
                        backgroundColor: "#F13426",
                        border: "1px solid #C22D22",
                        borderRadius: "4px",
                        fontWeight: 400,
                      }}
                    >
                      Hapus Pengajuan
                    </Button>
                  } */}
                </Row>
                <Row className="d-flex mb-2 align-items-center">
                  <Col sm={6} md={5} lg={4} className={classes.label}>
                    Nama Kegiatan <span className={classes.colon}>:</span>
                  </Col>
                  <Col className={classes.desc}>{data.namaKegiatan}</Col>
                </Row>
                <Row className="d-flex mb-2 align-items-center">
                  <Col sm={6} md={5} lg={4} className={classes.label}>
                    Jenis Lomba <span className={classes.colon}>:</span>
                  </Col>
                  <Col className={classes.desc}>{data.jenisLomba}</Col>
                </Row>
                <Row className="d-flex mb-2 align-items-center">
                  <Col sm={6} md={5} lg={4} className={classes.label}>
                    Skala Kegiatan <span className={classes.colon}>:</span>
                  </Col>
                  <Col className={classes.desc}>{data.skalaKegiatan}</Col>
                </Row>
                <Row className="d-flex mb-2 align-items-center">
                  <Col sm={6} md={5} lg={4} className={classes.label}>
                    Prestasi yang Dicapai <span className={classes.colon}>:</span>
                  </Col>
                  <Col className={classes.desc}>{data.prestasi}</Col>
                </Row>
                {/* <Row className="d-flex mb-2 align-items-center">
                  <Col sm={6} md={5} lg={4} className={classes.label}>
                    Anggota Tim <span className={classes.colon}>:</span>
                  </Col>
                  <Col className={classes.desc}>emailimam@gmail.com</Col>
                </Row> */}
                <Row className="d-flex mb-2 align-items-center">
                  <Col sm={6} md={5} lg={4} className={classes.label}>
                    Penyelenggara <span className={classes.colon}>:</span>
                  </Col>
                  <Col className={classes.desc}>{data.penyelenggara}</Col>
                </Row>
                <Row className="d-flex mb-2 align-items-center">
                  <Col sm={6} md={5} lg={4} className={classes.label}>
                    Tanggal Pelaksanaan <span className={classes.colon}>:</span>
                  </Col>
                  <Col className={classes.desc}>{data.tanggalPelaksanaan}</Col>
                </Row>
                {/* <Row className="d-flex mb-2 align-items-center">
                  <Col sm={6} md={5} lg={4} className={classes.label}>
                    Berkas Pendukung <span className={classes.colon}>:</span>
                  </Col>
                  <Col className={classes.desc}>-</Col>
                </Row> */}
                <Row className="justify-content-end align-items-center">
                  <Button
                    style={{
                      backgroundColor: "#EBF0F5",
                      border: "1px solid #EBF0F5",
                      color: "#96A3B3",
                      borderRadius: "4px",
                      fontWeight: 400,
                    }}
                    onClick={handleClose}
                  >
                    Keluar
                  </Button>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default StatusPengajuan;
