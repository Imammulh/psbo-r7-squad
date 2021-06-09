import MyModal from "../ui/MyModal";
import { Button, Row, Col } from "react-bootstrap";
import { BsDownload } from "react-icons/bs";

function ModalBukti(props) {
  return (
    <MyModal title="Bukti Kegiatan">
      <ul>
        <li>
          <label>Bukti Sertifikat/Piala/Medali:</label>
          <Row class="justify-content-lg-between">
            <Col lg="6">
              <p>{props.buktiSertifikat}</p>
            </Col>
            <Col lg="6">
              <Button size="sm" variant="primary">
                <BsDownload class="mr-2" />
                Download
              </Button>
            </Col>
          </Row>
        </li>
        <li>
          <label>Foto Upacara Penghargaan:</label>
          <Row class="justify-content-lg-between">
            <Col lg="6">
              <p>{props.buktiFoto}</p>
            </Col>
            <Col lg="6">
              <Button size="sm" variant="primary">
                <BsDownload class="mr-2" />
                Download
              </Button>
            </Col>
          </Row>
        </li>
        <li>
          <label>LoA:</label>
          <Row class="justify-content-lg-between">
            <Col lg="6">
              <p>{props.buktiLoa}</p>
            </Col>
            <Col lg="6">
              <Button size="sm" variant="primary">
                <BsDownload class="mr-2" />
                Download
              </Button>
            </Col>
          </Row>
        </li>
        <li>
          <label>Surat Izin Akademik (Opsional):</label>
          <Row class="justify-content-lg-between">
            <Col lg="6">
              <p>{props.buktiSuratIzin}</p>
            </Col>
            <Col lg="6">
              <Button size="sm" variant="primary">
                <BsDownload class="mr-2" />
                Download
              </Button>
            </Col>
          </Row>
        </li>
      </ul>
    </MyModal>
  );
}

export default ModalBukti;
