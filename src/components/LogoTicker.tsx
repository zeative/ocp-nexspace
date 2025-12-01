import { Cloud, Database, Server, Globe, Shield, Cpu } from "lucide-react";

export function LogoTicker() {
  const logos = [
    { name: "TensorFlow", icon: Cpu },
    { name: "AWS", icon: Cloud },
    { name: "Digital Ocean", icon: Globe },
    { name: "HIKVISION", icon: Shield },
    { name: "NUTANIX", icon: Database },
    { name: "Google Cloud", icon: Server },
    { name: "GitHub", icon: Globe }, // Using Globe as placeholder if Github icon not imported, but I should import it.
  ];

  return (
    <section className="py-8 md:py-10 border-y border-white/5 bg-white/5 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center gap-4 md:gap-8 mask-linear-fade">
          <div className="flex flex-nowrap gap-16 md:gap-24 animate-marquee min-w-full shrink-0 items-center">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center gap-3 group cursor-pointer shrink-0"
              >
                <logo.icon className="size-6 md:size-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <span className="text-lg md:text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />
    </section>
  );
}
