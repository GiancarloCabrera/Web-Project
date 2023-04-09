import axios from "axios";
import Swal from "sweetalert2";
import { types } from "../actionTypes/actionTypes";

export const registerUser = ( user ) => {
    const { name, email, password } = user;
    return async ( dispatch ) => {
        try {
            const { data: { uid, name, token }} = await axios.post('localhost:8000/api/auth/newUser', 
                {
                    name,
                    email,
                    password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            // PENDING TO ADD THE TKN TO THE SESSION STORAGE
            dispatch(registerSuccess( uid, name, token ));
            Swal.fire({
                title: "Registered Successfully!",
                icon: 'success',
                timer: 1600,
                showConfirmButton: false,
            });
        } catch (error) {
            console.log(error);
            dispatch(registerFailed(error.response.data.msg));
            Swal.fire({
                title: error.response.data.msg,
                icon: 'error',
                timer: 1600,
                showConfirmButton: false,
            });
        }
    }
}

const registerSuccess = ( name, email, password ) => {
    return {
        type: types.registerSuccess,
        payload: {
            name,
            email,
            password
        }
    }
}

const registerFailed = ( errorMsg ) => {
    return {
        type: types.registerFailed,
        payload: errorMsg
    }
}
