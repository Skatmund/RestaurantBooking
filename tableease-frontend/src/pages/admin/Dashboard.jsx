import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import StatsCards from "../../components/dashboard/StatsCards";
import RecentReservations from "../../components/dashboard/RecentReservations";
import { useState } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleLogout = async () => {
    const token = localStorage.getItem("staffToken");

    try {
      await fetch("http://127.0.0.1:8000/api/logout", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Remove authentication information
      localStorage.removeItem("staffToken");
      localStorage.removeItem("staffUser");

      // Return to login
      navigate("/admin/login");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Topbar
          onLogout={handleLogout}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        <main className="p-8">

          <StatsCards />

          <RecentReservations
            searchTerm={searchTerm}
            statusFilter={statusFilter}
          />

        </main>

      </div>

    </div>
  );
}

export default Dashboard;