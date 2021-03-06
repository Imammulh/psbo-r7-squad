import PengajuanList from "../../components/Pengajuan/PengajuanList";
import DashboardAdminLayout from "../../components/layout/DashboardAdminLayout";
import FormCardList from "../../components/admin/FormCardList";
import { Container } from "react-bootstrap";

function DashboardAdmin() {
  return (
    <DashboardAdminLayout>
      <Container className="mt-5">
        <PengajuanList pengajuan={[1, 3, 0]} admin={true} />
      </Container>
      <FormCardList />
    </DashboardAdminLayout>
  );
}

export default DashboardAdmin;
