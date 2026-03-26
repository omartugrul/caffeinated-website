export default function Footer() {
  return (
    <footer className="bg-espresso py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-8 text-center">
          <p
            id="logo-footer"
            className="text-[24px] tracking-[-0.03em] lowercase leading-none"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontWeight: 800,
              fontStyle: "italic",
              color: "white",
            }}
          >
            caffeinated.
          </p>
          <div className="flex flex-col gap-2 text-sm text-white/40">
            <p>Houston, TX metro area</p>
            <a
              href="mailto:hello@caffeinatedhtx.com"
              className="hover:text-white/60 transition-colors"
            >
              hello@caffeinatedhtx.com
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-white/30 hover:text-white/60 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" aria-label="TikTok" className="text-white/30 hover:text-white/60 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
              </svg>
            </a>
          </div>
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Caffeinated. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
