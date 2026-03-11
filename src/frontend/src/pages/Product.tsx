import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Easy installation inside PLC control panel",
  "Works with existing PLC systems without modification",
  "Real-time monitoring dashboards via Node-RED",
  "Remote monitoring option available",
  "Affordable alternative to large SCADA systems",
];

const specs = [
  { label: "Communication", value: "Ethernet (TCP/IP)" },
  {
    label: "PLC Compatibility",
    value: "Siemens, Allen Bradley, Mitsubishi, Delta & others",
  },
  { label: "Dashboard Platform", value: "Node-RED" },
  { label: "Installation", value: "Inside PLC control panel" },
  { label: "Power Supply", value: "24V DC (Panel power)" },
  { label: "Access", value: "Local network & Remote (Cloud package)" },
  { label: "Alerts", value: "Email, Dashboard alarms" },
  { label: "Data Storage", value: "Local & Cloud (optional)" },
];

export default function Product() {
  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container mx-auto px-4">
          <div
            className="inline-block text-xs font-semibold px-3 py-1 rounded mb-4"
            style={{
              background: "oklch(0.45 0.18 245 / 0.2)",
              color: "oklch(0.75 0.14 240)",
            }}
          >
            Industrial IoT Device
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            MillSight EDGE
          </h1>
          <p className="max-w-xl" style={{ color: "oklch(0.7 0.03 245)" }}>
            Smart industrial monitoring device installed inside the PLC control
            panel.
          </p>
        </div>
      </div>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/generated/millsight-edge-device.dim_800x600.jpg"
                alt="MillSight EDGE Device"
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ border: "1px solid oklch(0.88 0.015 245)" }}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                What is MillSight EDGE?
              </h2>
              <p className="text-muted-foreground mb-4">
                MillSight EDGE is a smart industrial monitoring device installed
                inside the PLC control panel. The device communicates with the
                PLC system and reads machine data through Ethernet
                communication.
              </p>
              <p className="text-muted-foreground mb-4">
                Using Node-RED dashboards, the system converts machine data into
                clear and easy-to-understand monitoring dashboards. Mill owners
                and managers can view production status, machine health, energy
                usage and alarms from any computer on the factory network.
              </p>
              <p className="text-muted-foreground mb-6">
                MillSight EDGE works alongside existing PLC or SCADA systems
                without disturbing current machine operations — a non-invasive,
                plug-and-monitor solution.
              </p>
              <div className="flex gap-3">
                <Link to="/contact" search={{ demo: "true" }}>
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    Request Demo <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/product-options">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    View Packages
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 section-offwhite">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Key Highlights
          </h2>
          <div className="max-w-2xl mx-auto">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 mb-3 bg-white rounded-lg border border-border"
              >
                <CheckCircle2
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(0.45 0.18 245)" }}
                />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Technical Specifications
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="rounded-lg overflow-hidden border border-border">
              {specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-2 ${i % 2 === 0 ? "bg-muted/30" : "bg-white"}`}
                >
                  <div className="px-5 py-3.5 font-semibold text-sm text-foreground border-r border-border">
                    {spec.label}
                  </div>
                  <div className="px-5 py-3.5 text-sm text-muted-foreground">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
