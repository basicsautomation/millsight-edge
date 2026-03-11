import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const solutions = [
  {
    emoji: "🌾",
    title: "Rice Mills",
    desc: "Comprehensive monitoring for all stages of rice milling operations.",
    machines: [
      "Paddy intake and pre-cleaning",
      "De-husking machines",
      "Paddy separators",
      "Whitening and polishing units",
      "Conveyors and elevators",
      "Grading and sorting machines",
    ],
    benefits: [
      "Monitor machine run times and faults",
      "Track paddy intake and milled output",
      "Energy monitoring per machine",
      "Reduce downtime with early warnings",
    ],
  },
  {
    emoji: "⚙️",
    title: "Flour Mills",
    desc: "End-to-end monitoring for wheat and flour processing plants.",
    machines: [
      "Roller mills and grinders",
      "Sifters and plansichters",
      "Conveyors and bucket elevators",
      "Purifiers and centrifugal machines",
      "Mixers and blenders",
      "Packaging lines",
    ],
    benefits: [
      "Track grinding efficiency",
      "Monitor flour output per shift",
      "Detect overload conditions early",
      "Energy consumption per process",
    ],
  },
  {
    emoji: "🏭",
    title: "Dal Mills",
    desc: "Integrated monitoring solutions for pulse processing and dal milling.",
    machines: [
      "Cleaning and grading machines",
      "Dal splitting machines",
      "Dehusking machines",
      "Polishing drums",
      "Conveyors and elevators",
      "Packing machines",
    ],
    benefits: [
      "Monitor production throughput",
      "Track machine utilization rates",
      "Alarm monitoring for faults",
      "Remote viewing for plant owners",
    ],
  },
  {
    emoji: "👔",
    title: "Mill Owners & Managers",
    desc: "Complete plant visibility for owners who want data-driven operations.",
    machines: [
      "Multi-machine dashboard view",
      "Production summary reports",
      "Energy cost tracking",
      "Shift performance comparison",
      "Remote access from anywhere",
      "Multi-location monitoring",
    ],
    benefits: [
      "Full plant visibility at a glance",
      "Make data-driven decisions",
      "Monitor from home or office",
      "Reduce operational surprises",
    ],
  },
];

export default function Solutions() {
  return (
    <div>
      <div className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            Industry Solutions
          </h1>
          <p className="max-w-xl" style={{ color: "oklch(0.7 0.03 245)" }}>
            MillSight EDGE is designed to work seamlessly across all types of
            mill operations.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {solutions.map((sol, i) => (
              <div
                key={sol.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 rounded-xl border border-border ${i % 2 === 0 ? "bg-white" : "section-offwhite"}`}
              >
                <div>
                  <div className="text-5xl mb-4">{sol.emoji}</div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    {sol.title}
                  </h2>
                  <p className="text-muted-foreground mb-5">{sol.desc}</p>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-3">
                    Machines Monitored
                  </h4>
                  <ul className="space-y-1.5">
                    {sol.machines.map((m) => (
                      <li
                        key={m}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "oklch(0.45 0.18 245)" }}
                        />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
                    Key Benefits
                  </h4>
                  <div className="space-y-3">
                    {sol.benefits.map((b) => (
                      <div
                        key={b}
                        className="flex items-start gap-3 p-3 rounded-lg"
                        style={{
                          background: "oklch(0.45 0.18 245 / 0.06)",
                          border: "1px solid oklch(0.45 0.18 245 / 0.15)",
                        }}
                      >
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: "oklch(0.45 0.18 245)" }}
                        />
                        <span className="text-sm font-medium text-foreground">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link to="/contact" search={{ demo: "true" }}>
                      <Button className="bg-primary text-white hover:bg-primary/90">
                        Request Demo for {sol.title}{" "}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
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
