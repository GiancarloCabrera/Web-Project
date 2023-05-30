import { types } from "../actionTypes/actionTypes";

export const loginUser = (user) => {
  console.log(user);
  return async (dispatch) => {
    const userLogged = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      // Remember to stringify our data
      body: JSON.stringify(user),
    });
    console.log(userLogged);
    const data = await userLogged.json();
    console.log(data);
  };
};

export const loginSuccess = (email, password) => {
  return {
    type: types.loginSuccess,
    payload: {
      email,
      password,
    },
  };
};

export const loginFailed = (errorMsg) => {
  return {
    type: types.loginFailed,
    payload: errorMsg,
  };
};
