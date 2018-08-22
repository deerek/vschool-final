import React from 'react'

import TextFit from 'react-textfit';

function BrandCardHeader(props) {
    return (
        <div className="athlete-card-header">
            <TextFit mode="multi" min={50} max={120} className="athlete-event-finish">
                {props.finishingPlace}
            </TextFit>
            <div className="athlete-event-info">
                <h3>{props.eventName}</h3>
                <h5>{props.eventCategory}</h5>
            </div>
        </div>
    )
}

export default BrandCardHeader;
