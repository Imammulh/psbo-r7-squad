import NavDashboardAdmin from "../UI/NavDashboardAdmin";

function DashboardAdminLayout(props) {
  return (
    <div>
      <NavDashboardAdmin />
      <main>{props.children}</main>
    </div>
  );
}

export default DashboardAdminLayout;
