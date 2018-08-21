import axios from 'axios'

const athleteAxios = axios.create()

athleteAxios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});


///////////////////////////
// Athlete Content Reducer:
///////////////////////////
const initialContents = []

export default function contentsReducer(contents = initialContents, action) {
    switch (action.type) {
        case "SET_ATHLETE_CONTENTS":
            return [...action.contents]
        case "LOGOUT":
            return initialContents;
        default:
            return contents
    }
}

const contentUrl = "/api/athleteContent/"


///////////////////////////////////
// Athlete Content Action Creators:
///////////////////////////////////

function setContents(contents) {
    return {
        type: "SET_ATHLETE_CONTENTS",
        contents
    }
}

export function loadContents() {
    return dispatch => {
        athleteAxios.get(contentUrl + "public")
            .then(response => {
                dispatch(setContents(response.data));
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function loadMyContents() {
    return dispatch => {
        athleteAxios.get(contentUrl)
            .then(response => {
                dispatch(setContents(response.data));
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function addContent(content) {
    return dispatch => {
        return athleteAxios.post(contentUrl, content)
            .then(response => {
                dispatch(loadContents());
            })
        // let promise;
        //     return promise.then(response => {
        //         localStorage.setItem("user", JSON.stringify(response.data));
        //         dispatch(addContent(response.data));
        // })
            .catch(err => {
                console.error(err);
            })
    }
}

export function editContent(id, content) {
    return dispatch => {
        athleteAxios.put(contentUrl + id, content)
            .then(response => {
                dispatch(loadContents());
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function deleteContent(id) {
    return dispatch => {
        athleteAxios.delete(contentUrl + id)
            .then(response => {
                dispatch(loadContents());
            })
            .catch(err => {
                console.error(err);
            })
    }
}



