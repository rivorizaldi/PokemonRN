import {
    DELETE_POKEMON_DATA,
    FETCH_POKEMON_DETAIL,
    FETCH_POKEMON_LIST,
    STORE_POKEMON_DATA
} from "../actions/constants";

const initialState = {
    pokemonList: [],
    isFulfilled: false,
    isRejected: false,
    isPending: false,
    error: "",
    pokemonDetail: [],
    pokemonName: "",
    pokemonId: null
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
                pokemonDetail: action.payload,
                pokemonName: action.payload[0].name,
                pokemonId: action.payload[0].id
            };
        case `${FETCH_POKEMON_DETAIL}_REJECTED`:
            return {
                ...state,
                isRejected: true,
                isPending: false,
                error: action.payload
            };
        case `${STORE_POKEMON_DATA}_PENDING`:
            return {
                ...state,
                isPending: true
            };
        case `${STORE_POKEMON_DATA}_FULFILLED`:
            return {
                ...state,
                isFulfilled: true,
                isPending: false
            };
        case `${STORE_POKEMON_DATA}_REJECTED`:
            return {
                ...state,
                isRejected: true,
                isPending: false,
                error: "Something When Wrong"
            };
        case `${DELETE_POKEMON_DATA}_PENDING`:
            return {
                ...state,
                isPending: true
            };
        case `${DELETE_POKEMON_DATA}_FULFILLED`:
            return {
                ...state,
                isFulfilled: true,
                isPending: false
            };
        case `${DELETE_POKEMON_DATA}_REJECTED`:
            return {
                ...state,
                isRejected: true,
                isPending: false,
                error: "Something When Wrong"
            };

        default:
            return state;
    }
};

export default pokemon;
