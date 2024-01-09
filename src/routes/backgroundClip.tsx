import clsx from "clsx";
import { createEffect } from "solid-js";
import { useGlobal } from "~/Global/global";
import Info from "~/components/BackgroundClipPage/Info";
import Intro from "~/components/BackgroundClipPage/Intro";
import Projects from "~/components/BackgroundClipPage/Projects";
import TextAnim from "~/components/TextAnim";

export default function backgroundClip() {
  const global = useGlobal();
  createEffect(() => {
    const introElement = document.getElementById("Intro");
    const aboutElement = document.getElementById("About");
    const projectsElement = document.getElementById("Projects");

    const mainElement = document.getElementById("Main");

    if (introElement && aboutElement && mainElement && projectsElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target === introElement) {
              if (entry.isIntersecting) {
                global.setPhase("Intro");
                mainElement.style.background = "#f6b092";
              } else {
                global.setPhase("Hero");
                mainElement.style.background = "#1e1e1e";
              }
            }
            if (entry.target === aboutElement) {
              if (entry.isIntersecting) {
                global.setPhase("Info");
                mainElement.style.background = "#C3E2C2";
              } else {
                global.setPhase("Hero");
              }
            }
            if (entry.target === projectsElement) {
              if (entry.isIntersecting) {
                global.setPhase("Projects");
                mainElement.style.background = "#f4d3d8";
              } else {
                global.setPhase("Hero");
              }
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(introElement);
      observer.observe(aboutElement);
      observer.observe(projectsElement);

      return () => observer.disconnect();
    }
  });
  return (
    <div id="Main" class="text-white transition-all ">
      <div class="flex items-center  flex-col justify-center w-screen h-screen">
        <div class=" text-[3.5rem] font-bold">
          <TextAnim text="My name is Igor Voloboev" phase="Hero"></TextAnim>
        </div>
      </div>
      <Intro />
      <Info />
      <Projects />
    </div>
  );
}
