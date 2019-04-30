import { FETCH_POKEMON_DETAIL, FETCH_POKEMON_LIST } from "../actions/constants";

const initialState = {
    pokemonList: [],
    isFulfilled: false,
    isRejected: false,
    isPending: false,
    error: "",
    pokemonDetail: []
};

const pokemon = (state = initialState, action) => {
    switch (action.type) {
        case `${FETCH_POKEMON_LIST}_PENDING`:
            return {
                ...state,
                pokemonList: [],
                isPending: true
            };
        case `${FETCH_POKEMON_LIST}_FULFILLED`:
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                pokemonList: action.payload
            };
        case `${FETCH_POKEMON_LIST}_REJECTED`:
            return {
                ...state,
                isRejected: true,
                isPending: false,
                error: action.payload
            };
        case `${FETCH_POKEMON_DETAIL}_PENDING`:
            return {
                ...state,
                pokemonDetail: [],
                isPending: true
            };
        case `${FETCH_POKEMON_DETAIL}_FULFILLED`:
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                pokemonDetail: action.payload
            };
        case `${FETCH_POKEMON_DETAIL}_REJECTED`:
            return {
                ...state,
                isRejected: true,
                isPending: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default pokemon;
