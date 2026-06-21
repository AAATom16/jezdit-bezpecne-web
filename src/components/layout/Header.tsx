"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/layout/Logo";
import { Container } from "./Container";
import { MAIN_NAV } from "@/content/nav";
import { APP_LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label="Perqo — domů">
          <Logo />
        </Link>

        <nav
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700"
          aria-label="Hlavní navigace"
        >
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-brand-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="sm" href="/pro-partnery">
            Pro partnery
          </Button>
          <Button variant="primary" size="sm" href={APP_LINKS.android} external>
            Stáhnout app
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden rounded-md p-2 text-slate-700 hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </Container>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cn(
          "md:hidden origin-top overflow-hidden border-t border-slate-200 transition-[transform,opacity] duration-DEFAULT ease-out motion-reduce:transition-none",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <Button variant="outline" href="/pro-partnery">
              Pro partnery
            </Button>
            <Button variant="primary" href={APP_LINKS.android} external>
              Stáhnout app
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
