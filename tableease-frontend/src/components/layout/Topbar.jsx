import { Bell, Search, UserCircle } from "lucide-react";

function Topbar() {
  return (
    <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">

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
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Notification */}
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Bell size={22} />
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <UserCircle size={36} className="text-orange-600" />

          <div>
            <p className="font-semibold">Restaurant Admin</p>
            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Topbar;