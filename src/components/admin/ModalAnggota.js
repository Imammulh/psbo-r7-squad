import MyModal from "../ui/MyModal";

function ModalAnggota(props) {
  return (
    <MyModal title="Data Anggota">
      <ul>
        <li>
          <label>Nama Anggota 1:</label>
          <p>{props.namaAnggota1}</p>
        </li>
        <li>
          <label>NIM Anggota 1:</label>
          <p>{props.nimAnggota1}</p>
        </li>
        <li>
          <label>Nomor Handphone Anggota 1:</label>
          <p>{props.noHpAnggota1}</p>
        </li>
        <li>
          <label>Nama Anggota 2:</label>
          <p>{props.namaAnggota2}</p>
        </li>
        <li>
          <label>NIM Anggota 2:</label>
          <p>{props.nimAnggota2}</p>
        </li>
        <li>
          <label>Nomor Handphone Anggota 2:</label>
          <p>{props.noHpAnggota2}</p>
        </li>
      </ul>
    </MyModal>
  );
}

export default ModalAnggota;
