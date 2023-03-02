import { types } from "../actionTypes/actionTypes";

const initialState = {
    loginUserCredentials: {},
    errorMsg: ''
}

export const loginReducer = ( state = initialState, action) => {
    switch (action.type) {
        case types.loginSuccess:
            return {
                ...state,
                loginUserCredentials: action.payload
            }
            
        case types.loginFailed:
            return {
                ...state,
                errorMsg: action.payload
            }

        default:
            return state;
    }
}