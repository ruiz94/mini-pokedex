import { ADD_POKEMON } from "./actionTypes";

export const addNewPokemon = pokemon => ({
  type: ADD_POKEMON,
  payload: pokemon
})