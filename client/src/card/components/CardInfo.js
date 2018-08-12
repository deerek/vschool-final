import React from 'react'
import Avatar from '../../Avatar';

import "../../app.css";


function CardInfo(props) {
    return (
        <div className="card-info-wrapper">
            <div className="card-info-top">
                <Avatar user={props.user} />
                <h5 username={props.username}>username</h5>
                <h6 time={props.createdAt}>Time Stamp</h6>
            </div>
            <p caption={props.caption}>Caption goes in this spot right here</p>
            
        </div>
    )
}

export default CardInfo;