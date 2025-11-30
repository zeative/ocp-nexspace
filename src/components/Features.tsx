import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "lucide-react";

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Empowering Businesses with <br />
            <span className="text-primary">Cutting-Edge Digital Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive digital services to help your business grow
            and succeed in the modern era.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature 1: Software Development */}
          <Card className="bg-white/5 border-white/10 overflow-hidden group hover:border-primary/50 transition-colors">
            <CardContent className="p-0">
              <div className="aspect-video bg-black/40 relative p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Mock Dashboard UI */}
                <div className="w-full h-full bg-slate-900/80 rounded-lg border border-white/10 p-4 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-4 w-24 bg-white/10 rounded" />
                    <div className="flex gap-2">
                      <div className="size-3 rounded-full bg-red-500/20" />
                      <div className="size-3 rounded-full bg-yellow-500/20" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-primary/20 rounded-lg animate-pulse" />
                    <div className="h-24 bg-blue-500/10 rounded-lg" />
                  </div>
                  <div className="mt-4 h-2 w-full bg-white/5 rounded overflow-hidden">
                    <div className="h-full w-2/3 bg-primary" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <CardTitle className="text-2xl mb-2">
                  Software Development
                </CardTitle>
                <CardDescription className="text-base">
                  Tailored software solutions that drive efficiency and
                  innovation. We build scalable applications designed to meet
                  your unique business needs.
                </CardDescription>
              </div>
            </CardContent>
          </Card>

          {/* Feature 2: Integrations */}
          <Card className="bg-white/5 border-white/10 overflow-hidden group hover:border-primary/50 transition-colors">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="flex-1 p-8 flex flex-col justify-center space-y-4 bg-black/20">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="size-10 rounded bg-white/10 flex items-center justify-center font-bold text-xl">
                    R
                  </div>
                  <span className="font-bold text-xl">RAPID</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="size-10 rounded bg-white/10 flex items-center justify-center font-bold text-xl">
                    S
                  </div>
                  <span className="font-bold text-xl">SOFT MOB CONTROL</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="size-10 rounded bg-white/10 flex items-center justify-center font-bold text-xl">
                    O
                  </div>
                  <span className="font-bold text-xl">OneLogin</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="size-10 rounded bg-white/10 flex items-center justify-center font-bold text-xl">
                    I
                  </div>
                  <span className="font-bold text-xl">Ivanti</span>
                </div>
              </div>
              <div className="p-8">
                <CardTitle className="text-2xl mb-2">
                  Seamless Integrations
                </CardTitle>
                <CardDescription className="text-base">
                  Connect your favorite tools and platforms. We ensure smooth
                  data flow and interoperability across your entire tech stack.
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
