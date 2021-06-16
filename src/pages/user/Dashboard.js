import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import PengajuanList from "../../components/Pengajuan/PengajuanList";
import LacakPengajuan from "../../components/Pengajuan/LacakPengajuan";
import UserLayout from "../../components/layout/User/UserLayout";
import axios from 'axios';

function Dashboard() {
  const [pengajuan, setPengajuan] = useState(null);
  const [user] = useContext(UserContext);

  useEffect(() => {
    if (pengajuan == null) {
      axios.get(`http://localhost:4000/api/employee`,{headers: { "Authorization": `Bearer ${user.token}` }})
      .then((res) => {
        setPengajuan(res.data.response);
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
