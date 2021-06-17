import { Table } from "react-bootstrap";
import ModalAnggota from "../admin/ModalAnggota";
import ModalBukti from "../admin/ModalBukti";
import ModalKegiatan from "../admin/ModalKegiatan";
import ModalKetua from "../admin/ModalKetua";
import ActionDropdown from "./ActionDropdown";
import axios from "axios";
import react, { useState, useEffect, useContext, UserContext } from "react";

function MyTable() {
  const [pengajuan, setPengajuan] = useState([]);

  // const [user] = useContext(UserContext);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/employee")
      .then((res) => {
        setPengajuan(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Table striped bordered hover responsive className="mt-4">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Ketua</th>
          <th>Tanggal Input</th>
          <th>No. Rekening</th>
          <th>Anggota</th>
          <th>Nama Kegiatan</th>
          <th>Prestasi</th>
          <th>Bukti Kegiatan</th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {pengajuan.map((data) => {
          return (
            <tr>
              <td>1</td>
              <td>
                imam{" "}
                <ModalKetua
                  namaKetua="imam"
                  nim="G64180047"
                  fakultas="Fakultas Matematika dan Ilmu Pengetahuan Alam"
                  departemen="Ilmu Komputer"
                  noHp="087818407648"
                  noRek="7147678856"
                  bank="syariah"
                />
              </td>
              <td>26/05/2021, 11:59 AM</td>
              <td>7147678856 (Mandiri Syariah)</td>
              <td>
                <ModalAnggota
                  namaAnggota1={data.anggotaTim1}
                  nimAnggota1={data.nim1}
                  noHpAnggota1={data.phone1}
                  namaAnggota2={data.anggotaTim2}
                  nimAnggota2={data.nim2}
                  noHpAnggota2={data.phone2}
                />
              </td>
              <td>
                {data.namaKegiatan}{" "}
                <ModalKegiatan
                  namaKegiatan={data.namaKegiatan}
                  jenisKegiatan={data.jenisLomba}
                  skala={data.skalaKegiatan}
                  penyelenggara={data.penyelenggara}
                  jumlahTim={data.jumlahTim}
                  jumlahPt={data.jumlahUniv}
                  tglKegiatan={data.tanggalPelaksanaan}
                  urlKegiatan={data.linkWeb}
                  urlMedsos={data.linkMedsos}
                />
              </td>
              <td>{data.prestasi}</td>
              <td>
                <ModalBukti
                  buktiSertifikat={data.sertifikat}
                  buktiFoto={data.foto}
                  buktiLoa={data.loa}
                  buktiSuratIzin={data.suratIzin}
                />
              </td>
              <td>
                <div class="badge bg-secondary text-light">{data.status}</div>
              </td>
              <td>
                <ActionDropdown
                  aksi1="Diterima"
                  aksi2="Ditolak"
                  aksi3="Hapus Data"
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default MyTable;
