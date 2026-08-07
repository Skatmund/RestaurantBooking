import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-orange-600"
        >
          TableEase
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-gray-700 font-medium">

          <Link
            to="/"
            className="hover:text-orange-600 transition"
          >
            Home
          </Link>

          <Link
            to="/menu"
            className="hover:text-orange-600 transition"
          >
            Menu
          </Link>

          <Link
            to="/about"
            className="hover:text-orange-600 transition"
          >
            About
          </Link>

          <Link
            to="/reservation"
            className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition"
          >
            Reserve
          </Link>

          <Link
            to="/admin"
            className="hover:text-orange-600 transition"
          >
            Staff
          </Link>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;