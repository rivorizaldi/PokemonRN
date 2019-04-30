import { getPokemonTypes } from "../api/api";
import { FETCH_POKEMON_TYPE } from "./constants";

export const fetchPokemonType = () => {
    return {
        type: FETCH_POKEMON_TYPE,
        payload: getPokemonTypes()
    };
};
