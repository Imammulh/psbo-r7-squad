import PengajuanItem from "./PengajuanItem";
import { Row, Col } from "react-bootstrap";

function PengajuanList() {
  return (
    <Row className="mt-5">
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
  );
}

export default PengajuanList;
