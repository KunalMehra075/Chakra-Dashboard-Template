import * as types from "./Auth.types";

const UserInitState = {
    token: JSON.parse(localStorage.getItem("admin_login_token")),
    isAuth: JSON.parse(localStorage.getItem("admin_login_token")) ? true : false,
    Userdata: JSON.parse(localStorage.getItem("Userdata")) || null,
    loading: false,
    error: false,
};

export const UserAuthReducer = (state = UserInitState, { type, payload }) => {
    switch (type) {
        case types.USER_AUTH_LOGIN_LOADING: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case types.USER_AUTH_LOGIN_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }

        case types.USER_AUTH_LOGIN_SUCCESS: {
            localStorage.setItem("admin_login_token", JSON.stringify(payload?.token));
            localStorage.setItem("Userdata_tempapp", JSON.stringify(payload?.user));
            return {
                ...state,
                loading: false,
                error: false,
                isAuth: true,
                token: payload?.token,
                Userdata: payload?.user
            };
        }

        case types.USER_LOGOUT: {
            localStorage.removeItem("admin_login_token");
            localStorage.removeItem("Userdata_tempapp");
            return {
                ...state,
                isAuth: false,
                token: null,
                Userdata: null
            };
        }

        default: {
            return state;
        }
    }
};
