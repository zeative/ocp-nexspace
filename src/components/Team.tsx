import { Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";

const TEAM_MEMBERS = [
  {
    name: "zaadevofc",
    role: "Fullstack Developer",
    image: "/people/kejaa.jpeg",
    bio: "Fullstack Developer with 3+ years in tech innovation.",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "zaadevofc",
    role: "Fullstack Developer",
    image: "/people/kejaa.jpeg",
    bio: "Fullstack Developer with 3+ years in tech innovation.",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "zaadevofc",
    role: "Fullstack Developer",
    image: "/people/kejaa.jpeg",
    bio: "Fullstack Developer with 3+ years in tech innovation.",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "zaadevofc",
    role: "Fullstack Developer",
    image: "/people/kejaa.jpeg",
    bio: "Fullstack Developer with 3+ years in tech innovation.",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

export function Team() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-semibold tracking-wide uppercase">
            Our Team
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
            Meet the <span className="text-primary">Minds</span> Behind the
            Magic
          </h3>
          <p className="text-muted-foreground text-lg">
            A diverse group of experts committed to delivering excellence and
            driving your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="group relative bg-[#0f172a] border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Socials Overlay */}
                <div className="absolute bottom-0 left-0 w-full flex justify-center gap-4 translate-y-full group-hover:-translate-y-4 transition-transform duration-300">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white text-white backdrop-blur-sm transition-colors"
                    >
                      <Linkedin className="size-4" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white text-white backdrop-blur-sm transition-colors"
                    >
                      <Twitter className="size-4" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white text-white backdrop-blur-sm transition-colors"
                    >
                      <Github className="size-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6 text-center relative z-10">
                <h4 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h4>
                <p className="text-primary text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
