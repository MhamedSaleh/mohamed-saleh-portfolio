import { useEffect, useState, useCallback } from "react";
import type { NavSection } from "../types";

const NAVIGATION_ITEMS: readonly { id: NavSection; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<NavSection>("home");

  // Close menu when screen resizes to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Handle scroll-based active section detection
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const onScroll = () => {
      let current: NavSection = "home";

      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop - 120;
        if (window.scrollY >= top) {
          current = section.id as NavSection;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when link is clicked
  const handleLinkClick = useCallback(() => {
    setOpen(false);
  }, []);

  // Handle keyboard navigation for mobile menu toggle
  const handleToggleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(prev => !prev);
    }
  }, []);

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#home" onClick={handleLinkClick}>
          MS
        </a>

        {/* Desktop links */}
        <nav className="nav__links">
          {NAVIGATION_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          className="nav__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(prev => !prev)}
          onKeyDown={handleToggleKeyDown}
        >
          <span className="nav__bar" />
          <span className="nav__bar" />
          <span className="nav__bar" />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav__mobile ${open ? "is-open" : ""}`}>
        {NAVIGATION_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={handleLinkClick}
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}