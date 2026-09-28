import { Command, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Prices", href: "#prices" },
  { label: "Testimonials", href: "#testimonials" },
];

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // اقفلي المنيو لو الشاشة كبرت
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3.5 z-50 px-3 pointer-events-none">
      <div
        className={`mx-auto w-full transition-[max-width] duration-300 ${
          isScrolled ? "max-w-2xl" : "max-w-3xl"
        }`}
      >
        <nav
          className={`pointer-events-auto flex h-14 items-center justify-between rounded-full px-4 sm:px-6 border transition-colors duration-300 ${
            isScrolled
              ? "bg-[#1b1b1b]/20 backdrop-blur-xl border-white/10"
              : "bg-[#1b1b1b] border-transparent"
          }`}
        >
          <a href="#" className="flex min-w-0 items-center gap-2">
            <Command className="h-5 w-5 shrink-0 text-indigo-400" />
            <span className="clash-display truncate text-base font-bold">
              ForexTrade
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-zinc-300/90 transition-all duration-300 hover:-translate-y-0.5 hover:text-indigo-300"
              >
                {label}
              </a>
            ))}
            <button className="clash-display rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 px-4 py-2 text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-900">
              Start Trading
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="glass shrink-0 rounded-md p-1.5 md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {open && (
          <div className="pointer-events-auto mt-2 flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#1b1b1b]/95 p-3 backdrop-blur-xl md:hidden">
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-zinc-200 hover:bg-white/5"
              >
                {label}
              </a>
            ))}
            <button className="clash-display mt-1 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 px-4 py-3 text-base">
              Start Trading
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;