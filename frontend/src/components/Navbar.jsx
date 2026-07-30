import { Link } from "react-router-dom";

// Minimal navbar - logo + core navigation links only.
// No auth-aware logic yet, no styling beyond basic Tailwind utilities.
function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <Link to="/" className="text-xl font-bold text-gray-800">
        DSA Quest
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/login" className="text-gray-600 hover:text-gray-900">
          Login
        </Link>
        <Link to="/signup" className="text-gray-600 hover:text-gray-900">
          Signup
        </Link>
        <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
