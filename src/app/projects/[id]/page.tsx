import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PROJECTS } from "@/data/projects";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-48 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="size-4" /> Back to Projects
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary/10 border border-primary/20 text-sm text-primary px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="aspect-video relative rounded-3xl overflow-hidden border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
            {/* Sidebar / Meta */}
            <div className="space-y-8">
              <div className="bg-[#0f172a] border border-white/5 rounded-2xl p-8 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Client
                  </h3>
                  <p className="text-white font-medium text-lg">
                    {project.client}
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Services
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">The Challenge</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Our Solution</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">The Results</h2>
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="size-6 text-primary shrink-0 mt-1" />
                    <p className="text-lg text-white leading-relaxed">
                      {project.results}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
