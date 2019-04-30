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

// export const storeUserData = (email, password) => {
//     return new Promise((resolve, reject) => {
//         axios.post(userLoginEndpoint, { email, password }).then(res => {
//             return resolve(res.data);
//         });
//     });
// };

// export const getCartList = () => {
//     return new Promise((resolve, reject) => {
//         axios.get(ordersEndpoint).then(res => {
//             return resolve(res.data.data);
//         });
//     });
// };

// export const storeCartItem = (id, qty, price) => {
//     return new Promise((resolve, reject) => {
//         axios
//             .post(ordersEndpoint, {
//                 product_id: id,
//                 qty: qty,
//                 price: price
//             })
//             .then(res => {
//                 return resolve(res.data.data);
//             });
//     });
// };

// export const updateCartList = arr => {
//     return new Promise((resolve, reject) => {
//         arr.forEach(obj => {
//             axios
//                 .patch(`${ordersEndpoint}/${obj.id}`, {
//                     qty: obj.qty
//                 })
//                 .then(response => {
//                     return resolve(response.data.message);
//                 })
//                 .catch(function(error) {
//                     console.log(error);
//                 });
//         });
//     });
// };

// export const deleteCartItem = id => {
//     return new Promise((resolve, reject) => {
//         axios
//             .delete(`${ordersEndpoint}/${id}`)
//             .then(response => {
//                 return resolve(response.data.id);
//             })
//             .catch(function(error) {
//                 console.log(error);
//             });
//     });
// };

// export const login = user => {
//     return new Promise((resolve, reject) => {
//         axios.post(ordersEndpoint, user).then(res => {
//             return resolve(res.data.data);
//         });
//     });
// };

// export const storeUserData = (email, password) => {
//     return new Promise((resolve, reject) => {
//         axios.post(userLoginEndpoint, { email, password }).then(res => {
//             return resolve(res.data);
//         });
//     });
// };
