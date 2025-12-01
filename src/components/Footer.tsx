"use client";

import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="bg-[#0f172a] rounded-3xl p-8 md:p-16 relative overflow-hidden border border-white/5">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-white/5 to-transparent pointer-events-none" />
          <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-full bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -top-1/2 -right-1/4 w-1/2 h-full bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            <div className="space-y-6">
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
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">
                {t.footer.quickLinks}
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/#about"
                    className="hover:text-primary transition-colors"
                  >
                    {t.footer.sitemap.aboutUs}
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="hover:text-primary transition-colors"
                  >
                    {t.nav.projects}
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="hover:text-primary transition-colors"
                  >
                    {t.nav.blog}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t.footer.sitemap.contactUs}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">
                {t.footer.services}
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t.footer.servicesItems.customDev}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t.footer.servicesItems.aiSolutions}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t.footer.servicesItems.bigData}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    {t.footer.servicesItems.cloudServices}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">
                {t.footer.followUs}
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
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center relative z-10">
            <p className="text-sm text-muted-foreground">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
