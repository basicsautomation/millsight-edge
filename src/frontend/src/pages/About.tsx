import { CheckCircle2, Target } from "lucide-react";

const expertise = [
  "PLC programming (Siemens, Allen Bradley, Mitsubishi, Delta)",
  "SCADA system design and implementation",
  "Industrial machine automation and control",
  "Machine monitoring solutions development",
  "Node-RED and industrial IoT systems",
  "Control panel design and commissioning",
];

const values = [
  {
    title: "Simple",
    desc: "We design systems that mill operators can actually understand and use.",
  },
  {
    title: "Affordable",
    desc: "Enterprise-grade monitoring at a price point accessible to small and medium mills.",
  },
  {
    title: "Reliable",
    desc: "Industrial-grade hardware designed to operate continuously in harsh environments.",
  },
  {
    title: "Practical",
    desc: "Focused on real-world mill problems, not unnecessary complexity.",
  },
];

export default function About() {
  return (
    <div>
      <div className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            About Basics Automation
          </h1>
          <p className="max-w-xl" style={{ color: "oklch(0.7 0.03 245)" }}>
            Industrial automation expertise focused on practical, affordable
            solutions.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/generated/about-engineer.dim_800x500.jpg"
                alt="Basics Automation Engineer"
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ border: "1px solid oklch(0.88 0.015 245)" }}
              />
            </div>
            <div>
              <div
                className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded mb-5"
                style={{
                  background: "oklch(0.45 0.18 245 / 0.1)",
                  color: "oklch(0.45 0.18 245)",
                }}
              >
                Our Story
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Built by an Industry Expert
              </h2>
              <p className="text-muted-foreground mb-4">
                MillSight EDGE is developed by an industrial automation engineer
                with hands-on experience in PLC programming, SCADA systems,
                machine automation, and industrial monitoring solutions.
              </p>
              <p className="text-muted-foreground mb-4">
                Having worked directly in mills and processing plants, we
                understand the specific challenges mill owners and managers face
                — lack of visibility into machine performance, difficulty
                tracking production, and the high cost of traditional SCADA
                systems.
              </p>
              <p className="text-muted-foreground mb-6">
                MillSight EDGE was created to bridge this gap — bringing
                professional-grade monitoring capabilities to small and medium
                mills at an accessible price.
              </p>
              <div
                className="p-5 rounded-lg border-l-4"
                style={{
                  background: "oklch(0.96 0.01 245)",
                  borderColor: "oklch(0.45 0.18 245)",
                }}
              >
                <div className="flex items-start gap-3">
                  <Target
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.45 0.18 245)" }}
                  />
                  <div>
                    <p className="font-bold text-foreground mb-1">
                      Our Mission
                    </p>
                    <p className="text-sm text-muted-foreground">
                      To provide simple and affordable digital monitoring
                      solutions for mills and factories, empowering operators
                      with the data they need to run efficient, profitable
                      operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 section-offwhite">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg border border-border"
                >
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.45 0.18 245)" }}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {values.map((v) => (
              <div
                key={v.title}
                className="industrial-card p-6 text-center transition-all duration-200"
              >
                <h3
                  className="font-black text-xl mb-2"
                  style={{ color: "oklch(0.45 0.18 245)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
