"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { Atom, Languages, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-background/80 backdrop-blur-xl border border-border rounded-full py-2 px-4 md:px-6 flex items-center justify-between w-full max-w-3xl shadow-2xl shadow-black/10 dark:shadow-black/50 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center gap-2 mr-4 md:mr-8">
          <Atom className="size-6 text-primary animate-spin-slow" />
          <span className="text-lg font-bold tracking-tight text-foreground hidden sm:block">
            React Bits
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-4 md:gap-6 ml-auto">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
          </Link>

          {/* Toggles */}
          <div className="flex items-center gap-2 pl-4 border-l border-border">
            <Button
              variant="ghost"
              size="icon"
              className="size-8 rounded-full hover:bg-muted"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="size-4 text-yellow-400" />
              ) : (
                <Moon className="size-4 text-slate-700" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="h-8 rounded-full px-3 text-xs font-bold hover:bg-muted"
              onClick={() => setLanguage(language === "en" ? "id" : "en")}
            >
              <Languages className="size-3 mr-1.5" />
              {language.toUpperCase()}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
