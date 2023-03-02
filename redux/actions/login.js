import { types } from "../actionTypes/actionTypes"

export const loginUser = ( email, password ) => {
    return (dispatch) =>  {

    }
}

export const loginSucces = ( email, password ) => {
    return {
        type: types.loginSuccess,
        payload: {
            email,
            password
        }
    }
}

export const loginFailed = ( errorMsg ) => {
    return {
        type: types.loginFailed,
        payload: errorMsg
    }
}