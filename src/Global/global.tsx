import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

type Global = {};

// TODO: add router
// currently using this store to do things router should do
// like `showSignIn`

// global state of user
export function createGlobalState() {
  const [global, setGlobal] = createStore<Global>({});

  return {
    // state
    global,
    // actions
    // setShowCommandPalette: (state: boolean) => {
    //   return setUser({ showCommandPalette: state });
    // },
  } as const;
}

const GlobalCtx = createContext<ReturnType<typeof createGlobalState>>();

export const GlobalProvider = GlobalCtx.Provider;

export const useGlobal = () => {
  const ctx = useContext(GlobalCtx);
  if (!ctx) throw new Error("useGlobal must be used within UserProvider");
  return ctx;
};
