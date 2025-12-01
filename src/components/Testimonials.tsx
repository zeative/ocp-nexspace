import { Card, CardContent } from "@/components/ui/Card";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Client Logos Header */}
        <div className="mb-20">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
            Our Clients
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Hear from Our <br />
              <span className="text-primary">Happy Customers</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Connect with us today and see why industry leaders trust our
              solutions to drive their success.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full opacity-50" />
            <Card className="bg-white/5 border-white/10 backdrop-blur-md">
              <CardContent className="p-8 space-y-6">
                <Quote className="size-10 text-primary/50" />
                <p className="text-lg md:text-xl leading-relaxed">
                  "A digital revolution for our workflow. The scalability and
                  security provided by this platform are unmatched. It has
                  completely transformed how we manage our operations."
                </p>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-linear-to-br from-primary to-purple-500" />
                  <div>
                    <p className="font-bold">Sarah Jenkins</p>
                    <p className="text-sm text-muted-foreground">
                      CTO, TechFlow Inc.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <a href="#" className="text-sm text-primary hover:underline">
                    Read full success story &rarr;
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
