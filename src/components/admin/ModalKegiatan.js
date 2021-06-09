import MyModal from "../ui/MyModal";

function ModalKegiatan(props) {
  return (
    <MyModal title="Data Kegiatan">
      <ul>
        <li>
          <label>Nama Kegiatan:</label>
          <p>{props.namaKegiatan}</p>
        </li>
        <li>
          <label>Jenis Kegiatan:</label>
          <p>{props.jenisKegiatan}</p>
        </li>
        <li>
          <label>Skala:</label>
          <p>{props.skala}</p>
        </li>
        <li>
          <label>Penyelenggara:</label>
          <p>{props.penyelenggara}</p>
        </li>
        <li>
          <label>Jumlah Tim Peserta:</label>
          <p>{props.jumlahTim}</p>
        </li>
        <li>
          <label>Jumlah Perguruan Tinggi Peserta:</label>
          <p>{props.jumlahPt}</p>
        </li>
        <li>
          <label>Tanggal Pelaksanaan:</label>
          <p>{props.tglKegiatan}</p>
        </li>
        <li>
          <label>URL Website Penyelenggara:</label>
          <br />
          <a href={props.urlKegiatan} target="_blank">
            {props.urlKegiatan}
          </a>
        </li>
        <li>
          <label>URL Media Sosial:</label>
          <br />
          <a href={props.urlMedsos} target="_blank">
            {props.urlMedsos}
          </a>
        </li>
      </ul>
    </MyModal>
  );
}

export default ModalKegiatan;
