import RepelGridBackground from "@/components/RepelGridBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <RepelGridBackground>
        <div className="flex min-h-screen flex-col justify-center items-center text-start text-white nohemi text-[42px] md:text-[62px] tracking-[0.08em]">
          <h1>Hey, I'm Igor</h1>
          <p className="text-sm">
            I am a full stack software developer and game developer
          </p>
        </div>
      </RepelGridBackground>
      <div className="fixed bottom-4 left-4 z-10 flex gap-4 text-white/80">
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
        <a
          href="https://www.roblox.com/users/308698498/profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:scale-[1.02] cursor-pointer transition-all"
        >
          Roblox
        </a>
      </div>
    </main>
  );
}
