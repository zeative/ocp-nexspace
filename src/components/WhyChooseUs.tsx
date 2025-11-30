import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
            Key Benefits
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            WHY CHOOSE US?
          </h2>
          <p className="text-muted-foreground text-lg">
            We deliver technology that adapts to your needs, ensuring you stay
            ahead in a rapidly evolving digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Card 1: Deep Customization */}
          <Card className="bg-white/5 border-white/10 overflow-hidden group hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle>Deep Customization</CardTitle>
              <CardDescription>
                Tailor every aspect of your dashboard to fit your specific
                workflow.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <div className="bg-black/40 h-64 relative p-6 overflow-hidden">
                <div className="absolute inset-x-6 top-6 bottom-0 bg-slate-900 border border-white/10 rounded-t-xl p-4 shadow-2xl">
                  <div className="flex gap-4 mb-4">
                    <div className="w-1/3 space-y-2">
                      <div className="h-2 w-full bg-white/10 rounded" />
                      <div className="h-2 w-2/3 bg-white/10 rounded" />
                      <div className="h-2 w-3/4 bg-white/10 rounded" />
                    </div>
                    <div className="w-2/3 h-32 bg-white/5 rounded-lg flex items-end justify-around p-2 gap-1">
                      {[30, 50, 40, 70, 60, 80, 50, 90].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className="w-full bg-primary rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Superior User Experience */}
          <Card className="bg-white/5 border-white/10 overflow-hidden group hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle>Superior User Experience</CardTitle>
              <CardDescription>
                Intuitive interfaces designed for maximum productivity and ease
                of use.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <div className="bg-black/40 h-64 relative p-6 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-linear-to-tr from-primary/5 to-transparent" />
                <div className="w-3/4 h-full bg-slate-900 border border-white/10 rounded-t-xl p-4 shadow-2xl skew-y-3 transform translate-y-8">
                  <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                    <div className="h-3 w-20 bg-white/20 rounded" />
                    <div className="size-6 rounded-full bg-primary/20" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-20 bg-white/5 rounded" />
                    <div className="h-20 bg-white/5 rounded" />
                    <div className="h-20 bg-white/5 rounded" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 3: Proven Expertise */}
          <Card className="bg-white/5 border-white/10 overflow-hidden group hover:border-primary/50 transition-colors">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="h-48 bg-black/40 relative overflow-hidden p-4">
                <div className="absolute inset-0 flex gap-4 p-4 transform -rotate-6 scale-110">
                  <div className="w-1/2 h-full bg-slate-800 rounded-lg border border-white/10 p-2 opacity-50">
                    <div className="h-4 w-full bg-white/10 rounded mb-2" />
                    <div className="h-20 w-full bg-white/5 rounded" />
                  </div>
                  <div className="w-1/2 h-full bg-slate-900 rounded-lg border border-white/10 p-2 shadow-xl z-10">
                    <div className="h-4 w-full bg-primary/20 rounded mb-2" />
                    <div className="h-20 w-full bg-linear-to-br from-primary/10 to-transparent rounded" />
                  </div>
                  <div className="w-1/2 h-full bg-slate-800 rounded-lg border border-white/10 p-2 opacity-50">
                    <div className="h-4 w-full bg-white/10 rounded mb-2" />
                    <div className="h-20 w-full bg-white/5 rounded" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <CardTitle className="mb-2">Proven Expertise</CardTitle>
                <CardDescription>
                  Years of experience delivering top-tier solutions for industry
                  leaders.
                </CardDescription>
              </div>
            </CardContent>
          </Card>

          {/* Card 4: Secure and Reliable */}
          <Card className="bg-white/5 border-white/10 overflow-hidden group hover:border-primary/50 transition-colors">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="h-48 bg-black/40 relative overflow-hidden p-4 flex items-center justify-center">
                <div className="w-3/4 bg-white rounded-lg shadow-xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-slate-100 p-2 border-b flex gap-1">
                    <div className="size-2 rounded-full bg-red-400" />
                    <div className="size-2 rounded-full bg-yellow-400" />
                    <div className="size-2 rounded-full bg-green-400" />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>STATUS</span>
                      <span className="text-green-500">ACTIVE</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded" />
                    <div className="h-2 w-2/3 bg-slate-200 rounded" />
                    <div className="h-2 w-3/4 bg-slate-200 rounded" />
                    <div className="h-2 w-1/2 bg-slate-200 rounded" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <CardTitle className="mb-2">Secure and Reliable</CardTitle>
                <CardDescription>
                  Enterprise-grade security protocols to keep your data safe and
                  accessible 24/7.
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
