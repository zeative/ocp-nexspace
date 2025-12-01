import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/Card";
import { Layers, Zap, Globe, Shield, Smartphone, Layout } from "lucide-react";

export function Features() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            <Zap className="size-3 fill-primary" />
            What We Do Best
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Enterprise-Grade Solutions <br />
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Built for your Success
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From AI-powered analytics to scalable cloud infrastructure, we
            deliver cutting-edge technology solutions that transform your
            business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <Card className="bg-slate-900/50 border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            <CardContent className="p-0">
              <div className="aspect-video bg-slate-950/50 relative p-8 flex items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay" />
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Detailed Dashboard Mockup */}
                <div className="w-full max-w-md bg-slate-900 rounded-xl border border-white/10 p-4 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-2">
                      <div className="size-2.5 rounded-full bg-slate-700" />
                      <div className="size-2.5 rounded-full bg-slate-700" />
                    </div>
                    <div className="h-2 w-20 bg-white/5 rounded-full" />
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="col-span-2 space-y-3">
                      <div className="h-24 bg-linear-to-br from-blue-500/10 to-transparent rounded-lg border border-blue-500/10 p-3 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 right-0 h-12 flex items-end justify-between px-2 gap-1">
                          {[40, 70, 50, 80, 60, 90, 50].map((h, i) => (
                            <div
                              key={i}
                              style={{ height: `${h}%` }}
                              className="w-full bg-blue-500/40 rounded-t-[2px]"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 w-1/2 bg-white/5 rounded-md" />
                        <div className="h-8 w-1/2 bg-white/5 rounded-md" />
                      </div>
                    </div>
                    <div className="col-span-1 space-y-2">
                      <div className="h-8 w-full bg-white/5 rounded-md" />
                      <div className="h-8 w-full bg-white/5 rounded-md" />
                      <div className="h-14 w-full bg-white/5 rounded-md" />
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 right-10 p-2 bg-slate-800/80 backdrop-blur-md rounded-lg border border-white/10 shadow-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-700">
                  <Layout className="size-5 text-blue-400" />
                </div>
                <div className="absolute bottom-10 left-10 p-2 bg-slate-800/80 backdrop-blur-md rounded-lg border border-white/10 shadow-xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-700">
                  <Smartphone className="size-5 text-purple-400" />
                </div>
              </div>

              <div className="p-8 relative">
                <div className="size-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                  <Layers className="size-6 text-blue-400" />
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-blue-400 transition-colors">
                  Custom Software Development
                </CardTitle>
                <p className="text-slate-400 leading-relaxed">
                  Build powerful, scalable applications tailored to your unique
                  business needs. Our expert team delivers enterprise-grade
                  solutions using cutting-edge technologies.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feature 2: Integrations */}
          <Card className="bg-slate-900/50 border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="aspect-video bg-slate-950/50 relative p-8 flex flex-col justify-center border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay" />
                <div className="absolute inset-0 bg-linear-to-bl from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="grid grid-cols-1 gap-3 max-w-sm mx-auto w-full relative z-10">
                  {[
                    { name: "RAPID", icon: "R", color: "text-white" },
                    {
                      name: "SOFT MOB CONTROL",
                      icon: "S",
                      color: "text-white",
                    },
                    { name: "OneLogin", icon: "O", color: "text-white" },
                    { name: "Ivanti", icon: "I", color: "text-white" },
                  ].map((item, i) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-4 p-3 rounded-xl bg-slate-900 border border-white/5 hover:border-white/10 hover:bg-slate-800 transition-all duration-300 transform hover:translate-x-2 cursor-pointer group/item"
                    >
                      <div className="size-10 rounded-lg bg-white/5 flex items-center justify-center font-bold text-lg text-slate-300 group-hover/item:text-white group-hover/item:bg-white/10 transition-colors">
                        {item.icon}
                      </div>
                      <span className="font-semibold text-slate-300 group-hover/item:text-white transition-colors tracking-wide">
                        {item.name}
                      </span>
                      <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity">
                        <div className="size-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 relative">
                <div className="size-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                  <Globe className="size-6 text-purple-400" />
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-purple-400 transition-colors">
                  AI & Big Data Solutions
                </CardTitle>
                <p className="text-slate-400 leading-relaxed">
                  Harness the power of artificial intelligence and big data
                  analytics to gain actionable insights, automate processes, and
                  make data-driven decisions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
