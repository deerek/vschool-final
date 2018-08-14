import React from 'react'
import Avatar from '../../Avatar';

import '../profile.css';

function SponsorsBar(props) {
    // const results = props.data;
    // let sponsors = results.map(content => <Avatar {...sponsor} key={sponsor._id} />)

    return (
        <div className="sponsors-bar-wrapper">
            <h3>Sponsors</h3>
            <div className="sponsors-carousel">
                {/* {sponsors} */}
                
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
