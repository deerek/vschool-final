import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';
import { loadMyContents } from '../redux/aContent';
import { loadMyContents as loadMyBrandContents } from '../redux/bContent';
import { authenticate } from "../redux/auth";

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
        this.follow = this.follow.bind(this);
    }


    follow() {
        const { contentType, userId } = this.props.match.params;
        const { _id, userType } = this.props.auth.user;
        if (userId === _id) {
            alert("You're not that cool bruh");
            return;
        };
        let victimType = contentType === "athlete" ? "athletes" : "brands";
        userAxios.put(`/api/${victimType}/${userId}/follow/${_id}/${userType}`)
            .then(response => {
                const { stalker, victim } = response.data;
                this.setState({ user: victim });
                return stalker;
            })
            .then(stalker => this.props.authenticate(stalker))
            .catch(err => this.setState({ err}))
        // send PUT request containing userID and athlete/brandID
        // with response setState to contain the updated 'followers' array from the athlete/brand

        //IN REDUX:
        // update the logged in user with correct 'following' array
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
                        <div className="profile-outer-wrapper">
                            <Header />

                            <div className="profile-user-info">
                                <UserInfo public {...user} follow={this.follow} />
                            </div>
                            <div className="profile-feed-wrapper">
                                <ProfileFeed contents={contents} />

                            <div className="profile-content-wrapper">
                                <div className="profile-user-info">
                                    <UserInfo public {...user}/>
                                </div>
                                <div className="profile-feed-wrapper">
                                    <ProfileFeed contents={contents} />
                                </div>
                            </div>
                            </div>
                        </div>
                    ))
            }
}

export default connect(state => state, { loadMyContents, loadMyBrandContents, authenticate })(Profile);