import { createEffect } from "solid-js";
import TextAnim from "~/components/TextAnim";

export default function backgroundClip() {
  createEffect(() => {
    const introElement = document.getElementById("Intro");

    if (introElement) {
      console.log("hi");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // The "Intro" element has entered the viewport
              console.log("Intro is in the viewport");
              // You can perform additional actions or trigger animations here
            }
          });
        },
        { threshold: 0.5 } // Adjust the threshold based on your needs
      );

      observer.observe(introElement);

      // Cleanup the observer on component unmount
      return () => observer.disconnect();
    }
  });
  return (
    <div class="text-white">
      <div class="flex items-center  flex-col justify-center w-screen h-screen">
        <div class=" text-[3.5rem] font-bold">
          <TextAnim text="My name is Igor Voloboev" phase="Hero"></TextAnim>
        </div>
        <div class="opacity-30 w-1/2 text-center">
          As a front-end developer skilled in Tailwind and Solidjs. I bring alot
          of Knowledge towards that area. In addition to my proficiency in
          front-end ive learnt parts of back-end like sql and graphql.
        </div>
      </div>
      <div id="Intro" class="w-screen h-screen flex-center">
        Hi
      </div>
    </div>
  );
}
