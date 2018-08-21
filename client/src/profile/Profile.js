import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';
import { loadMyContents } from '../redux/aContent';
import { loadMyContents as loadMyBrandContents } from '../redux/bContent';

//AXIOS
import axios from "axios";

// COMPONENTS
import UserInfo from './components/UserInfo';
// import FollowsBar from './components/FollowsBar';
// import SponsorsBar from './components/SponsorsBar';
import ProfileFeed from './components/ProfileFeed';
import Header from '../Header';

const userAxios = axios.create();
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            contents: [],
            loading: true,
            err: null
        }
    }



    componentDidMount() {
        const { contentType, userId } = this.props.match.params;
        const userType = contentType === "brand" ? "brands" : "athletes";
        userAxios.get(`/api/${userType}/${userId}`)
            .then(response => {
                this.setState({ user: response.data, loading: false });

                const contentUrlType = contentType === "brand" ? "brandContent" : "athleteContent";
                return userAxios.get(`/api/${contentUrlType}/public?user=${userId}`)
            })
            .then(response => this.setState({ contents: response.data }))
            .catch(err => this.setState({ err, loading: false }));
    }

    render() {
        const { loading, user, contents, err } = this.state;

        return (
            loading ?
                <div>...loading user data</div>
                :
                err ?
                    <div>Sorry there was a problem getting your data. What a loser</div>
                    :
                    (
                        <div className="profile-wrapper">
                            <Header />
                            <div className="profile-user-info">
                                <UserInfo public {...user}/>
                            </div>
                            <div className="profile-feed-wrapper">
                                <ProfileFeed contents={contents} />
                            </div>
                        </div>
                    ))
    }
}

export default connect(state => state, { loadMyContents, loadMyBrandContents })(Profile);