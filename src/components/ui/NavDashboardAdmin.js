import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";

function NavDashboardAdmin() {
  let history = useHistory();
  const [, setUser] = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    history.push("/login-admin");
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand className="d-flex align-items-center" href="/admin-profile">
          <BsFillPersonFill className="me-2" />
          Admin
        </Navbar.Brand>
        <Nav className="ml-auto">
          <a href="/login-admin" className="btn btn-danger" onClick={handleLogout}>
            Keluar
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavDashboardAdmin;
