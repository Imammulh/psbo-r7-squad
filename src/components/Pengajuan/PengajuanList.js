import MyCard from "../ui/MyCard";
import classes from "./Pengajuan.module.css";
import { Row, Col } from "react-bootstrap";

function PengajuanList(props) {
  return (
    <Row>
      <Col xs={12} sm={4} className="pb-2">
        <MyCard>
          <p className={classes.titlePengajuan}>Pengajuan Pending</p>
          <h2 className={classes.jumlah}>{props.pengajuan[0]}</h2>
          {props.admin && <p className={classes.bottomText}>/Mahasiswa</p>}
        </MyCard>
      </Col>
      <Col xs={12} sm={4} className="pb-2">
        <MyCard>
          <p className={classes.titlePengajuan}>Pengajuan Diterima</p>
          <h2 className={`${classes.jumlah} ${classes.acc}`}>{props.pengajuan[1]}</h2>
          {props.admin && <p className={`${classes.bottomText} ${classes.acc}`}>/Mahasiswa</p>}
        </MyCard>
      </Col>
      <Col xs={12} sm={4}>
        <MyCard>
          <p className={classes.titlePengajuan}>Pengajuan Ditolak</p>
          <h2 className={`${classes.jumlah} ${classes.deny}`}>{props.pengajuan[2]}</h2>
          {props.admin && <p className={`${classes.bottomText} ${classes.deny}`}>/Mahasiswa</p>}
        </MyCard>
      </Col>
    </Row>
  );
}

export default PengajuanList;
