import React from 'react'

function BrandCardHeader(props) {
    return (
        <div className="brand-card-header">
            <div className="brand-event-date">
                <h1>{props.eventDate}</h1>
            </div>
            <h4>{props.eventName}</h4>
        </div>
    )
}

export default BrandCardHeader;
