import RepelGridBackground from "@/components/RepelGridBackground";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      <RepelGridBackground>
        <div className="nohemi w-full max-w-2xl text-white">
          <div className="text-center">
            <h1 className="text-[clamp(2.5rem,7vw,3.875rem)] tracking-[0.08em]">
              Hey, I&apos;m Igor
            </h1>
            <p className="mt-3 text-sm tracking-normal text-white/70">
              I am a full stack software developer
            </p>
          </div>

          <section
            aria-labelledby="current-project"
            className="mt-[clamp(2.25rem,7vh,4.5rem)] text-left"
          >
            <p
              id="current-project"
              className="mb-3 text-[11px] uppercase tracking-[0.2em] text-white/45"
            >
              Currently building
            </p>
            <a
              href="https://mutethenoise.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-[clamp(1rem,3vw,1.5rem)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
            >
              <span className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-black/10 text-xs font-medium tracking-[0.18em] text-white/80 sm:size-14">
                MTN
              </span>
              <span className="min-w-0">
                <span className="block text-base tracking-[0.02em] sm:text-lg">
                  MuteTheNoise
                </span>
                <span className="mt-1 block text-xs leading-5 tracking-normal text-white/55 sm:text-sm">
                  A focused desktop workspace for monitoring automated trading
                  strategies.
                </span>
              </span>
              <svg
                aria-hidden="true"
                className="size-5 text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white/80"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  d="M4 10h11m-4-4 4 4-4 4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.25"
                />
              </svg>
            </a>
          </section>
        </div>
      </RepelGridBackground>
      <nav
        aria-label="Social links"
        className="fixed bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-4 whitespace-nowrap text-sm text-white/70 sm:left-4 sm:translate-x-0"
      >
        <a
          href="https://github.com/kisuyo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:scale-[1.02] cursor-pointer transition-all"
        >
          Github
        </a>
        <a
          href="https://x.com/KisuyoTT"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:scale-[1.02] cursor-pointer transition-all"
        >
          Twitter
        </a>
        <a
          href="https://discord.com/users/503533204259733504"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:scale-[1.02] cursor-pointer transition-all"
        >
          Discord
        </a>
      </nav>
    </main>
  );
}
