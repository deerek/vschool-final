import React, { Component } from 'react'

import { connect } from 'react-redux';

// import './app.css';
import defaultPhoto from "./images/defaultAvatar.png";

function Avatar(props) {
    return (
        <div className="avatar-wrapper">
            <img src={props.imgUrl || defaultPhoto} alt="" />
        </div>
    )
}

export default Avatar;