import { createSignal } from "solid-js";

export const [searchText, setSearchText] = createSignal("");
export const [filter, setFilter] = createSignal(0);