import { getPokemonCategories } from "../api/api";
import { FETCH_POKEMON_CATEGORY } from "./constants";

export const fetchPokemonCategory = () => {
    return {
        type: FETCH_POKEMON_CATEGORY,
        payload: getPokemonCategories()
    };
};
