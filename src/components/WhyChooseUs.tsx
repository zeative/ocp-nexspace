import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { CheckCircle2, BarChart3, Lock, Zap } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            <CheckCircle2 className="size-3" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Built for <span className="text-primary">Enterprise</span>, <br />
            Scaled for <span className="text-purple-500">Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            We combine technical excellence with business acumen to deliver
            solutions that scale with your ambitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(17,17,241,0.1)]">
            <CardHeader>
              <div className="size-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <BarChart3 className="size-6 text-blue-400" />
              </div>
              <CardTitle className="text-2xl group-hover:text-blue-400 transition-colors">
                Scalable Architecture
              </CardTitle>
              <CardDescription className="text-base text-slate-400">
                Build for today. Scale for tomorrow. Our solutions grow with
                your business.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <div className="bg-slate-950/50 h-64 relative p-6 overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay" />
                <div className="absolute inset-x-8 top-8 bottom-0 bg-slate-900 border border-white/10 rounded-t-xl p-4 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-4 mb-4">
                    <div className="w-1/3 space-y-3">
                      <div className="h-2 w-full bg-white/5 rounded-full" />
                      <div className="h-2 w-2/3 bg-white/5 rounded-full" />
                      <div className="h-2 w-3/4 bg-white/5 rounded-full" />
                      <div className="h-20 w-full bg-white/5 rounded-lg mt-4 border border-white/5" />
                    </div>
                    <div className="w-2/3 h-40 bg-slate-800/50 rounded-lg border border-white/5 flex items-end justify-around p-3 gap-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-t from-blue-500/10 to-transparent" />
                      {[30, 50, 40, 70, 60, 80, 50, 90].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className="w-full bg-blue-500 rounded-t-[2px] opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Superior User Experience */}
          <Card className="bg-slate-900/50 border-white/5 overflow-hidden group hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]">
            <CardHeader>
              <div className="size-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                <Zap className="size-6 text-purple-400" />
              </div>
              <CardTitle className="text-2xl group-hover:text-purple-400 transition-colors">
                AI-Powered Intelligence
              </CardTitle>
              <CardDescription className="text-base text-slate-400">
                Leverage machine learning and advanced analytics to make
                smarter, faster decisions.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <div className="bg-slate-950/50 h-64 relative p-6 overflow-hidden border-t border-white/5 flex items-center justify-center">
                <div className="absolute inset-0 bg-linear-to-tr from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-3/4 h-full bg-slate-900 border border-white/10 rounded-t-xl p-4 shadow-2xl skew-y-3 transform translate-y-8 group-hover:skew-y-0 group-hover:translate-y-4 transition-all duration-500">
                  <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                    <div className="h-2 w-20 bg-white/10 rounded-full" />
                    <div className="size-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <div className="size-3 rounded-full bg-purple-500" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-24 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors" />
                    <div className="h-24 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors" />
                    <div className="h-24 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Proven Expertise */}
          <Card className="bg-slate-900/50 border-white/5 overflow-hidden group hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="h-56 bg-slate-950/50 relative overflow-hidden p-4 border-b border-white/5">
                <div className="absolute inset-0 flex gap-4 p-4 transform -rotate-6 scale-110 group-hover:rotate-0 group-hover:scale-100 transition-all duration-700">
                  <div className="w-1/2 h-full bg-slate-800/50 rounded-lg border border-white/5 p-3 opacity-50 blur-[1px]">
                    <div className="h-3 w-full bg-white/10 rounded mb-2" />
                    <div className="h-full w-full bg-white/5 rounded" />
                  </div>
                  <div className="w-1/2 h-full bg-slate-900 rounded-lg border border-white/10 p-3 shadow-2xl z-10">
                    <div className="h-3 w-full bg-cyan-500/20 rounded mb-3" />
                    <div className="h-24 w-full bg-linear-to-br from-cyan-500/10 to-transparent rounded-lg border border-cyan-500/10" />
                    <div className="mt-3 space-y-2">
                      <div className="h-2 w-full bg-white/5 rounded" />
                      <div className="h-2 w-2/3 bg-white/5 rounded" />
                    </div>
                  </div>
                  <div className="w-1/2 h-full bg-slate-800/50 rounded-lg border border-white/5 p-3 opacity-50 blur-[1px]">
                    <div className="h-3 w-full bg-white/10 rounded mb-2" />
                    <div className="h-full w-full bg-white/5 rounded" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="size-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                  <CheckCircle2 className="size-6 text-cyan-400" />
                </div>
                <CardTitle className="text-2xl mb-2 group-hover:text-cyan-400 transition-colors">
                  Proven Track Record
                </CardTitle>
                <CardDescription className="text-base text-slate-400">
                  Trusted by industry leaders. Delivering results for Fortune
                  500 companies and innovative startups alike.
                </CardDescription>
              </div>
            </CardContent>
          </Card>

          {/* Card 4: Secure and Reliable */}
          <Card className="bg-slate-900/50 border-white/5 overflow-hidden group hover:border-green-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.1)]">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="h-56 bg-slate-950/50 relative overflow-hidden p-4 flex items-center justify-center border-b border-white/5">
                <div className="w-3/4 bg-slate-900 rounded-xl border border-white/10 shadow-2xl overflow-hidden transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <div className="bg-slate-800 p-2 border-b border-white/5 flex gap-1.5">
                    <div className="size-2 rounded-full bg-red-500/50" />
                    <div className="size-2 rounded-full bg-yellow-500/50" />
                    <div className="size-2 rounded-full bg-green-500/50" />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                      <span>System Status</span>
                      <span className="text-green-400 flex items-center gap-1">
                        <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
                        Operational
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-green-500/50" />
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-green-500/50" />
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-green-500/50" />
                      </div>
                    </div>
                    <div className="p-2 bg-green-500/10 rounded border border-green-500/20 text-xs text-green-400 font-mono text-center">
                      100% Uptime Guaranteed
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="size-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                  <Lock className="size-6 text-green-400" />
                </div>
                <CardTitle className="text-2xl mb-2 group-hover:text-green-400 transition-colors">
                  Enterprise Security
                </CardTitle>
                <CardDescription className="text-base text-slate-400">
                  Bank-level encryption and security protocols. Your data is
                  protected by industry-leading safeguards.
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
