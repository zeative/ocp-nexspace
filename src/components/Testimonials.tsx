"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { Quote } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const TESTIMONIALS = [
  {
    quote:
      "OCP Nexspace transformed our data infrastructure. Their Big Data solution processes millions of records in real-time, giving us insights we never thought possible. ROI was achieved within 6 months.",
    author: "Michael Chen",
    role: "CTO, DataFlow Analytics",
    gradient: "from-primary to-cyan-500",
  },
  {
    quote:
      "Working with OCP Nexspace was a game-changer. Their AI-powered recommendation engine increased our conversion rate by 35%. The team's expertise and dedication are unmatched.",
    author: "Sarah Thompson",
    role: "VP Engineering, ShopHub",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    quote:
      "We needed a scalable solution fast. OCP Nexspace delivered a cloud-native platform that handles 10x our previous load. Their agile approach and technical excellence exceeded expectations.",
    author: "David Martinez",
    role: "Director of IT, GlobalTech Corp",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    quote:
      "Security was our top concern. OCP Nexspace implemented enterprise-grade encryption and compliance measures that passed our rigorous audits. They truly understand the healthcare industry.",
    author: "Dr. Emily Rodriguez",
    role: "CISO, MediCare Systems",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    quote:
      "The predictive analytics dashboard they built has become mission-critical for our operations. Real-time insights drive better decisions daily. Highly recommended!",
    author: "James Wilson",
    role: "CEO, LogiNext Solutions",
    gradient: "from-orange-500 to-red-500",
  },
  {
    quote:
      "From concept to deployment in record time. Their full-stack expertise and customer-first approach made our digital transformation seamless. Best technology partner we've had.",
    author: "Lisa Chang",
    role: "COO, Innovate Inc",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
            {t.testimonials.badge}
          </p>
          <div className="mask-linear-fade overflow-hidden">
            <div className="flex flex-nowrap gap-16 md:gap-24 animate-marquee min-w-full shrink-0 items-center opacity-60 grayscale">
              {[
                "DENSO",
                "intel",
                "TOYOTA",
                "PUMA",
                "Ferrari",
                "Red Bull",
                "Mercedes",
                "DENSO",
                "intel",
                "TOYOTA",
                "PUMA",
                "Ferrari",
                "Red Bull",
                "Mercedes",
              ].map((client, index) => (
                <span
                  key={`${client}-${index}`}
                  className="text-xl md:text-2xl font-bold font-mono shrink-0"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
            {t.testimonials.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {t.testimonials.title} <br />
            <span className="text-primary">
              {t.testimonials.titleHighlight}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="size-8 text-primary/50" />
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div
                    className={`size-10 rounded-full bg-linear-to-br ${testimonial.gradient}`}
                  />
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
