import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import StatsCards from "../../components/dashboard/StatsCards";
import RecentReservations from "../../components/dashboard/RecentReservations";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8">
          <StatsCards />

          <div className="mt-8">
            <RecentReservations />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;