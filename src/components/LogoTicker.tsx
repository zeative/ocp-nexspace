import { Cloud, Database, Server, Globe, Shield, Cpu } from "lucide-react";

export function LogoTicker() {
  const logos = [
    { name: "AWS", icon: Cloud },
    { name: "Azure", icon: Database },
    { name: "Google Cloud", icon: Server },
    { name: "Salesforce", icon: Globe },
    { name: "Oracle", icon: Shield },
    { name: "IBM", icon: Cpu },
  ];

  return (
    <section className="py-10 border-y border-white/5 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <logo.icon className="size-6 md:size-8 group-hover:text-primary transition-colors" />
              <span className="text-lg md:text-xl font-bold group-hover:text-white transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
