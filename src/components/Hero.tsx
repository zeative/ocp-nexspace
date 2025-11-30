"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import ColorBends from "./ColorBends";
import FloatingLines from "./FloatingLines";
import DarkVeil from "./DarkVeil";
import { useTheme } from "next-themes";

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex flex-col justify-center bg-background">
      {theme === "dark" && (
        <div className="absolute top-0 left-0 w-full h-full">
          <DarkVeil />
        </div>
      )}

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary animate-fade-in-up backdrop-blur-md shadow-[0_0_15px_rgba(17,17,241,0.1)] hover:border-primary/40 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="tracking-wide">v2.0 Now Live</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] animate-fade-in-up delay-100">
            <span className="block text-foreground drop-shadow-sm">
              Build Smarter.
            </span>
            <span className="block bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(17,17,241,0.3)]">
              Scale Faster.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
            Empower your business with AI-driven insights. The platform designed
            for{" "}
            <span className="text-primary font-medium">unstoppable growth</span>{" "}
            and seamless scalability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up delay-300 pt-4">
            <Button
              size="lg"
              variant="glow"
              className="rounded-full h-14 px-10 text-base font-semibold"
            >
              Get Started Free
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-10 text-base font-medium"
            >
              <Zap className="mr-2 size-5 text-yellow-400 fill-yellow-400" />
              View Demo
            </Button>
          </div>
        </div>

        <div className="mt-24 relative mx-auto max-w-6xl animate-fade-in-up delay-500 perspective-[2000px]">
          <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-xl p-3 shadow-2xl shadow-primary/10 transform rotate-x-12 hover:rotate-x-0 transition-transform duration-1000 ease-out group">
            <div className="rounded-xl bg-card border border-border aspect-video w-full overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-10 border-b border-border bg-muted/50 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="size-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="size-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="ml-4 h-5 w-64 bg-muted rounded-md border border-border" />
              </div>

              <div className="absolute top-10 bottom-0 left-0 w-16 border-r border-border bg-muted/20 flex flex-col items-center py-4 gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`size-8 rounded-lg ${
                      i === 1
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <div className="absolute top-10 bottom-0 left-16 right-0 p-6 overflow-hidden bg-background">
                <div className="grid grid-cols-3 gap-6 h-full">
                  <div className="col-span-2 bg-card border border-border rounded-xl p-5 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <div className="h-4 w-32 bg-muted rounded mb-2" />
                        <div className="h-8 w-16 bg-muted-foreground/20 rounded" />
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 w-20 bg-muted rounded border border-border" />
                        <div className="h-8 w-8 bg-primary rounded flex items-center justify-center shadow-lg shadow-primary/20" />
                      </div>
                    </div>
                    <div className="flex-1 flex items-end gap-3 px-2 pb-2">
                      {[35, 55, 45, 70, 60, 75, 50, 65, 80, 55, 90, 70].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="w-full bg-primary/10 rounded-t-sm relative group/bar overflow-hidden"
                          >
                            <div
                              style={{ height: `${h}%` }}
                              className="absolute bottom-0 w-full bg-gradient-to-t from-primary to-cyan-400 opacity-80 group-hover/bar:opacity-100 transition-opacity"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="col-span-1 flex flex-col gap-6">
                    <div className="flex-1 bg-card border border-border rounded-xl p-5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-3 opacity-20">
                        <Sparkles className="size-12 text-primary" />
                      </div>
                      <div className="h-4 w-24 bg-muted rounded mb-4" />
                      <div className="h-10 w-32 bg-muted-foreground/20 rounded mb-2" />
                      <div className="h-4 w-16 bg-green-500/20 text-green-400 text-xs flex items-center justify-center rounded-full">
                        +12.5%
                      </div>

                      <div className="mt-8 h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-primary" />
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-primary/20 to-purple-900/20 border border-border rounded-xl p-5 flex flex-col justify-center items-center text-center">
                      <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                        <Zap className="size-6 text-primary" />
                      </div>
                      <div className="h-4 w-24 bg-muted rounded mb-2" />
                      <div className="h-3 w-40 bg-muted/50 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="absolute -inset-10 bg-primary/20 blur-3xl -z-10 rounded-[3rem] opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
        </div>
      </div>
    </section>
  );
}
