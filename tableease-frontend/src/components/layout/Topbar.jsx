import { Bell, Search, UserCircle, LogOut } from "lucide-react";

function Topbar({ onLogout, searchTerm, setSearchTerm, statusFilter, setStatusFilter}) {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 border-b">

      {/* Left Side */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 text-sm">
          Welcome back, Admin
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          
        </div>

        {/* Notification */}
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Bell size={22} />
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <UserCircle size={36} className="text-orange-600" />

          <div>
            <p className="font-semibold">
              Restaurant Admin
            </p>

            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>

      </div>
    </header>
  );
}

export default Topbar;