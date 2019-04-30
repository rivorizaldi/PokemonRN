import { FETCH_POKEMON_TYPE } from "../actions/constants";

const initialState = {
    pokemonType: [],
    isFulfilled: false,
    isRejected: false,
    isPending: false,
    error: ""
};

const types = (state = initialState, action) => {
    switch (action.type) {
        case `${FETCH_POKEMON_TYPE}_PENDING`:
            return {
                ...state,
                pokemonType: [],
                isPending: true
            };
        case `${FETCH_POKEMON_TYPE}_FULFILLED`:
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                pokemonType: action.payload
            };
        case `${FETCH_POKEMON_TYPE}_REJECTED`:
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

export default types;
