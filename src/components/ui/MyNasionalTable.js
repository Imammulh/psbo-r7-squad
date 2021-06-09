import { Table } from "react-bootstrap";
import ModalAnggota from "../admin/ModalAnggota";
import ModalBukti from "../admin/ModalBukti";
import ModalKegiatan from "../admin/ModalKegiatan";
import ModalKetua from "../admin/ModalKetua";
import ActionDropdown from "./ActionDropdown";

function MyTable() {
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
            GEMASTIK 13{" "}
            <ModalKegiatan
              namaKegiatan="GEMASTIK 13"
              jenisKegiatan="Informasi Teknologi"
              skala="Nasional"
              penyelenggara="Fakultas Ilmu Komputer Universitas Indonesia"
              jumlahTim="100"
              jumlahPt="50"
              tglKegiatan="11/01/2021 - 11/02/2021"
              urlKegiatan="compfest.id"
              urlMedsos="https://www.instagram.com/compfest/"
            />
          </td>
          <td>Juara 1</td>
          <td>
            <ModalBukti
              buktiSertifikat="sertifikat_gemastik.pdf"
              buktiFoto="foto_gemastik.png"
              buktiLoa="loa_gemastik.pdf"
              buktiSuratIzin="SIK_Gemastik.pdf"
            />
          </td>
          <td>
            <div class="badge bg-secondary text-light">Pending</div>
          </td>
          <td>
            <ActionDropdown aksi1="Diterima" aksi2="Ditolak" />
          </td>
        </tr>
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
