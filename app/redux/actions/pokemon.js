import { getPokemonDetail, getPokemonList } from "../api/api";
import { FETCH_POKEMON_DETAIL, FETCH_POKEMON_LIST } from "./constants";

export const fetchPokemonList = () => {
    return {
        type: FETCH_POKEMON_LIST,
        payload: getPokemonList()
    };
};

export const fetchPokemonDetail = id => {
    return {
        type: FETCH_POKEMON_DETAIL,
        payload: getPokemonDetail(id)
    };
};
