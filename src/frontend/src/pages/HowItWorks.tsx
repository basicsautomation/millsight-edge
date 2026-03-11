import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Monitor, Server, Wifi } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Cpu,
    title: "PLC Collects Machine Data",
    desc: "The Programmable Logic Controller (PLC) installed inside the machine continuously collects operational data — motor speeds, temperatures, production counts, energy values, and machine states.",
    detail:
      "PLCs are the brain of modern industrial machines. They control and monitor every aspect of machine operation, recording data in real-time registers.",
  },
  {
    num: "02",
    icon: Server,
    title: "MillSight EDGE Reads PLC Data",
    desc: "MillSight EDGE is installed inside the PLC control panel and connects to the PLC via Ethernet communication. It continuously reads machine data without interfering with machine operations.",
    detail:
      "Communication happens via standard industrial protocols (Modbus TCP, S7, EtherNet/IP). MillSight EDGE acts as a passive listener — it reads data without affecting machine control.",
  },
  {
    num: "03",
    icon: Monitor,
    title: "Dashboards Are Generated",
    desc: "The collected data is processed and displayed as clear, visual dashboards using Node-RED. Production counts, machine status, energy readings and alarms are shown in real time.",
    detail:
      "Node-RED dashboards are web-based and accessible from any standard browser. No special software installation is required on monitoring computers.",
  },
  {
    num: "04",
    icon: Wifi,
    title: "Monitor From Office or Remotely",
    desc: "Mill owners and managers can view machine status and production data from their office computers on the factory network. With the Cloud Package, monitoring is available from anywhere.",
    detail:
      "Remote access enables plant owners to check production status from home, while traveling, or from multiple locations simultaneously.",
  },
];

const flowNodes = [
  { label: "PLC", sub: "Machine Controller", icon: Cpu },
  { label: "MillSight EDGE", sub: "Monitoring Device", icon: Server },
  { label: "Dashboard", sub: "Node-RED Visualization", icon: Monitor },
  { label: "Office / Mobile", sub: "Remote View", icon: Wifi },
];

export default function HowItWorks() {
  return (
    <div>
      <div className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            How MillSight EDGE Works
          </h1>
          <p className="max-w-xl" style={{ color: "oklch(0.7 0.03 245)" }}>
            A simple 4-step process to bring digital monitoring to your mill.
          </p>
        </div>
      </div>

      {/* Flow Diagram */}
      <section className="py-12 section-offwhite border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-foreground text-center mb-8">
            System Flow Diagram
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {flowNodes.map((node, i) => (
              <div key={node.label} className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <div
                    className="w-20 h-20 rounded-lg flex flex-col items-center justify-center border-2 shadow-sm"
                    style={{
                      background: "white",
                      borderColor: "oklch(0.45 0.18 245)",
                    }}
                  >
                    <node.icon
                      className="w-7 h-7 mb-1"
                      style={{ color: "oklch(0.45 0.18 245)" }}
                    />
                    <span
                      className="text-[10px] font-bold text-center leading-tight px-1"
                      style={{ color: "oklch(0.45 0.18 245)" }}
                    >
                      {node.label}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 text-center max-w-[80px]">
                    {node.sub}
                  </span>
                </div>
                {i < flowNodes.length - 1 && (
                  <div className="flex items-center mb-4">
                    <div
                      className="w-8 h-0.5"
                      style={{ background: "oklch(0.45 0.18 245 / 0.4)" }}
                    />
                    <ArrowRight
                      className="w-4 h-4"
                      style={{ color: "oklch(0.45 0.18 245)" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
                    style={{ background: "oklch(0.45 0.18 245)" }}
                  >
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="w-0.5 flex-1 mt-3"
                      style={{ background: "oklch(0.45 0.18 245 / 0.2)" }}
                    />
                  )}
                </div>
                <div className="pb-8 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="feature-icon-wrap w-10 h-10">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3">{step.desc}</p>
                  <div
                    className="p-4 rounded-lg text-sm"
                    style={{
                      background: "oklch(0.96 0.01 245)",
                      borderLeft: "3px solid oklch(0.45 0.18 245)",
                    }}
                  >
                    <p style={{ color: "oklch(0.45 0.02 255)" }}>
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-navy py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            See It in Action
          </h2>
          <p className="mb-6" style={{ color: "oklch(0.7 0.03 245)" }}>
            Request a live demonstration for your mill.
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
