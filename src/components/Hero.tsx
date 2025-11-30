import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New Features Available
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent animate-fade-in-up delay-100">
            Build Smarter. Scale Faster. <br />
            <span className="text-primary">AI Powered</span> for Unstoppable
            Growth.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            Unlock new levels of productivity with our advanced AI solutions.
            Transform your business operations and stay ahead of the competition
            with real-time insights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Button
              size="lg"
              variant="glow"
              className="rounded-full h-12 px-8 text-base"
            >
              Get Started Free
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-8 text-base border-white/10 hover:bg-white/5"
            >
              View Demo
            </Button>
          </div>
        </div>

        {/* Dashboard Preview Mockup */}
        <div className="mt-20 relative mx-auto max-w-5xl animate-fade-in-up delay-500">
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-2 shadow-2xl shadow-primary/20">
            <div className="rounded-lg bg-black/40 aspect-video w-full overflow-hidden relative">
              {/* Mock UI Elements */}
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
              <div className="absolute top-4 left-4 right-4 h-8 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
              </div>

              {/* Abstract Dashboard Content */}
              <div className="absolute top-16 left-4 right-4 bottom-4 grid grid-cols-3 gap-4">
                <div className="col-span-1 bg-white/5 rounded-lg border border-white/5 p-4 space-y-3">
                  <div className="h-4 w-1/2 bg-white/10 rounded" />
                  <div className="h-32 w-full bg-linear-to-t from-primary/20 to-transparent rounded" />
                </div>
                <div className="col-span-2 bg-white/5 rounded-lg border border-white/5 p-4 space-y-3">
                  <div className="flex justify-between">
                    <div className="h-4 w-1/3 bg-white/10 rounded" />
                    <div className="h-4 w-16 bg-primary/20 rounded" />
                  </div>
                  <div className="h-32 w-full bg-white/5 rounded flex items-end justify-between px-2 pb-2 gap-2">
                    {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="w-full bg-primary/40 rounded-t-sm hover:bg-primary/60 transition-colors"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect behind dashboard */}
          <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-4xl" />
        </div>
      </div>
    </section>
  );
}
