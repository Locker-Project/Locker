import { createSignal } from "solid-js";

type selectedMusicType = { hasData: false, data: undefined } | { hasData: true, data: musicAsset };

export const [searchText, setSearchText] = createSignal("");
export const [filter, setFilter] = createSignal(0);
export const [selectedMusic, setSelectedMusic] = createSignal<selectedMusicType>({ hasData: false, data: undefined });
export const [difficulty, setDifficulty] = createSignal<difficulty>("easy")