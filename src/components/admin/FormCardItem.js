import MyCard from "../UI/MyCard";
import { Badge } from "react-bootstrap";
import classes from "./FormCardItem.module.css";

function FormCardItem(props) {
  return (
    <a className={classes.a} href={props.link}>
      <MyCard>
        <h3 className={classes.title}>{props.title}</h3>
        <Badge className={props.background}>{props.status}</Badge>
      </MyCard>
    </a>
  );
}

export default FormCardItem;
