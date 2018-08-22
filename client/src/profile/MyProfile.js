import React, { Component } from 'react'

// REDUX
import { connect } from 'react-redux'
import { loadMyContents } from '../redux/aContent'
import { loadMyContents as loadMyBrandContents } from '../redux/bContent'

import './profile.css';

// COMPONENTS
import UserInfo from './components/UserInfo'
// import FollowsBar from './components/FollowsBar'
// import SponsorsBar from './components/SponsorsBar'
import ProfileFeed from './components/ProfileFeed'
import Header from '../Header'

class MyProfile extends Component {

    componentDidMount() {
        this.props.loadMyContents();
        this.props.loadMyBrandContents();
    }

    render() {
        return (
            <div className="profile-wrapper">
                <Header />
                <div className="profile-user-info">
                    <UserInfo   {...this.props.auth.user} />
                </div>
                <div className="profile-feed-wrapper">
                    <ProfileFeed contents={this.props.auth.user.userType === "athlete" ? this.props.aContent : this.props.bContent}/>
                </div>
            </div>
        )
    }
}

export default connect(state => state, {loadMyContents, loadMyBrandContents})(MyProfile);