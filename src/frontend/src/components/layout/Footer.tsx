import { Link } from "@tanstack/react-router";
import { Cpu, Mail, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Product", path: "/product" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Features", path: "/features" },
  { label: "Dashboards", path: "/dashboards" },
  { label: "Solutions", path: "/solutions" },
  { label: "Product Options", path: "/product-options" },
  { label: "About", path: "/about" },
  { label: "Partner With Us", path: "/partner" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-navy border-t border-navy-mid">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded bg-primary flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">
                  MillSight{" "}
                  <span style={{ color: "oklch(0.75 0.14 240)" }}>EDGE</span>
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(0.55 0.02 255)" }}
                >
                  by Basics Automation
                </div>
              </div>
            </div>
            <p
              className="text-sm mb-4"
              style={{ color: "oklch(0.6 0.02 255)" }}
            >
              Industrial IoT Monitoring Solutions for Rice, Flour &amp; Dal
              Mills.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:basics.automation@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                style={{ color: "oklch(0.6 0.02 255)" }}
              >
                <Mail
                  className="w-4 h-4"
                  style={{ color: "oklch(0.45 0.18 245)" }}
                />
                basics.automation@gmail.com
              </a>
              <a
                href="https://wa.me/message/BASICS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: "oklch(0.7 0.17 145)" }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: "oklch(0.6 0.02 255)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-light flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: "oklch(0.45 0.02 255)" }}>
            &copy; {year} Basics Automation. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "oklch(0.45 0.02 255)" }}>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
