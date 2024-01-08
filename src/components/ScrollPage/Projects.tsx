import TextAnim from "../TextAnim";

export default function Projects() {
  return (
    <div class="flex items-center justify-center w-full p-4 gap-4 h-full">
      <div class="w-full border-dark h-full rounded-md animate-SlideRight relative overflow-hidden">
        <div class="w-full h-[40%] bg-red-500"></div>
        <div class="p-[32px] flex flex-col gap-2">
          <div class="text-[#f6b092] text-[28px] font-semibold ">KusKus</div>
          <div class="flex flex-col text-[14px] text-[#afafaf86] pl-2">
            <div>Fast Todo App with AI Features</div>
            <div>Fully keyboard driven</div>
          </div>
        </div>
        <a
          href="https://github.com/kuskusapp"
          target="_blank"
          class="absolute bottom-4 opacity-30 left-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
      <div class="w-full flex items-center justify-center flex-col">
        <div class="font-bold text-[3.5rem] text-[#f6b092]">
          <TextAnim text="Projects" phase="Projects"></TextAnim>
        </div>
        <div class="animate-TextSlide text-[14px] text-center w-2/3 text-[#afafaf86]">
          These are the two main projects ive been focusing on.
        </div>
      </div>
      <div class="w-full border-dark h-full rounded-md relative animate-SlideLeft overflow-hidden">
        <div class="w-full h-[40%] bg-red-500"></div>
        <div class="p-[32px] flex flex-col gap-2">
          <div class="text-[#f6b092] text-[28px] font-semibold ">
            Learn Anything
          </div>
          <div class="flex flex-col text-[14px] text-[#afafaf86] pl-2">
            <div>Honestly im fucking tired idk what to write</div>
            <div>an app that works</div>
          </div>
        </div>
        <a
          href="https://github.com/learn-anything"
          target="_blank"
          class="absolute bottom-4 opacity-30 left-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
