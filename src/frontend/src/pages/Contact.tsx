import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSearch } from "@tanstack/react-router";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { MillType, useSubmitEnquiry } from "../hooks/useQueries";

export default function Contact() {
  const search = useSearch({ strict: false }) as { demo?: string };
  const isDemo = search?.demo === "true";

  const [form, setForm] = useState({
    name: "",
    companyName: "",
    city: "",
    phone: "",
    email: "",
    millType: "",
    message: "",
    isDemo: isDemo,
  });

  useEffect(() => {
    if (isDemo) setForm((prev) => ({ ...prev, isDemo: true }));
  }, [isDemo]);

  const { mutate: submit, isPending, isSuccess, isError } = useSubmitEnquiry();

  const handleSubmit = (requestDemo: boolean) => {
    if (!form.name || !form.email || !form.millType) return;
    submit({
      name: form.name,
      companyName: form.companyName,
      city: form.city,
      phone: form.phone,
      email: form.email,
      millType: form.millType as MillType,
      message: form.message,
      isDemo: requestDemo || form.isDemo,
    });
  };

  const set = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div>
      <div className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            Contact Us
          </h1>
          <p className="max-w-xl" style={{ color: "oklch(0.7 0.03 245)" }}>
            Request a demo or send us an enquiry. We&apos;ll get back to you
            within 24 hours.
          </p>
        </div>
      </div>

      <section className="py-16 section-offwhite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-border shadow-xs p-8">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  {isDemo ? "Request a Demo" : "Send Enquiry"}
                </h2>

                {isSuccess ? (
                  <div
                    data-ocid="contact.success_state"
                    className="flex items-start gap-4 p-6 rounded-lg"
                    style={{
                      background: "oklch(0.55 0.18 145 / 0.1)",
                      border: "1px solid oklch(0.55 0.18 145 / 0.3)",
                    }}
                  >
                    <CheckCircle2
                      className="w-6 h-6 flex-shrink-0 mt-0.5"
                      style={{ color: "oklch(0.55 0.18 145)" }}
                    />
                    <div>
                      <p className="font-bold text-foreground mb-1">
                        Enquiry Submitted Successfully!
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Thank you for your enquiry. Our team will contact you
                        within 24 hours.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(false);
                    }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          data-ocid="contact.name_input"
                          value={form.name}
                          onChange={(e) => set("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          data-ocid="contact.company_input"
                          value={form.companyName}
                          onChange={(e) => set("companyName", e.target.value)}
                          placeholder="Your company or mill name"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          data-ocid="contact.city_input"
                          value={form.city}
                          onChange={(e) => set("city", e.target.value)}
                          placeholder="Your city"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          data-ocid="contact.phone_input"
                          value={form.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          placeholder="Your phone number"
                        />
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          data-ocid="contact.email_input"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label htmlFor="mill-type">Type of Mill *</Label>
                        <Select
                          value={form.millType}
                          onValueChange={(v) => set("millType", v)}
                          required
                        >
                          <SelectTrigger
                            data-ocid="contact.mill_type_select"
                            id="mill-type"
                          >
                            <SelectValue placeholder="Select mill type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value={MillType.rice}>
                              Rice Mill
                            </SelectItem>
                            <SelectItem value={MillType.flour}>
                              Flour Mill
                            </SelectItem>
                            <SelectItem value={MillType.dal}>
                              Dal Mill
                            </SelectItem>
                            <SelectItem value={MillType.other}>
                              Other
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          data-ocid="contact.message_textarea"
                          value={form.message}
                          onChange={(e) => set("message", e.target.value)}
                          placeholder="Tell us about your mill and what you'd like to monitor..."
                          rows={4}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="flex items-center gap-3 p-4 rounded-lg border border-border">
                          <Checkbox
                            id="demo-check"
                            data-ocid="contact.demo_checkbox"
                            checked={form.isDemo}
                            onCheckedChange={(checked) =>
                              set("isDemo", !!checked)
                            }
                          />
                          <Label
                            htmlFor="demo-check"
                            className="cursor-pointer font-medium"
                          >
                            I would like a live product demonstration
                          </Label>
                        </div>
                      </div>
                    </div>

                    {isError && (
                      <div
                        data-ocid="contact.error_state"
                        className="flex items-center gap-3 p-4 rounded-lg"
                        style={{
                          background: "oklch(0.577 0.245 27 / 0.1)",
                          border: "1px solid oklch(0.577 0.245 27 / 0.3)",
                        }}
                      >
                        <AlertCircle
                          className="w-5 h-5 flex-shrink-0"
                          style={{ color: "oklch(0.577 0.245 27)" }}
                        />
                        <p className="text-sm text-destructive">
                          Failed to submit. Please try again.
                        </p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button
                        type="button"
                        data-ocid="contact.request_demo_button"
                        onClick={() => handleSubmit(true)}
                        disabled={isPending}
                        className="bg-primary text-white hover:bg-primary/90 font-bold"
                      >
                        {isPending ? (
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        ) : null}
                        Request Demo
                      </Button>
                      <Button
                        type="submit"
                        data-ocid="contact.submit_button"
                        disabled={isPending}
                        variant="outline"
                        className="border-foreground text-foreground hover:bg-foreground hover:text-background font-bold"
                      >
                        {isPending ? (
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        ) : null}
                        Submit Enquiry
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-border shadow-xs p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:basics.automation@gmail.com"
                    className="flex items-start gap-3 group"
                  >
                    <div className="feature-icon-wrap w-9 h-9 flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium text-foreground group-hover:underline">
                        basics.automation@gmail.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/message/BASICS"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.whatsapp_button"
                    className="flex items-center gap-3 w-full p-3 rounded-lg font-semibold text-sm transition-all"
                    style={{
                      background: "oklch(0.45 0.18 145 / 0.1)",
                      border: "1px solid oklch(0.45 0.18 145 / 0.3)",
                      color: "oklch(0.4 0.18 145)",
                    }}
                  >
                    <MessageCircle
                      className="w-5 h-5"
                      style={{ color: "oklch(0.55 0.18 145)" }}
                    />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div
                className="rounded-xl p-6 text-white"
                style={{ background: "var(--navy)" }}
              >
                <h3 className="font-bold mb-3">Response Time</h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "oklch(0.7 0.03 245)" }}
                >
                  We typically respond within 24 hours on business days.
                </p>
                <div className="space-y-2">
                  {[
                    "Demo requests",
                    "Technical enquiries",
                    "Partnership discussions",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "oklch(0.75 0.12 240)" }}
                    >
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
