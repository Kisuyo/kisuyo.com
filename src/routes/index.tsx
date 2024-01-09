import { A, Navigate, useNavigate } from "@solidjs/router";
import { createSignal, onMount } from "solid-js";
import { useGlobal } from "~/Global/global";

export default function Home() {
  const [routes, setRoutes] = createSignal(["scroll", "backgroundclip"]);
  const navigate = useNavigate();
  const global = useGlobal();
  onMount(() => {
    navigate(routes()[Math.floor(Math.random() * routes().length)]);
  });
  return <div class="text-white">hi</div>;
}
