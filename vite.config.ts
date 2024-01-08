import { defineConfig } from "@solidjs/start/config";
import solid from "solid-start/vite";

export default defineConfig({
  plugins: [solid({ ssr: false })],
});
