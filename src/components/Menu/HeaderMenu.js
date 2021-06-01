import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';
import './Menu.css';

const { Header } = Layout;

function HeaderMenu() {
  return (
    <Header className="header">
      <h1>Sistem Informasi Lomba</h1>
      <Button type="danger" size="medium">
        <Link to="/login">Keluar</Link>
      </Button>
    </Header>
  );
}

export default HeaderMenu;
