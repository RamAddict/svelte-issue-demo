import { writable } from "svelte/store";

export const btnStore = writable(new Array<HTMLElement>(1));
