import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronRight,
  Shield,
  Wifi,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    desc: "Live machine data and production status at a glance.",
  },
  {
    icon: BarChart3,
    title: "Production Insights",
    desc: "Track output, efficiency and performance trends.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    desc: "Get notified immediately when machines need attention.",
  },
  {
    icon: Wifi,
    title: "Remote Access",
    desc: "Monitor your plant from office, home or mobile.",
  },
];

const solutions = [
  {
    title: "Rice Mills",
    desc: "Monitor huskers, polishers, elevators and conveyors in real time.",
    icon: "🌾",
  },
  {
    title: "Flour Mills",
    desc: "Track grinding machines, processing lines and energy use.",
    icon: "⚙️",
  },
  {
    title: "Dal Mills",
    desc: "Monitor milling machines and entire plant operations.",
    icon: "🏭",
  },
];

const steps = [
  {
    num: "01",
    title: "PLC Collects Data",
    desc: "Machine PLC captures operational parameters.",
  },
  {
    num: "02",
    title: "EDGE Reads Data",
    desc: "MillSight EDGE reads PLC via Ethernet communication.",
  },
  {
    num: "03",
    title: "Dashboards Generated",
    desc: "Data is processed into clear visual dashboards.",
  },
  {
    num: "04",
    title: "View Anywhere",
    desc: "Access from office computer or remote device.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[80vh] flex items-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-mill-monitoring.dim_1400x700.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.08 0.04 255 / 0.92) 0%, oklch(0.12 0.06 240 / 0.85) 100%)",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{
                background: "oklch(0.45 0.18 245 / 0.15)",
                borderColor: "oklch(0.45 0.18 245 / 0.4)",
                color: "oklch(0.75 0.14 240)",
              }}
            >
              <Shield className="w-3.5 h-3.5" />
              Industrial IoT Monitoring System
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Smart Monitoring for{" "}
              <span style={{ color: "oklch(0.75 0.14 240)" }}>
                Rice, Flour &amp; Dal
              </span>{" "}
              Mills
            </h1>
            <p
              className="text-lg md:text-xl mb-4"
              style={{ color: "oklch(0.8 0.03 245)" }}
            >
              Turn your existing PLC machine data into real-time dashboards and
              production insights.
            </p>
            <p
              className="text-base mb-8"
              style={{ color: "oklch(0.68 0.03 245)" }}
            >
              MillSight EDGE is an industrial monitoring system designed for
              mills and processing plants. It connects to existing PLC control
              panels and converts machine data into simple dashboards,
              production insights and machine alerts.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" search={{ demo: "true" }}>
                <Button
                  data-ocid="home.request_demo_button"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-8 text-base"
                >
                  Request Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  data-ocid="home.contact_button"
                  size="lg"
                  variant="outline"
                  className="font-bold px-8 text-base"
                  style={{
                    borderColor: "oklch(0.75 0.1 245 / 0.5)",
                    color: "white",
                    background: "transparent",
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.45 0.18 245), oklch(0.65 0.15 200))",
          }}
        />
      </section>

      {/* Benefits Strip */}
      <section className="section-offwhite py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Why Choose MillSight EDGE?
            </h2>
            <p className="text-muted-foreground">
              Built specifically for the milling industry
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="industrial-card p-6 transition-all duration-200"
              >
                <div className="feature-icon-wrap mb-4">
                  <b.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base mb-2 text-foreground">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Industry Solutions
            </h2>
            <p className="text-muted-foreground">
              Tailored monitoring for every type of mill
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="industrial-card p-8 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <Link
                  to="/solutions"
                  className="inline-flex items-center text-sm font-semibold"
                  style={{ color: "oklch(0.45 0.18 245)" }}
                >
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/solutions">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                View All Solutions <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Brief */}
      <section className="py-16 section-offwhite">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Simple 4-step process to digitize your mill
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="bg-white border border-border rounded-lg p-6 shadow-xs h-full">
                  <div
                    className="text-3xl font-black mb-3 leading-none"
                    style={{ color: "oklch(0.45 0.18 245 / 0.2)" }}
                  >
                    {step.num}
                  </div>
                  <h3 className="font-bold text-base mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:flex absolute top-8 -right-3 z-10 items-center">
                    <ChevronRight
                      className="w-6 h-6"
                      style={{ color: "oklch(0.45 0.18 245 / 0.4)" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/how-it-works">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                See Full Details <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-navy py-16">
        <div className="container mx-auto px-4 text-center">
          <Zap
            className="w-10 h-10 mx-auto mb-4"
            style={{ color: "oklch(0.75 0.14 240)" }}
          />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Monitor Your Mill?
          </h2>
          <p
            className="mb-8 max-w-xl mx-auto"
            style={{ color: "oklch(0.7 0.03 245)" }}
          >
            Get a live demonstration of MillSight EDGE for your specific mill
            type. Our team will show you how it works with your existing PLC
            system.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" search={{ demo: "true" }}>
              <Button
                data-ocid="home.request_demo_button"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold px-10"
              >
                Request Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/product">
              <Button
                size="lg"
                variant="outline"
                style={{
                  borderColor: "oklch(0.75 0.1 245 / 0.4)",
                  color: "white",
                  background: "transparent",
                }}
                className="font-bold px-8 hover:bg-white/10"
              >
                Learn About the Product
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
