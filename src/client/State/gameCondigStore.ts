import { createStore } from "solid-js/store";

type gameConfigStore = { ready: false, data: {} } | { ready: true, data: gameConfig }

export const [gameConfigStore, setGameConfigStore] = createStore<gameConfigStore>({ ready: false, data: {} });