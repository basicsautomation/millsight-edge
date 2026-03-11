import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Handshake } from "lucide-react";

const partnerTypes = [
  {
    icon: "🏭",
    title: "Control Panel Manufacturers",
    desc: "Add MillSight EDGE as a smart monitoring option to your control panels. Offer customers built-in digital monitoring capability from day one.",
  },
  {
    icon: "⚙️",
    title: "Automation Integrators",
    desc: "Include MillSight EDGE in your automation projects for mill clients. Provide complete end-to-end solutions that include monitoring alongside control systems.",
  },
  {
    icon: "🔧",
    title: "Machine Builders",
    desc: "Integrate MillSight EDGE into machines at the manufacturing stage. Offer buyers the advantage of built-in production and health monitoring.",
  },
];

const benefits = [
  "Add smart monitoring capabilities to your machines or panels",
  "Offer modern digital monitoring solutions to your customers",
  "Create new revenue opportunities and service offerings",
  "Differentiate your products with built-in IoT monitoring",
  "Technical support and integration assistance provided",
  "Flexible partnership models to suit your business",
];

const steps = [
  {
    num: "1",
    title: "Enquire",
    desc: "Fill out the partnership enquiry form with your business details.",
  },
  {
    num: "2",
    title: "Discuss",
    desc: "We'll arrange a call to understand your business and requirements.",
  },
  {
    num: "3",
    title: "Evaluate",
    desc: "Review our product, technical specs, and partnership structure.",
  },
  {
    num: "4",
    title: "Partner",
    desc: "Agree on terms and begin offering MillSight EDGE to your customers.",
  },
];

export default function Partner() {
  return (
    <div>
      <div className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            Partner With Us
          </h1>
          <p className="max-w-xl" style={{ color: "oklch(0.7 0.03 245)" }}>
            Grow your business by offering smart monitoring solutions to your
            customers.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Handshake
              className="w-12 h-12 mx-auto mb-4"
              style={{ color: "oklch(0.45 0.18 245)" }}
            />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              We Welcome Collaboration With Industry Partners
            </h2>
            <p className="text-muted-foreground">
              MillSight EDGE is designed to be easily integrated into existing
              products and services. We partner with businesses who want to add
              digital monitoring value to their offerings.
            </p>
          </div>

          {/* Partner Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {partnerTypes.map((pt) => (
              <div
                key={pt.title}
                className="industrial-card p-6 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{pt.icon}</div>
                <h3 className="font-bold text-base mb-2 text-foreground">
                  {pt.title}
                </h3>
                <p className="text-sm text-muted-foreground">{pt.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                Partnership Benefits
              </h3>
              <div className="space-y-3">
                {benefits.map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-3 p-3 rounded-lg"
                    style={{
                      background: "oklch(0.45 0.18 245 / 0.05)",
                      border: "1px solid oklch(0.45 0.18 245 / 0.12)",
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
            </div>

            {/* Process */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                How to Partner
              </h3>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
                      style={{ background: "oklch(0.45 0.18 245)" }}
                    >
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-navy py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Partner?
          </h2>
          <p className="mb-6" style={{ color: "oklch(0.7 0.03 245)" }}>
            Send us a partnership enquiry and we&apos;ll get back to you.
          </p>
          <Link to="/contact">
            <Button className="bg-primary text-white hover:bg-primary/90 font-bold px-8">
              Enquire About Partnership <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
