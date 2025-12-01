import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export function AboutUs() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-semibold tracking-wide uppercase">
            Who We Are
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Transforming Ideas into{" "}
            <span className="text-primary">Powerful Solutions</span>
          </h3>
          <p className="text-muted-foreground text-lg">
            OCP Nexspace specializes in Big Data, AI, and Enterprise Software
            Development. We turn complex challenges into innovative solutions
            that drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-500" />

            <div className="relative z-10 space-y-8">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-white">Our Mission</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We empower businesses through intelligent software solutions.
                  With expertise in Big Data, AI, and cloud technologies, we
                  deliver scalable systems that drive growth, optimize
                  operations, and create competitive advantages in the digital
                  economy.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "AI & Big Data Experts",
                  "Agile Methodology",
                  "24/7 Support",
                  "Proven Track Record",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-primary/20 p-1.5 rounded-full">
                      <CheckCircle2 className="size-4 text-primary" />
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group/btn">
                  Learn more about our journey
                  <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-2 relative overflow-hidden h-full min-h-[300px] group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f01290129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Team collaboration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                    <p className="text-white font-medium text-lg">
                      "Technology should enable business success, not complicate
                      it. We make it simple."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
