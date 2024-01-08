import clsx from "clsx";
import { For, JSXElement, Show, createSignal, onMount } from "solid-js";
import { useGlobal } from "~/Global/global";

interface Props {
  text: string;
  phase: string;
}

export default function TextAnim(props: Props) {
  const global = useGlobal();
  const [letters, setLetters] = createSignal(props.text.split(""));

  return (
    <div class="flex">
      <For each={letters()}>
        {(letter, i) => {
          let delay = 0.05 * i();

          return (
            <div
              class={clsx(
                "",
                global.global.phase !== props.phase &&
                  "animate-TextLeave opacity-1",
                global.global.phase === props.phase &&
                  "animate-TextPop opacity-0"
              )}
              style={{ "animation-delay": `${delay}s` }}
            >
              {letter.trim() !== "" ? (
                letter
              ) : (
                <span class="p-[0.4rem]"> </span>
              )}
            </div>
          );
        }}
      </For>
    </div>
  );
}
