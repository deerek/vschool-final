import React from 'react';
import { Link } from 'react-router-dom';

import "../profile.css";
import Avatar from '../../Avatar';


function UserInfo(props) {
    return (
        <div className="user-info-wrapper">
            <div className="user-info-flex">
                <Avatar />
                <div className="user-names-wrapper">
                    <h3>Derek Bodily</h3>
                    <h5>@username</h5>
                </div>
            </div>
            <p>Bio about this particular user goes here and they talk about all the things they do and it is probably a limit of 500 characters</p>
            <Link to="/edit-profile">
                <button>Edit Profile</button>
            </Link>
        </div>
    )
}

export default UserInfo;
