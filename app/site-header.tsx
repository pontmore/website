"use client";

import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Arrow, Github, Mark } from "./icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <a
          className="wordmark"
          href="#top"
          aria-label="Pontmore home"
          onClick={() => setOpen(false)}
        >
          <Mark />
          pontmore<span className="wordmark-dot">.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#protocol">The protocol</a>
          <a href="#projects">Ecosystem</a>
        </nav>
        <div className="header-actions">
          <a
            className="header-github"
            href="https://github.com/pontmore/protocol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <span>Build with us</span>
            <Arrow diagonal />
          </a>
          <ThemeToggle />
          <button
            className="menu-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close −" : "Menu +"}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
          onClick={() => setOpen(false)}
        >
          <a href="#how-it-works">
            How it works <Arrow />
          </a>
          <a href="#protocol">
            The protocol <Arrow />
          </a>
          <a href="#projects">
            Ecosystem <Arrow />
          </a>
          <a
            href="https://github.com/pontmore/protocol"
            target="_blank"
            rel="noopener noreferrer"
          >
            Build with us <Arrow diagonal />
          </a>
        </nav>
      )}
    </header>
  );
}
