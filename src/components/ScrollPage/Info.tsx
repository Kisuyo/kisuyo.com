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
        <div>I love playing Games and hanging out with friends</div>
        <div>
          My main focus is helping build Learn Anything. An open source website
          for learning any topic as fast as possible.
        </div>
        <div>
          I have also worked on KusKus, a fast todo app with Ai features
        </div>
        <div>I try to stay active on twitter and post my ideas there.</div>
        <div>You can have a look at my code on my Github.</div>
        <div>You can support what i do on Github. Thank you</div>
        <div>
          Feel free to ask me anything on discord or send me a message on
          twitter
        </div>
      </div>
    </div>
  );
}
