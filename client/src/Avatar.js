import React, { Component } from 'react'

import { connect } from 'react-redux';

// import './app.css';
import defaultPhoto from "./images/defaultAvatar.png";

class Avatar extends Component {
    render() {
        return (
            <div  className="avatar-wrapper">
                <img src={this.props.user.avatar || defaultPhoto} alt=""/>
            </div>
        )
    }
}

export default connect(state => state.auth, {})(Avatar);