'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface LoginState {
    loginUserCredentials: object,
    errorMsg: string
}

const initialState: LoginState = {
    loginUserCredentials: {},
    errorMsg: ''
}

export const loginState = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginUserSuccess: (state, action) => {
            state.loginUserCredentials = action.payload
        }
    }
})

export const { loginUserSuccess } = loginState.actions;

export const loginUserAction = (user: any) => async (dispatch: any) => {
    dispatch(loginUserSuccess(user));
}

export default loginState.reducer;