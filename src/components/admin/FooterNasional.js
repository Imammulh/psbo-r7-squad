import {
  Button,
  Row,
  Col,
  Tabs,
  Tab,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import MyNasionalTable from "../ui/MyNasionalTable";
import classes from "./FooterNasional.module.css";

function FooterNasional() {
  return (
    <div>
      <Row>
        <Col lg="4" className="ml-auto">
          <InputGroup className="mb-3">
            <FormControl placeholder="Cari dengan NIM/nama" type="text" />
            <Button
              variant="primary"
              type="submit"
              className={classes.searchButton}
              id="basic-addon2"
            >
              <BsSearch />
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Tabs variant="pills" id="uncontrolled-tab-example">
        <Tab eventKey="pending" title="Pending">
          <MyNasionalTable />
        </Tab>
        <Tab eventKey="diterima" title="Diterima">
          <MyNasionalTable />
        </Tab>
        <Tab eventKey="ditolak" title="Ditolak">
          <MyNasionalTable />
        </Tab>
        <Tab eventKey="semua" title="Lihat Semua">
          <MyNasionalTable />
        </Tab>
      </Tabs>
    </div>
  );
}

export default FooterNasional;
