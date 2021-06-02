import PengajuanList from "../../components/admin/PengajuanList";
import DashboardAdminLayout from "../../components/layout/DashboardAdminLayout";
import FormCardList from "../../components/admin/FormCardList";

function DashboardAdmin() {
  return (
    <DashboardAdminLayout>
      <PengajuanList />
      <FormCardList />
    </DashboardAdminLayout>
  );
}

export default DashboardAdmin;
