import React, { Component } from 'react'


// COMPONENTS
import UserInfo from './components/UserInfo';
import FollowsBar from './components/FollowsBar';
import SponsorsBar from './components/SponsorsBar';
import Feed from '../home/components/Feed';
import Header from '../Header';

class Profile extends Component {
    render() {
        return (
            <div className="profile-wrapper">
                <Header />
                <div className="profile-user-info">
                    <UserInfo />
                    <FollowsBar />
                    <SponsorsBar />
                </div>
                <div className="profile-feed-wrapper">
                    <Feed />
                </div>
            </div>
        )
    }
}

export default Profile;