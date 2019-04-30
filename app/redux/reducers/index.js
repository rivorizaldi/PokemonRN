import { combineReducers } from "redux";
import category from "./category";
import pokemon from "./pokemon";
import type from "./type";
import user from "./user";

const reducers = combineReducers({ pokemon, user, category, type });

export default reducers;
