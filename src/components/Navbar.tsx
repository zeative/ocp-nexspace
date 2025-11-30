import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bot, Atom } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 flex items-center justify-between w-full max-w-2xl shadow-2xl shadow-black/50">
        {/* Logo */}
        <div className="flex items-center gap-2 mr-8">
          <Atom className="size-6 text-white animate-spin-slow" />
          <span className="text-lg font-bold tracking-tight text-white">
            React Bits
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 ml-auto">
          <Link
            href="#"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Docs
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Components
          </Link>
        </nav>
      </div>
    </header>
  );
}
