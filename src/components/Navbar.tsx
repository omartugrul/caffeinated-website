"use client";

import { Button, Logo } from "@/components/ui";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-espresso/10">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#" id="logo-nav">
          <Logo variant="gradient" size="md" />
        </a>

        <Button href="#contact" size="sm">
          Book Your Event
        </Button>
      </div>
    </nav>
  );
}
