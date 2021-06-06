import PengajuanList from "../../components/Pengajuan/PengajuanList";
import LacakPengajuan from "../../components/Pengajuan/LacakPengajuan";

function Dashboard() {
  return (
    <div>
      <PengajuanList pengajuan={[1, 3, 0]} />
      <LacakPengajuan />
    </div>
  );
}

export default Dashboard;
