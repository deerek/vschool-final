import React, { Component } from 'react'


// COMPONENTS
import UserInfo from './components/UserInfo';
import FollowsBar from './components/FollowsBar';
import SponsorsBar from './components/SponsorsBar';
import Feed from '../home/components/Feed';
import Header from '../Header';

class Profile extends Component {
    constructor() {
        super();
        this.state ={
            activeUser: false
        }
    }
    render(props) {
        return (
            <div className="profile-wrapper">
                <Header />
                <div className="profile-user-info">
                    <UserInfo firstName={this.props.firstName} lastName={this.props.lastName} username={this.props.username} bio={this.props.bio} />
                    <FollowsBar followers={this.props.followers} following={this.props.following} />
                    <SponsorsBar sponsors={this.props.sponsors} />
                </div>
                <div className="profile-feed-wrapper">
                    <Feed />
                </div>
            </div>
        )
    }
}

export default Profile;