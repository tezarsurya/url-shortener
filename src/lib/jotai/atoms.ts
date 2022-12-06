import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const urlAtom = atomWithStorage<Array<{}>>("shortenedLinks", []);

export const readOnlyUrlAtom = atom((get) => get(urlAtom));
