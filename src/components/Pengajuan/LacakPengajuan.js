import MyCard from "../ui/MyCard";
import StatusPengajuan from "./StatusPengajuan";
import classes from "./StatusPengajuan.module.css";

function LacakPengajuan() {
  return (
    <div className="mt-4">
      <MyCard>
        <h2 className={classes.header}>Lacak Pengajuan</h2>
        <StatusPengajuan status="accepted" text="Diterima" />
      </MyCard>
    </div>
  );
}

export default LacakPengajuan;
