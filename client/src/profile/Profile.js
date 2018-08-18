import React, { Component } from 'react';


// COMPONENTS
import UserInfo from './components/UserInfo';
import FollowsBar from './components/FollowsBar';
import SponsorsBar from './components/SponsorsBar';
// import Feed from '../home/components/Feed';
import Header from '../Header';

class Profile extends Component {
    constructor() {
        super();
        this.state ={
            activeUser: false,
            userType: "",
            firstName: "",
            lastName: "",
            username: "",
            bio: "",
            sport: "",
            gender: "",
            followers: [],
            following: [],
            sponsors: []
        }
    }

    componentDidMount() {
        // this will be something from redux
        this.state.loadUser;
    }

    render() {
        return (
            <div className="profile-wrapper">
                <Header />
                <div className="profile-user-info">
                    <UserInfo   firstName={this.state.firstName} 
                                lastName={this.state.lastName} 
                                username={this.state.username} 
                                bio={this.state.bio} />
                    <FollowsBar followers={this.state.followers} following={this.state.following} />
                    <SponsorsBar sponsors={this.state.sponsors} />
                </div>
                <div className="profile-feed-wrapper">
                    
                </div>
            </div>
        )
    }
}

export default Profile;