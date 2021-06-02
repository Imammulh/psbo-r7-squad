import PengajuanItem from "./PengajuanItem";
import { Container, Row, Col } from "react-bootstrap";

function PengajuanList() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <PengajuanItem title="Pengajuan Pending" jumlah="1" />
        </Col>
        <Col>
          <PengajuanItem title="Pengajuan Diterima" jumlah="3" />
        </Col>
        <Col>
          <PengajuanItem title="Pengajuan Ditolak" jumlah="0" />
        </Col>
      </Row>
    </Container>
  );
}

export default PengajuanList;
