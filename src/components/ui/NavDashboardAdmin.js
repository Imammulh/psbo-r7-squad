import { Navbar, Nav, Container, Button } from "react-bootstrap";

function NavDashboardAdmin() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/admin-profile">Admin</Navbar.Brand>
        <Nav className="ml-auto">
          <Button className="btn btn-danger">Keluar</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavDashboardAdmin;
