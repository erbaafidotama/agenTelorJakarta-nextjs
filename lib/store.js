import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let useStore = (set) => ({
  pokemons: [
    { id: 1, name: "Bulbasaur" },
    { id: 2, name: "Ivysaur" },
    { id: 3, name: "Venusaur" },
    { id: 4, name: "Charmander" },
    { id: 5, name: "Charmeleon" },
  ],
  telors: [
  ],
  addPokemons: (pokemon) =>
    set((state) => ({
      pokemons: [
        { name: pokemon.name, id: Math.random() * 100 },
        ...state.pokemons,
      ],
    })),
  removePokemon: (id) =>
    set((state) => ({
      pokemons: state.pokemons.filter((pokemon) => pokemon.id !== id),
    })),
  addTelor: (payload) =>
    set((state) => ({
      telors: [payload.jumlah_telor],
    })),
});

useStore = devtools(useStore);

export default useStore = create(useStore);
