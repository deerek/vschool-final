import React from 'react'

function BrandCardHeader(props) {
    return (
        <div className="athlete-card-header">
            <div className="athlete-event-finish">
                <h1>{props.finishingPlace}</h1>
            </div>
            <div className="athlete-event-info">
                <h3>{props.eventName}</h3>
                <h5>{props.eventCategory}</h5>
            </div>
        </div>
    )
}

export default BrandCardHeader;
