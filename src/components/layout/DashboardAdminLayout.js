import NavDashboardAdmin from "../ui/NavDashboardAdmin";

function DashboardAdminLayout(props) {
  return (
    <div>
      <NavDashboardAdmin />
      <main>{props.children}</main>
    </div>
  );
}

export default DashboardAdminLayout;
