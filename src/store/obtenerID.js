import { create } from "zustand";

export const ObtenerID = create((set) => ({
  obtenerId: null,
  setObtenerId: (value) => set({ obtenerId: value }),
}));
