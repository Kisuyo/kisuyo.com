import { A } from "@solidjs/router";
import { useGlobal } from "~/Global/global";

export default function Home() {
  const global = useGlobal();
  return <div>hi</div>;
}
