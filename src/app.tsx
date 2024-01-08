// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";

import "./app.css";
import { createGlobalState, GlobalProvider } from "./Global/global";

export default function App() {
  const global = createGlobalState();
  return (
    <GlobalProvider value={global}>
      <Router
        root={(props) => (
          <>
            <Suspense>{props.children}</Suspense>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </GlobalProvider>
  );
}
