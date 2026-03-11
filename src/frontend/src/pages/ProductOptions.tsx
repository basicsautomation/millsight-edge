import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

const packages = [
  {
    name: "Basic Package",
    subtitle: "Local Monitoring",
    recommended: false,
    tagline: "Best for mills needing internal monitoring only.",
    price: "Entry-level pricing",
    features: [
      "Installed inside PLC control panel",
      "Dashboard available on factory network",
      "Accessible from office computers",
      "No internet connection required",
      "Real-time machine monitoring",
      "Production and energy dashboards",
      "Alarm monitoring screen",
      "Local data storage",
    ],
    notIncluded: [
      "Remote access from outside factory",
      "Mobile monitoring",
      "Email alerts",
      "Cloud data backup",
    ],
  },
  {
    name: "Cloud Package",
    subtitle: "Remote Monitoring",
    recommended: true,
    tagline: "Best for owners who want monitoring from anywhere.",
    price: "Advanced pricing",
    features: [
      "Everything in Basic Package",
      "Remote dashboard access (anywhere)",
      "Mobile-friendly monitoring",
      "Email alarm notifications",
      "Multi-location monitoring",
      "Cloud data storage & backup",
      "Historical data analysis",
      "Secure remote connection",
    ],
    notIncluded: [],
  },
];

export default function ProductOptions() {
  return (
    <div>
      <div className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            Product Options
          </h1>
          <p className="max-w-xl" style={{ color: "oklch(0.7 0.03 245)" }}>
            Choose the package that fits your monitoring requirements.
          </p>
        </div>
      </div>

      <section className="py-16 section-offwhite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-xl border ${
                  pkg.recommended
                    ? "border-primary shadow-lg"
                    : "border-border shadow-xs"
                } bg-white overflow-hidden relative`}
              >
                {pkg.recommended && (
                  <div className="absolute top-4 right-4">
                    <div
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: "oklch(0.45 0.18 245)" }}
                    >
                      <Star className="w-3 h-3 fill-current" />
                      Recommended
                    </div>
                  </div>
                )}
                {/* Header */}
                <div
                  className="px-6 py-5 border-b border-border"
                  style={{
                    background: pkg.recommended
                      ? "oklch(0.45 0.18 245 / 0.06)"
                      : "oklch(0.97 0.005 245)",
                  }}
                >
                  <h2 className="text-xl font-black text-foreground">
                    {pkg.name}
                  </h2>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "oklch(0.45 0.18 245)" }}
                  >
                    {pkg.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 italic">
                    {pkg.tagline}
                  </p>
                </div>
                {/* Features */}
                <div className="p-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                    Included Features
                  </h4>
                  <ul className="space-y-2.5 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: "oklch(0.55 0.18 145)" }}
                        />
                        <span className="text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  {pkg.notIncluded.length > 0 && (
                    <>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        Not Included
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {pkg.notIncluded.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-2.5 text-sm text-muted-foreground"
                          >
                            <span
                              className="w-4 h-4 flex-shrink-0 flex items-center justify-center rounded-full"
                              style={{ background: "oklch(0.92 0 0)" }}
                            >
                              <span
                                className="w-2 h-0.5 rounded"
                                style={{ background: "oklch(0.6 0 0)" }}
                              />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  <Link to="/contact" search={{ demo: "true" }}>
                    <Button
                      className={`w-full font-bold ${pkg.recommended ? "bg-primary text-white hover:bg-primary/90" : "bg-foreground text-background hover:bg-foreground/90"}`}
                    >
                      Request Demo <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto text-center p-6 rounded-xl border border-border bg-white">
            <h3 className="font-bold text-foreground mb-2">
              Not Sure Which Package?
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Contact us for a consultation. We&apos;ll assess your monitoring
              requirements and recommend the best solution for your mill.
            </p>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Talk to Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
