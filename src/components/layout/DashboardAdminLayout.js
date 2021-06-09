import { Container } from "react-bootstrap";
import NavDashboardAdmin from "../ui/NavDashboardAdmin";

function DashboardAdminLayout(props) {
  return (
    <div>
      <NavDashboardAdmin />
      <Container>
        <main>{props.children}</main>
      </Container>
    </div>
  );
}

export default DashboardAdminLayout;
