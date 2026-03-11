import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  DollarSign,
  Monitor,
  Wifi,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Machine Monitoring",
    desc: "View live machine status, operational parameters, motor currents, temperatures, and production counts in real time. Instantly know which machines are running, idle, or in fault state.",
    points: [
      "Live machine status display",
      "Motor and drive parameters",
      "Production counter tracking",
      "Fault status indicators",
    ],
  },
  {
    icon: Zap,
    title: "Energy Monitoring",
    desc: "Track energy consumption for individual machines and the entire plant. Identify energy-intensive processes and optimize power usage to reduce electricity costs.",
    points: [
      "kWh consumption per machine",
      "Peak demand tracking",
      "Energy cost estimation",
      "Historical energy trends",
    ],
  },
  {
    icon: BarChart3,
    title: "Production Monitoring",
    desc: "Monitor production output, batch counts, throughput rates and shift performance. Compare actual production against targets and analyze productivity trends.",
    points: [
      "Shift production totals",
      "Hourly throughput rates",
      "Batch counter displays",
      "Production trend charts",
    ],
  },
  {
    icon: Bell,
    title: "Alarm Notifications",
    desc: "Receive immediate notifications when machines encounter faults or operational anomalies. Alarm history logs help identify recurring problems and improve maintenance planning.",
    points: [
      "Real-time alarm display",
      "Email alerts (Cloud package)",
      "Alarm history log",
      "Fault acknowledgement tracking",
    ],
  },
  {
    icon: Monitor,
    title: "Dashboard Visualization",
    desc: "Clear, intuitive web-based dashboards built with Node-RED display all critical data in easy-to-understand formats. No special software needed — just a standard web browser.",
    points: [
      "Web browser access",
      "Custom layout options",
      "Gauge and chart widgets",
      "Dark-theme industrial UI",
    ],
  },
  {
    icon: Wifi,
    title: "Remote Monitoring",
    desc: "With the Cloud Package, access your mill's monitoring dashboard from anywhere — office, home or mobile. Multi-location monitoring available for owners with multiple facilities.",
    points: [
      "Secure remote access",
      "Mobile-friendly dashboard",
      "Multi-site monitoring",
      "Cloud data backup",
    ],
  },
  {
    icon: DollarSign,
    title: "Cost Effective Solution",
    desc: "MillSight EDGE provides enterprise-grade monitoring capabilities at a fraction of the cost of traditional SCADA systems. No expensive software licenses or specialized hardware required.",
    points: [
      "Low upfront cost",
      "No software licensing fees",
      "Minimal installation time",
      "Works with existing PLC",
    ],
  },
];

export default function Features() {
  return (
    <div>
      <div className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            Features
          </h1>
          <p className="max-w-xl" style={{ color: "oklch(0.7 0.03 245)" }}>
            Everything you need to monitor your mill — production, energy,
            alarms, and more.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="industrial-card p-6 transition-all duration-200"
              >
                <div className="feature-icon-wrap mb-4">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base mb-2 text-foreground">
                  {feat.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {feat.desc}
                </p>
                <ul className="space-y-1">
                  {feat.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-xs"
                      style={{ color: "oklch(0.4 0.01 255)" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "oklch(0.45 0.18 245)" }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="mb-6" style={{ color: "oklch(0.7 0.03 245)" }}>
            Request a personalized demo for your mill.
          </p>
          <Link to="/contact" search={{ demo: "true" }}>
            <Button className="bg-primary text-white hover:bg-primary/90 font-bold px-8">
              Request Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
