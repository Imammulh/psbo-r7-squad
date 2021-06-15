import PengajuanList from "../../components/Pengajuan/PengajuanList";
import UserLayout from "../../components/layout/User/UserLayout";
import LacakPengajuan from "../../components/Pengajuan/LacakPengajuan";

function Dashboard() {
  return (
    <UserLayout>
      <PengajuanList pengajuan={[1, 3, 0]} />
      <LacakPengajuan />
    </UserLayout>
  );
}

export default Dashboard;
