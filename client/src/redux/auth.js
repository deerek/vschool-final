import axios from "axios";

const profileAxios = axios.create();
profileAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const initialState = {
    user: {
        username: "",
        admin: false,
        _id: ""
    },
    authErrCode: {
        signup: "",
        login: ""
    },
    isAuthenticated: false,
    loading: true
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                user: action.user,
                isAuthenticated: true,
                authErrCode: initialState.authErrCode,
                loading: false
            }

        case "LOGOUT":
            return {
                ...initialState,
                loading: false
            }

        case "AUTH_ERROR":
            return {
                ...state,
                authErrCode: {
                    ...state.authErrCode,
                    [action.key]: action.errCode
                },
                loading: false
            }
        default:
            return state;

    }
}

export function authenticate(user) {
    return {
        type: "AUTHENTICATE",
        user
    }
}

export function signup(userInfo) {
    return dispatch => {
        axios.post("/auth/signup", userInfo)
            .then(response => {
                // console.log(response.data);
                const { token, user } = response.data;
                localStorage.token = token
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user));
            })
            .catch(err => {
                console.error(err);
                dispatch(authError("signup", err.response.status));
            })
    }
}

export function login(credentials) {
    return dispatch => {
        axios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.token = token
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user));
            })
            .catch((err) => {
                console.error(err);
                dispatch(authError("login", err.response.status));
            });
    }
}

export function verify() {
    return dispatch => {
        //find out the user type from local storage
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) return dispatch(authError("verify", 401));
        let promise;
        switch (user.userType) {
            case "athlete":
                promise = profileAxios.get("/api/athletes")
                break;
            case "brand":
                promise = profileAxios.get("/api/brands");
        }
        promise.then(response => {
            let { user } = response.data;
            dispatch(authenticate(user));
        })
            .catch(err => {
                dispatch(authError("verify", err.response.status));
            });
    }
}

export function logout() {
    delete localStorage.token;
    delete localStorage.user;
    return {
        type: "LOGOUT"
    }
}

function authError(key, errCode) {
    return {
        type: "AUTH_ERROR",
        key,
        errCode
    }
}

