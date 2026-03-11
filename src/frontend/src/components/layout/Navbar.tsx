import { Button } from "@/components/ui/button";
import { Link, useRouter } from "@tanstack/react-router";
import { Cpu, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Product", path: "/product" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Features", path: "/features" },
  { label: "Dashboards", path: "/dashboards" },
  { label: "Solutions", path: "/solutions" },
  { label: "Product Options", path: "/product-options" },
  { label: "About", path: "/about" },
  { label: "Partner", path: "/partner" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-navy border-b border-navy-mid shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded bg-primary flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-tight tracking-tight">
                MillSight{" "}
                <span
                  className="text-blue-light"
                  style={{ color: "oklch(0.75 0.14 240)" }}
                >
                  EDGE
                </span>
              </div>
              <div
                className="text-xs text-steel-light leading-tight"
                style={{ color: "oklch(0.62 0.02 255)" }}
              >
                by Basics Automation
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-ocid="nav.link"
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  currentPath === link.path
                    ? "text-white bg-navy-mid"
                    : "text-gray-300 hover:text-white hover:bg-navy-mid"
                }`}
                style={{
                  color:
                    currentPath === link.path
                      ? "white"
                      : "oklch(0.75 0.02 255)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              search={{ demo: "true" }}
              className="hidden md:block"
            >
              <Button
                data-ocid="nav.request_demo_button"
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-4"
              >
                Request Demo
              </Button>
            </Link>
            <button
              type="button"
              className="lg:hidden text-gray-300 hover:text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-mid border-t border-navy-light">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-ocid="nav.link"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 text-sm font-medium rounded transition-colors ${
                  currentPath === link.path
                    ? "bg-primary text-white"
                    : "text-gray-300 hover:bg-navy-light hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              search={{ demo: "true" }}
              onClick={() => setMobileOpen(false)}
            >
              <Button
                data-ocid="nav.request_demo_button"
                className="w-full mt-2 bg-primary text-white"
              >
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
