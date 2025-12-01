import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="bg-[#0f172a] rounded-3xl p-8 md:p-16 relative overflow-hidden border border-white/5">
          {/* Background Glow/Effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-full bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -top-1/2 -right-1/4 w-1/2 h-full bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {/* Column 1: Brand & Desc */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="/meta/logo.png"
                    alt="OCP Nexspace"
                    width={32}
                    height={32}
                    className="size-8"
                  />
                  <span className="text-xl font-bold tracking-tight text-white">
                    OCP Nexspace
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                PT OCP NEXSPACE INDONESIA
                <br />
                <br />
                Leverage Big Data and Artificial Intelligence to drive
                efficiency, scalability, and innovation in your organization.
              </p>
            </div>

            {/* Column 2: Sitemap */}
            <div>
              <h3 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">
                Sitemap
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Connect */}
            <div>
              <h3 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">
                Let's Connect
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-white/10 p-2 rounded-lg hover:bg-primary hover:text-white transition-all text-white"
                >
                  <Instagram className="size-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-2 rounded-lg hover:bg-primary hover:text-white transition-all text-white"
                >
                  <Linkedin className="size-5" />
                </a>
              </div>
            </div>

            {/* Column 4: Address */}
            <div>
              <h3 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">
                Address
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3 items-start">
                  <span className="shrink-0">📍</span>
                  <span>
                    APL Tower Central Park Lt. 19. Jl. Letjen S. Parman Kav. 28,
                    Petamburan, Jakarta Barat
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="shrink-0">📞</span>
                  <span>021 50955752</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 OCP Nexspace. All Rights Reserved</p>
            <p className="uppercase tracking-wider text-xs">
              PT OCP NEXSPACE TEKNOLOGI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
