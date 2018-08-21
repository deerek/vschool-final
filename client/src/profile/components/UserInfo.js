import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import "../profile.css"
import Avatar from '../../Avatar'
import FollowButton from '../FollowButton'
import SponsorButton from '../SponsorButton'

function UserInfo(props) {
    return (
        <div className="user-info-wrapper">
            <div className="user-info-flex">
                <Avatar />
                <div className="user-names-wrapper">
                    <h3>{props.firstName} {props.lastName}</h3>
                    <h5>{props.username}</h5>
                </div>
            </div>
            <p>{props.bio}</p>
            {!props.public && <Link to="/edit-profile">
                <button>Edit Profile</button>
            </Link>}

            {/* sponsor only if logged in user is brand and profile is athlete*/}
            {props.public && <FollowButton />}
            {props.public && props.userType === "athlete" && props.auth.user.userType === "brand" && <SponsorButton />}
        </div>
    )
}

export default connect(state => state, {})(UserInfo)

