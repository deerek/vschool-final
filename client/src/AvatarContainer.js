import React, { Component } from 'react';
import axios from "axios";

import Avatar from "./Avatar";

const userAxios = axios.create();
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})



export default class AvatarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: ""
        }
    }

    componentDidMount() {
        const { userId, userType } = this.props;
        userAxios.get(`/api/${userType}/${userId}`)
            .then(response => this.setState({ imgUrl: response.data.avatar }))
            .catch(err => console.error(err));
        //handle the setState in a second
    }
    render() {
        return (
            <Avatar imgUrl={this.state.imgUrl} />
        )
    }
}
