import { types } from "../actionTypes/actionTypes"

export const loginUser = (user) => {
    console.log(user);
    const { email } = user;
    return async (dispatch) =>  {
        // const userLogged = await fetch('http://localhost:8000/api/auth/login', {
        //     method: 'POST',
        //     mode: 'no-cors',
        //     cache: "no-cache", 
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     // Remember to stringify our data
        //     body: JSON.stringify(user)
        // })
        // console.log(userLogged);
        // const data = await userLogged.json();
        // console.log(data);
        dispatch(loginSuccess(email))
    }
}

export const loginSuccess = ( email, name ) => {
    return {
        type: types.loginSuccess,
        payload: {
            email
        }
    }
}

export const loginFailed = ( errorMsg ) => {
    return {
        type: types.loginFailed,
        payload: errorMsg
    }
}