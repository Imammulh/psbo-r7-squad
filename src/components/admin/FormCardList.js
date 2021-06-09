import FormCardItem from "./FormCardItem";
import { Row, Col } from "react-bootstrap";

function FormCardList() {
  return (
    <Row className="mt-5">
      <Col>
        <FormCardItem
          link="/form-insentif-nasional"
          title="Form Insentif Lomba Nasional"
          status="Menerima Respon"
          background="badge bg-success"
        />
      </Col>
      <Col>
        <FormCardItem
          link="/form-insentif-internasional"
          title="Form Insentif Lomba Internasional"
          status="Menerima Respon"
          background="badge bg-success"
        />
      </Col>
    </Row>
  );
}

export default FormCardList;
