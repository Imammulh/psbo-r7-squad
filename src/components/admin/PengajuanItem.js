import MyCard from "../ui/MyCard";
import classes from "./PengajuanItem.module.css";

function PengajuanItem(props) {
  return (
    <MyCard>
      <p className={classes.title}>{props.title}</p>
      <h2 className={classes.jumlah}>{props.jumlah}</h2>
      <p className={classes.bottomText}>/Mahasiswa</p>
    </MyCard>
  );
}

export default PengajuanItem;
