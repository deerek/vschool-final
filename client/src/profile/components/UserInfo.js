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
                    <h3>{props.firstName} {props.lastName}</h3>
                    <h5>{props.username}</h5>
                </div>
            </div>
            <p>{props.bio}</p>
            <Link to="/edit-profile">
                <button>Edit Profile</button>
            </Link>
        </div>
    )
}

export default UserInfo;

