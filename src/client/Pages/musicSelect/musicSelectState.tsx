import { createSignal } from "solid-js";

type selectedMusicType = { hasData: false, data: undefined } | { hasData: true, data: musicAsset };

export const [musicSearchText, setMusicSearchText] = createSignal("");
export const [musicFilter, setMusicFilter] = createSignal(0);
export const [selectedMusic, setSelectedMusic] = createSignal<selectedMusicType>({ hasData: false, data: undefined });
export const [musicDifficulty, setMusicDifficulty] = createSignal<difficulty>("easy")