import { Show, createEffect } from "solid-js";
import { useGlobal } from "~/Global/global";
import Hero from "~/components/ScrollPage/Hero";
import Info from "~/components/ScrollPage/Info";
import Intro from "~/components/ScrollPage/Intro";
import Projects from "~/components/ScrollPage/Projects";

export default function scroll() {
  const global = useGlobal();
  createEffect(() => {
    document.addEventListener("scroll", () => {
      if (
        scrollY > 3000 &&
        scrollY <= 3800 &&
        global.global.phase !== "Projects"
      ) {
        global.setPhase("Projects");

        return;
      }
      if (scrollY > 2200 && scrollY <= 3000 && global.global.phase !== "Info") {
        global.setPhase("Info");

        return;
      }

      if (scrollY > 800 && scrollY <= 2200 && global.global.phase !== "Intro") {
        global.setPhase("Intro");

        return;
      }
      if (scrollY > 0 && scrollY <= 600 && global.global.phase !== "Hero") {
        global.setPhase("Hero");

        return;
      }
    });
  });
  return (
    <>
      <style>
        {`

      `}
      </style>
      <main class="dark:bg-[#151515] w-screen h-full dark:text-white">
        {/* <Nav></Nav> */}
        <div class="h-[5000px] w-full relative">
          <div class="sticky top-0 left-0 w-full h-screen">
            <Hero></Hero>
            <Show when={global.global.phase === "Intro"}>
              <Intro></Intro>
            </Show>
            <Show when={global.global.phase === "Info"}>
              <Info></Info>
            </Show>
            <Show when={global.global.phase === "Projects"}>
              <Projects></Projects>
            </Show>
            {/* <Info></Info> */}
          </div>
        </div>
      </main>
    </>
  );
}
