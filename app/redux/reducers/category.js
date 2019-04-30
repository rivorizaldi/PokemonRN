import { FETCH_POKEMON_CATEGORY } from "../actions/constants";

const initialState = {
    pokemonCategory: [],
    isFulfilled: false,
    isRejected: false,
    isPending: false,
    error: ""
};

const category = (state = initialState, action) => {
    switch (action.type) {
        case `${FETCH_POKEMON_CATEGORY}_PENDING`:
            return {
                ...state,
                pokemonCategory: [],
                isPending: true
            };
        case `${FETCH_POKEMON_CATEGORY}_FULFILLED`:
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                pokemonCategory: action.payload
            };
        case `${FETCH_POKEMON_CATEGORY}_REJECTED`:
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

export default category;
