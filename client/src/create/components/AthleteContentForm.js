import React from 'react';

// STYLES
import '../create.css';

function AthleteContentForm(props) {
    return (
        <div className="athlete-content-form-wrapper">
            <h3>Athlete Post</h3>
            <form onSubmit={props.handleSubmit}className="athlete-content-form" action="">
                <input  placeholder="Media URL" 
                        name="media" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.media}/>
                <input  placeholder="Finishing Place" 
                        name="finishingPlace" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.finishingPlace}/>
                <input  placeholder="Event Name" 
                        name="eventName" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.eventName}/>
                <input  placeholder="Event Category" 
                        name="eventCategory" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.eventCategory}/>
                <input  placeholder="Event Date" 
                        name="place" 
                        type="date"
                        onChange={props.handleChange}
                        value={props.eventDate}/>
                <textarea   placeholder="Enter Details"    
                            name="details" 
                            cols="30" 
                            rows="10"
                            onChange={props.handleChange}
                            value={props.details}>
                </textarea>
                <button className="create-button-athlete" type="submit">Create</button>
            </form>
        </div>
    )
}

export default AthleteContentForm;
