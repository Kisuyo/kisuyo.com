import TextAnim from "../TextAnim";

export default function Intro() {
  return (
    <div class="absolute w-full h-full flex flex-col items-center justify-center">
      <div class="text-[3.5rem] text-[#f6b092] font-bold">
        <TextAnim text="My name is Igor Voloboev" phase="Intro"></TextAnim>
      </div>
      <div class="animate-TextSlide text-[14px] text-[#afafaf86] w-1/2 text-center">
        As a backend developer skilled in Rust and GraphQL, I bring alot of
        knowledge towards that area. In addition to my proficiency in backend, I
        have learnt front-end development, having designed and maintained my own
        websites.
      </div>
    </div>
  );
}
