import { atom } from "jotai";

export const countAtom = atom(0);
export const doubleCountAtom = atom((get) => get(countAtom) * 2);
export const isCountEvenAtom = atom((get) => (get(countAtom) % 2 === 0))

export const incrementCountAtom = atom(
    (get) => get(countAtom), 
    (get, set, _arg) => set(countAtom, get(countAtom) + 1)
)

export const decrementCountAtom = atom(
    null,
    (get, set, _arg) => set(countAtom, get(countAtom) - 1)
)