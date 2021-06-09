import { DropdownButton, Dropdown } from "react-bootstrap";
import BsThreeDots from "module";

function ActionDropdown(props) {
  return (
    <DropdownButton
      size="sm"
      variant="secondary"
      id="dropdown-basic-button"
      title=""
    >
      <Dropdown.Item href="#/action-1">{props.aksi1}</Dropdown.Item>
      <Dropdown.Item href="#/action-2">{props.aksi2}</Dropdown.Item>
      <Dropdown.Item href="#/action-3">{props.aksi3}</Dropdown.Item>
    </DropdownButton>
  );
}

export default ActionDropdown;
