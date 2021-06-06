import MyCard from "../UI/MyCard";
import classes from "./PengajuanItem.module.css";

function PengajuanItem(props) {
  return (
    <MyCard>
      <p className={classes.title}>{props.title}</p>
      <h2 className={classes.jumlah}>{props.jumlah}</h2>
      {props.admin && <p className={classes.bottomText}>/Mahasiswa</p>}
    </MyCard>
  );
}

export default PengajuanItem;
