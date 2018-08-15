import React from 'react'

// STYLES
import '../create.css';

function Caption(props) {
    return (
        <div className="caption-wrapper">
            <form className="caption-form" action="">
                <textarea placeholder="Enter caption" name="caption" cols="30" rows="10"></textarea>
            </form>
        </div>
    )
}

export default Caption;
