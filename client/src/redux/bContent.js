import axios from 'axios'

const brandAxios = axios.create()

// brandAxios.interceptors.request.use((config)=>{  
//     const token = localStorage.getItem("token");
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
// });


/////////////////////////
// Brand Content Reducer:
/////////////////////////
const initialContents = []

export default function contentsReducer(contents = initialContents, action) {
    switch (action.type) {
        case "SET_CONTENTS":
            return [...action.contents]
        case "LOGOUT":
            return initialContents;
        default:
            return contents
    }
}

const SET_CONTENTS = "SET_CONTENTS"
const contentUrl = "/api/brandContent/"

/////////////////////////////////
// Brand Content Action Creators:
/////////////////////////////////

function setContents(contents) {
    return {
        type: SET_CONTENTS,
        contents
    }
}

export function loadContents() {
    return dispatch => {
        brandAxios.get(contentUrl)
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
        brandAxios.post(contentUrl, content)
            .then(response => {
                dispatch(loadContents());
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function editContent(id, content) {
    return dispatch => {
        brandAxios.put(contentUrl + id, content)
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
        brandAxios.delete(contentUrl + id)
            .then(response => {
                dispatch(loadContents());
            })
            .catch(err => {
                console.error(err);
            })
    }
}



