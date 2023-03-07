import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./reducers/loginReducer";

export const rootReducer = combineReducers({
    login: loginReducer
})