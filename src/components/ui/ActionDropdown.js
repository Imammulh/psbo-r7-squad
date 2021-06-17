import { DropdownButton, Dropdown } from "react-bootstrap";
import BsThreeDots from "module";

function ActionDropdown(props) {
  function handleAccepted() {
    console.log("diterima");
  }

  function handleRejected() {
    console.log("rejected");
  }

  function handleDelete() {
    console.log("Delete");
  }

  return (
    <DropdownButton
      size="sm"
      variant="secondary"
      id="dropdown-basic-button"
      title=""
    >
      <Dropdown.Item href="#/action-1" onClick={handleAccepted}>
        {props.aksi1}
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2" onClick={handleRejected}>
        {props.aksi2}
      </Dropdown.Item>
      <Dropdown.Item href="#/action-3" onClick={handleDelete}>
        {props.aksi3}
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default ActionDropdown;
