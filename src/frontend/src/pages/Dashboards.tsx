import { Activity, BarChart3, Bell, Clock, Zap } from "lucide-react";

const dashboards = [
  {
    icon: BarChart3,
    title: "Production Monitoring Dashboard",
    desc: "Track real-time production output including batch counts, throughput rates, shift totals and production efficiency. Compare actual output against production targets with visual gauges and trend charts.",
    metrics: [
      "Hourly production rate",
      "Shift total count",
      "Production efficiency %",
      "Batch tracking",
    ],
    color: "oklch(0.45 0.18 245)",
  },
  {
    icon: Activity,
    title: "Machine Status Dashboard",
    desc: "Monitor real-time operating status of all machines in the plant — running, idle, fault, or maintenance. View individual machine parameters and quickly identify any operational issues.",
    metrics: [
      "Machine run/stop status",
      "Motor current readings",
      "Speed & load values",
      "Fault code display",
    ],
    color: "oklch(0.55 0.18 200)",
  },
  {
    icon: Zap,
    title: "Energy Consumption Dashboard",
    desc: "Visualize energy consumption patterns across all machines and production lines. Identify high-consumption periods, track energy costs and optimize power usage for cost savings.",
    metrics: [
      "Live kW consumption",
      "kWh totals per shift",
      "Energy cost tracking",
      "Peak demand alerts",
    ],
    color: "oklch(0.65 0.18 60)",
  },
  {
    icon: Bell,
    title: "Alarm Monitoring Screen",
    desc: "Centralized alarm display showing active faults, warnings, and historical alarm logs. Priority-coded alarm list with timestamps and acknowledgement tracking for maintenance teams.",
    metrics: [
      "Active alarm list",
      "Alarm priority levels",
      "Fault history log",
      "Acknowledgement status",
    ],
    color: "oklch(0.55 0.22 25)",
  },
  {
    icon: Clock,
    title: "Machine Utilization Dashboard",
    desc: "Analyze machine uptime, downtime, and utilization efficiency over time. Identify bottlenecks, plan preventive maintenance, and improve overall equipment effectiveness (OEE).",
    metrics: [
      "Uptime percentage",
      "Downtime analysis",
      "OEE calculation",
      "Utilization trends",
    ],
    color: "oklch(0.55 0.18 145)",
  },
];

export default function Dashboards() {
  return (
    <div>
      <div className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            Monitoring Dashboards
          </h1>
          <p className="max-w-xl" style={{ color: "oklch(0.7 0.03 245)" }}>
            Real-time visualization screens tailored for mill operations.
          </p>
        </div>
      </div>

      {/* Main Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-lg border border-border max-w-4xl mx-auto">
            <img
              src="/assets/generated/dashboard-production.dim_900x600.jpg"
              alt="Production Monitoring Dashboard"
              className="w-full object-cover"
            />
            <div className="p-4" style={{ background: "oklch(0.12 0.04 255)" }}>
              <p
                className="text-sm font-semibold"
                style={{ color: "oklch(0.75 0.14 240)" }}
              >
                MillSight EDGE — Node-RED Industrial Dashboard Example
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Cards */}
      <section className="py-16 section-offwhite">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            Available Dashboard Views
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboards.map((dash) => (
              <div
                key={dash.title}
                className="rounded-lg overflow-hidden border border-border shadow-xs transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                style={{ background: "oklch(0.12 0.04 255)" }}
              >
                {/* Card header */}
                <div
                  className="px-5 py-4 border-b"
                  style={{ borderColor: "oklch(0.22 0.05 255)" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                      style={{ background: `${dash.color}22` }}
                    >
                      <dash.icon
                        className="w-5 h-5"
                        style={{ color: dash.color }}
                      />
                    </div>
                    <h3
                      className="font-bold text-sm leading-tight"
                      style={{ color: "oklch(0.92 0.01 245)" }}
                    >
                      {dash.title}
                    </h3>
                  </div>
                </div>
                {/* Card body */}
                <div className="p-5">
                  <p
                    className="text-sm mb-4"
                    style={{ color: "oklch(0.6 0.02 255)" }}
                  >
                    {dash.desc}
                  </p>
                  <div className="space-y-1.5">
                    {dash.metrics.map((m) => (
                      <div
                        key={m}
                        className="flex items-center gap-2 text-xs"
                        style={{ color: "oklch(0.7 0.05 240)" }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: dash.color }}
                        />
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
