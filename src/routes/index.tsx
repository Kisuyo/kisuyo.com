import { A, Navigate, useNavigate } from "@solidjs/router";
import { onMount } from "solid-js";
import { useGlobal } from "~/Global/global";

export default function Home() {
  const navigate = useNavigate();
  const global = useGlobal();
  onMount(() => {
    navigate("/backgroundClip");
  });
  return <div class="text-white">hi</div>;
}
