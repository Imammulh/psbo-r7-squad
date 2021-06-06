import PengajuanItem from "./PengajuanItem";
import { Row, Col } from "react-bootstrap";

function PengajuanList(props) {
  return (
    <Row>
      <Col>
        <PengajuanItem
          title='Pengajuan Pending'
          jumlah={props.pengajuan[0]}
          admin={props.admin}
        />
      </Col>
      <Col>
        <PengajuanItem
          title='Pengajuan Diterima'
          jumlah={props.pengajuan[1]}
          admin={props.admin}
        />
      </Col>
      <Col>
        <PengajuanItem
          title='Pengajuan Ditolak'
          jumlah={props.pengajuan[2]}
          admin={props.admin}
        />
      </Col>
    </Row>
  );
}

export default PengajuanList;
