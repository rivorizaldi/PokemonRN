import {
    deletePokemonData,
    getPokemonDetail,
    getPokemonList,
    storePokemonItem
} from "../api/api";
import {
    DELETE_POKEMON_DATA,
    FETCH_POKEMON_DETAIL,
    FETCH_POKEMON_LIST,
    STORE_POKEMON_DATA
} from "./constants";

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

export const storePokemonData = data => {
    return {
        type: STORE_POKEMON_DATA,
        payload: storePokemonItem(data)
    };
};

export const deletePokemon = id => {
    return {
        type: DELETE_POKEMON_DATA,
        payload: deletePokemonData(id)
    };
};
