import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ArrowRight } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        solid
          ? "border-b border-border bg-background/95 shadow-card backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
        <Logo onDark={!solid} />

        <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-sm px-3 py-2 text-sm font-medium transition-colors",
                solid
                  ? "text-foreground/80 hover:text-navy"
                  : "text-on-dark-muted hover:text-on-dark",
              )}
              activeProps={{
                className: solid ? "!text-navy font-semibold" : "!text-on-dark font-semibold",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="safety" className="hidden sm:inline-flex">
            <Link to="/contact">Request a Quote</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className={cn(
                  "xl:hidden",
                  solid ? "text-navy" : "text-on-dark hover:bg-on-dark/10 hover:text-on-dark",
                )}
              >
                <Menu className="!size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-[88vw] max-w-sm flex-col bg-background p-0"
            >
              <div className="border-b border-border px-6 py-5">
                <SheetTitle className="sr-only">Site menu</SheetTitle>
                <Logo />
              </div>
              <nav aria-label="Mobile" className="flex flex-1 flex-col overflow-y-auto px-3 py-4">
                {[{ to: "/" as const, label: "Home" }, ...NAV].map((item) => (
                  <SheetClose asChild key={item.to}>
                    <Link
                      to={item.to}
                      activeOptions={{ exact: item.to === "/" }}
                      className="flex items-center justify-between rounded-md px-3 py-3.5 font-display text-lg font-semibold text-navy transition-colors hover:bg-surface"
                      activeProps={{ className: "bg-surface" }}
                    >
                      {item.label}
                      <ArrowRight className="size-4 text-steel" />
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="border-t border-border p-6">
                <Button asChild variant="safety" size="xl" className="w-full">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
