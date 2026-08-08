import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-orange-600 text-white"
        : "text-gray-700 hover:bg-orange-100"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg p-6">

      <h1 className="text-3xl font-bold text-orange-600 mb-10">
        DineIn
      </h1>

      <nav className="space-y-3">

        <NavLink to="/dashboard" className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/dashboard/reservations" className={linkClass}>
          Reservations
        </NavLink>

        <NavLink to="/dashboard/customers" className={linkClass}>
          Customers
        </NavLink>

        <NavLink to="/dashboard/reports" className={linkClass}>
          Reports
        </NavLink>

        <NavLink to="/dashboard/settings" className={linkClass}>
          Settings
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;