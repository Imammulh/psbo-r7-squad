import { Navbar, Nav, Container } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";

function NavDashboardAdmin() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand
          className="d-flex align-items-center"
          href="/admin-profile"
        >
          <BsFillPersonFill className="me-2" />
          Admin
        </Navbar.Brand>
        <Nav className="ml-auto">
          <a href="/login-admin" className="btn btn-danger">
            Keluar
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavDashboardAdmin;
