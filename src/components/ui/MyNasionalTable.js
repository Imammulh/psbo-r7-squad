import { Table } from "react-bootstrap";
import ModalAnggota from "../admin/ModalAnggota";
import ModalBukti from "../admin/ModalBukti";
import ModalKegiatan from "../admin/ModalKegiatan";
import ModalKetua from "../admin/ModalKetua";
import ActionDropdown from "./ActionDropdown";
import axios from "axios";
import react, { useState, useEffect, useContext, UserContext } from "react";

function MyTable() {
  const [pengajuan, setPengajuan] = useState(null);
  const [user] = useContext(UserContext);

  useEffect(() => {
    if (pengajuan == null) {
      axios
        .get(`http://localhost:4000/api/employee`, {
          headers: { Authorization: `Bearer ${user.token}` },
        })
        .then((res) => {
          setPengajuan(res.data.response);
        });
    }
  }, [pengajuan, setPengajuan]);

  // const [employees, setEmployees] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/api/employee/")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

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
        {pengajuan !== null &&
          pengajuan.map((data) => {
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
                    namaAnggota1="Faisal Wicak"
                    nimAnggota1="G64180067"
                    noHpAnggota1="087654293746"
                    namaAnggota2="Bima Aulia"
                    nimAnggota2="G64180054"
                    noHpAnggota2="087647389187"
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
                  <div class="badge bg-secondary text-light">Pending</div>
                </td>
                <td>
                  <ActionDropdown aksi1="Diterima" aksi2="Ditolak" />
                </td>
              </tr>
            );
          })}
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyTable;
