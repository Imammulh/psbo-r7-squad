import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { message } from "antd";
import PengajuanList from "../../components/Pengajuan/PengajuanList";
import LacakPengajuan from "../../components/Pengajuan/LacakPengajuan";
import UserLayout from "../../components/layout/User/UserLayout";
import axios from "axios";

function Dashboard() {
  let history = useHistory();
  const [pengajuan, setPengajuan] = useState(null);
  const [user] = useContext(UserContext);

  const date = "2021-06-16T06:24:43.425Z";

  const timeOut = () => {
    message.error("Sesi anda telah berakhir, silahkan login kembali!", 1).then(() => window.location.reload());
  };

  useEffect(() => {
    if (pengajuan == null) {
      axios.get(`https://radiant-cliffs-45593.herokuapp.com/api/employee/${user.id}`, { headers: { Authorization: `Bearer ${user.token}` } }).then((res) => {
        if (res.data.message === "Auth fail") {
          console.log("broken");
          localStorage.clear();
          timeOut();
        } else {
          setPengajuan(res.data.data);
        }
      });
    }
  }, [pengajuan, setPengajuan]);

  return (
    <UserLayout>
      <PengajuanList pengajuan={[1, 3, 0]} />
      <LacakPengajuan data={pengajuan} />
    </UserLayout>
  );
}

export default Dashboard;
