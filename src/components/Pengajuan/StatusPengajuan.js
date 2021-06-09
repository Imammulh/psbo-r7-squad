import { Card } from "react-bootstrap";
import { Button, Badge } from "react-bootstrap";
import { IoOpenOutline } from "react-icons/io5";
import classes from "./StatusPengajuan.module.css";

function StatusPengajuan(props) {
  return (
    <Card className={classes.card}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3 className={classes.title}>Title</h3>
          <p className={classes.desc}>Kategori • Date • Rank</p>
          <div
            className={`${classes.badge} ${
              props.status === "accepted" ? classes.accepted : classes.pending
            }`}
          >
            {props.text}
          </div>
        </div>
        <div>
          <Button
            variant='outline-secondary'
            style={{
              border: "1px solid #EBF0F5",
              display: "flex",
              alignItems: "center",
              fontWeight: 600,
              boxShadow:
                "0px 27px 80px rgba(4, 32, 64, 0.02), 0px 11.28px 33.4221px rgba(4, 32, 64, 0.0122451), 0px 6.0308px 17.869px rgba(4, 32, 64, 0.0103394), 0px 3.38082px 10.0172px rgba(4, 32, 64, 0.00983385), 0px 1.79553px 5.32008px rgba(4, 32, 64, 0.00934265), 0px 0.747159px 2.21381px rgba(4, 32, 64, 0.00749322)",
            }}
          >
            <IoOpenOutline />
            <span className={classes.status}> Open</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default StatusPengajuan;
