import { Card } from "react-bootstrap";
import classes from "./MyCard.module.css";

function MyCard(props) {
  return (
    <Card className={classes.myCard}>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
}

export default MyCard;
