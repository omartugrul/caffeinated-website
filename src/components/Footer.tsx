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
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors text-sm">
              Instagram
            </a>
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors text-sm">
              TikTok
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
