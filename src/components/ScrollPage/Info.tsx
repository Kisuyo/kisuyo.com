import TextAnim from "../TextAnim";

export default function Info() {
  return (
    <div class=" h-full w-full absolute top-0 left-0  flex items-center justify-center">
      <div class="flex flex-col">
        <div class="font-bold text-[3.5rem] text-[#f6b092]">
          <TextAnim text="About" phase="Info"></TextAnim>
        </div>
        <div class="animate-TextSlide text-[14px] w-2/3 text-[#afafaf86]">
          Some information you might want to know about me.
        </div>
      </div>
      <div class="w-[800px] flex flex-wrap gap-2  relative [&>*]:transition-all [&>*]:text-[14px]  [&>*]:bg-neutral-800 [&>*]:border [&>*]:border-[#f6b092] [&>*]:rounded-[4px] [&>*]:w-fit [&>*]:p-2 [&>*]:px-4 ">
        <div class="hover:scale-[1.1]">
          👋 I love <a>making</a> and <a>sharing</a> things.
        </div>{" "}
        <div class="hover:scale-[1.1]">
          🖋 I share <a>everything I know</a> in form of a <a>personal wiki</a>.
        </div>
        <div class="hover:scale-[1.1]">
          💻 I share a <a>course on macOS automation</a>, teaching how to use
          macOS fast with <a>Karabiner</a> and <a>many more tools</a>.
        </div>
        <div class="hover:scale-[1.1]">
          ✨ Building <a>KusKus</a>, a fast todo app with AI features.
        </div>
        <div class="hover:scale-[1.1]">
          📚 Together with <a>Learn Anything</a>, an <a>open source</a> website
          for <a>learning any topic as fast as possible</a>.
        </div>
        <div class="hover:scale-[1.1]">
          🌐 I share my thoughts on <a>Twitter</a>. I share my <a>code</a> on
          <a>GitHub</a> and you can see photos I took on <a>Instagram</a>.
        </div>
        <div class="hover:scale-[1.1]">
          🎥 I also make educational <a>YouTube videos</a> and share{" "}
          <a>music playlists</a>.
        </div>
        <div class="hover:scale-[1.1]">
          💻 I am passionate about <a>macOS</a> so I made a{" "}
          <a>Telegram group</a> to discuss all things macOS/iOS.
        </div>
        <div class="hover:scale-[1.1]">
          🐾 If you want to know even more about me, you can see{" "}
          <a>what I like</a>, read <a>my journal</a> or <a>explore the wiki</a>.
          You can also
          <a>search through the wiki quickly</a>.
        </div>
        <div class="hover:scale-[1.1]">
          ♥️ You can support what I do on <a>GitHub</a>. Thank you.
        </div>
        <div class="hover:scale-[1.1]">
          💬 Feel free to <a>ask me anything</a> or <a>send me message/tweet</a>
          .
        </div>
      </div>
    </div>
  );
}
