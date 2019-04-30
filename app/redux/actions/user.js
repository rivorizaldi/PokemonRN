import { login } from "../api/api";
import { STORE_USER_DATA } from "./constants";

export const loginUser = (email, password) => {
    return {
        type: STORE_USER_DATA,
        payload: login(email, password)
    };
};
