import axios from "axios";
import {
    pokemonCategoryEndpoint,
    pokemonEndpoint,
    pokemonTypeEndpoint,
    userLoginEndpoint
} from "../../helper/routes";

export const getPokemonList = () => {
    return new Promise((resolve, reject) => {
        axios.get(pokemonEndpoint).then(res => {
            return resolve(res.data.data);
        });
    });
};

export const getPokemonDetail = id => {
    return new Promise((resolve, reject) => {
        axios.get(`${pokemonEndpoint}/${id}`).then(res => {
            return resolve(res.data.data);
        });
    });
};

export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        axios.post(userLoginEndpoint, { email, password }).then(res => {
            return resolve(res.data);
        });
    });
};

export const getPokemonCategories = () => {
    return new Promise((resolve, reject) => {
        axios.get(pokemonCategoryEndpoint).then(res => {
            return resolve(res.data.data);
        });
    });
};

export const getPokemonTypes = () => {
    return new Promise((resolve, reject) => {
        axios.get(pokemonTypeEndpoint).then(res => {
            return resolve(res.data.data);
        });
    });
};

export const storePokemonItem = data => {
    return new Promise((resolve, reject) => {
        axios.post(pokemonEndpoint, data).then(res => {
            return resolve(res.data.data);
        });
    });
};

export const deletePokemonData = id => {
    return new Promise((resolve, reject) => {
        axios.delete(`${pokemonEndpoint}/${id}`).then(res => {
            return resolve(res.data.id);
        });
    });
};
