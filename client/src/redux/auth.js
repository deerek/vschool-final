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
        userType: "",
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
                localStorage.setItem("user", JSON.stringify(user));
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
                break;
            default:
                return null;
        }
        promise.then(response => {
            dispatch(authenticate(response.data));
        })
            .catch(err => {
                dispatch(authError("verify", err.response.status));
            });
    }
}

export function editProfile(userInfo) {
    return dispatch => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) return dispatch(authError("edit user", 401));
        let promise;
        switch (user.userType) {
            case "athlete":
                promise = profileAxios.put("/api/athletes", userInfo)
                break;
            case "brand":
                promise = profileAxios.put("/api/brands", userInfo);
                break;
            default:
                return null;
        }
         return promise.then(response => {
                localStorage.setItem("user", JSON.stringify(response.data));
                dispatch(authenticate(response.data));
        })
            .catch(err => {
                dispatch(authError("edit profile", err.response.status));
            });

        //we need to send a PUT request to either athletes route or brands route

        //check userType
        // send a request to the correct url (e.g PUT "/api/athletes/")
        // then dispatch an action called "EDIT_USER" containing response.data
        // update localstorage with response.data as well
        // handle the case in the reducer, replaceing the user object with the 


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

