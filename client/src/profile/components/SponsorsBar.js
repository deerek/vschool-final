import React from 'react'
import Avatar from '../../Avatar';

import '../profile.css';

function SponsorsBar(props) {
    return (
        <div className="sponsors-bar-wrapper">
            <h3>Sponsors</h3>
            <div className="sponsors-carousel">
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
            </div>
        </div>
    )
}

export default SponsorsBar;
