import React from 'react';

// STYLES
import '../create.css';

function AchievmentForm(props) {
    return (
        <div className="achievment-form-wrapper">
            <h3>Achievment Post</h3>
            <form className="achievment-form" action="">
                <input placeholder="Finishing Place" name="place" type="text"/>
                <input placeholder="Event Name" name="eventName" type="text"/>
                <input placeholder="Event Date" name="place" type="date"/>
                <textarea placeholder="Enter Details" name="details" cols="30" rows="10"></textarea>
            </form>
        </div>
    )
}

export default AchievmentForm;
