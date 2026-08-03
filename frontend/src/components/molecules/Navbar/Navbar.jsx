import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../../atoms/Container/index.js";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "Home", to: "/" },
    { label: "Login", to: "/login" },
    { label: "Signup", to: "/signup" },
  ];

  return (
    <header className="w-full border-b border-slate-800 bg-slate-950">
      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="text-lg font-semibold tracking-tight text-slate-100">
          DSA Quest
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm text-slate-300 hover:text-slate-100 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <button type="button" onClick={() => setIsOpen((prev) => !prev)} className="md:hidden text-slate-300 hover:text-slate-100" aria-label="Toggle navigation menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <Container className="flex flex-col gap-4 py-4">
            {links.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)} className="text-sm text-slate-300 hover:text-slate-100">
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}

export default Navbar;