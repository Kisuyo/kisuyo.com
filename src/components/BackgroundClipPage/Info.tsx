export default function Info() {
  return (
    <div
      id="About"
      class="w-screen h-screen flex flex-col gap-[64px] items-center p-[64px]"
    >
      <div class="bg-[#C3E2C2] w-full p-[40px] rounded-lg font-bold text-[3rem]">
        <div class="w-[400px]">
          Somethings to know <span class="text-[#85b484]">About me!</span>
        </div>
      </div>
      <div class="[&>*]:bg-white text-black font-bold p-[40px] text-[20px] [&>*]:rounded-lg [&>*]:p-[14px] flex flex-wrap [&>*]:w-fit gap-[14px] justify-center">
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
