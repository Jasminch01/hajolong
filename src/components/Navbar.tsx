"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "@/context/ThemeContext";
import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const links = [
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-[background-color,border-color] duration-300",
        scrolled
          ? "border-border bg-background/92 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8"
      >
        <Link href="/" aria-label="Hajolong Solutions, home" className="rounded-md">
          <BrandLogo size="md" />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={cn(
                  "relative px-3.5 py-2 text-[0.95rem] font-medium text-foreground/75 transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none focus-visible:after:scale-x-100",
                  "after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-foreground/35 after:transition-transform after:duration-500 after:ease-[var(--ease-out-expo)] hover:after:scale-x-100",
                  isActive(l.href) && "text-foreground after:hidden"
                )}
              >
                {l.label}
                {/* the active underline glides to the new page's link */}
                {isActive(l.href) && (
                  <motion.span
                    layoutId="nav-active"
                    aria-hidden="true"
                    className="absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-foreground"
                    transition={{ type: "spring", bounce: 0.2, visualDuration: 0.4 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to dawn (light) theme" : "Switch to dusk (dark) theme"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    className="grid place-items-center"
                    initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.3, visualDuration: 0.25 }}
                  >
                    {theme === "dark" ? <Sun className="size-[1.125rem]" /> : <Moon className="size-[1.125rem]" />}
                  </motion.span>
                </AnimatePresence>
              </Button>
            </TooltipTrigger>
            <TooltipContent>{theme === "dark" ? "Dawn" : "Dusk"}</TooltipContent>
          </Tooltip>

          <Button asChild variant="lamp" className="ml-1.5 hidden sm:inline-flex">
            <Link href="/contact">
              Start a project <ArrowRight />
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm bg-background">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <BrandLogo size="sm" />
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col px-4">
                {[{ href: "/", label: "Home" }, ...links].map((l) => (
                  <li key={l.href}>
                    <SheetClose asChild>
                      <Link
                        href={l.href}
                        aria-current={pathname === l.href ? "page" : undefined}
                        className="flex items-center justify-between border-b py-4 font-display text-2xl font-semibold"
                      >
                        {l.label}
                        {pathname === l.href && <span className="size-2 rounded-full bg-foreground" aria-hidden="true" />}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 p-4">
                <SheetClose asChild>
                  <Button asChild variant="lamp" size="lg">
                    <Link href="/contact">
                      Start a project <ArrowRight />
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
