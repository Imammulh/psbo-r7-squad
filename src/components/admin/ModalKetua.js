import MyModal from "../ui/MyModal";

function ModalKetua(props) {
  return (
    <MyModal title="Data Ketua">
      <ul>
        <li>
          <label>Nama Ketua:</label>
          <p>{props.namaKetua}</p>
        </li>
        <li>
          <label>NIM Ketua:</label>
          <p>{props.nim}</p>
        </li>
        <li>
          <label>Fakultas:</label>
          <p>{props.fakultas}</p>
        </li>
        <li>
          <label>Departemen:</label>
          <p>{props.departemen}</p>
        </li>
        <li>
          <label>Nomor Handphone:</label>
          <p>{props.noHp}</p>
        </li>
        <li>
          <label>Nomor Rekening:</label>
          <p>{props.noRek}</p>
        </li>
        <li>
          <label>Jenis Bank:</label>
          <p>{props.bank}</p>
        </li>
      </ul>
    </MyModal>
  );
}

export default ModalKetua;
