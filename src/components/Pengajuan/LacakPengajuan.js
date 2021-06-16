import MyCard from "../ui/MyCard";
import StatusPengajuan from "./StatusPengajuan";
import classes from "./Pengajuan.module.css";

function LacakPengajuan(props) {
  const data = props.data;
  console.log(props.data);
  console.log("data", data);
  return (
    <div className="mt-4">
      <MyCard>
        <h2 className={classes.header}>Lacak Pengajuan</h2>
        {data !== null && data.map((item) => <StatusPengajuan data={item} />)}
      </MyCard>
    </div>
  );
}

export default LacakPengajuan;
