import { Form, Button, Container } from 'react-bootstrap';
import SecondaryButton from '../../components/Button';
import styles from "./LoginAdmin.Module.css"; 

function loginAdmin() {
    return (
        <Container className={styles.container}>
        <h1>Log In Admin</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Masukkan username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Masukkan password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Tampilkan password" />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                    Masuk
                </Button>
                <SecondaryButton>This is secondary button</SecondaryButton>
            </div>
        </Form>
        </Container>
    );
};

export default loginAdmin;