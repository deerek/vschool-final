import React from 'react'


import "../profile.css";

function FollowsBar(props) {
    return (
        <div className="follows-bar-wrapper">
            <div className="followers-count">
                <h4>
                    <span>24</span> Followers
                </h4>
            </div>
            <div className="following-count">
                <h4>
                    <span>12</span> Following
                </h4>
            </div>
        </div>
    )
}

export default FollowsBar
