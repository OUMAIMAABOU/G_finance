import LayoutDashboard from "../../Component/Comptable/Dashboard/LayoutDashboard";
import LayoutTable from "../../Component/Comptable/Dashboard/LayoutTable";
import Orders from "../../Component/Comptable/Employer/Orders";

export default function Categorie() {
  return (
    <>
      <LayoutDashboard>
        <LayoutTable>
          <Orders />
        </LayoutTable>
      </LayoutDashboard>
    </>
  );
}
