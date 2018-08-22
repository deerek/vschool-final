import React from 'react';

// STYLES
import '../create.css';

function AthleteContentForm(props) {
    return (
        <div className="brand-content-form-wrapper">
            <form onSubmit={props.handleSubmit}className="brand-content-form" action="">
                <div className="media-preview">
                    <img className="media-img" src={props.media} alt=""/>
                </div>
                <input  placeholder="Media URL" 
                        name="media" 
                        type="text" autocomplete="off"
                        onChange={props.handleChange}
                        value={props.media}/>
                <input  placeholder="Finishing Place" 
                        name="finishingPlace" 
                        type="text" autocomplete="off"
                        onChange={props.handleChange}
                        value={props.finishingPlace}/>
                <input  placeholder="Event Name" 
                        name="eventName" 
                        type="text" autocomplete="off"
                        onChange={props.handleChange}
                        value={props.eventName}/>
                <input  placeholder="Event Category" 
                        name="eventCategory" 
                        type="text" autocomplete="off"
                        onChange={props.handleChange}
                        value={props.eventCategory}/>
                <input  placeholder="Event Date" 
                        name="eventDate" 
                        type="date" autocomplete="off"
                        onChange={props.handleChange}
                        value={props.eventDate}/>
                <textarea   placeholder="Enter Details"    
                            name="details" 
                            rows="10"
                            autocomplete="off"
                            onChange={props.handleChange}
                            value={props.details}>
                </textarea>
                <button className="create-button-brand" type="submit">Create</button>
            </form>
        </div>
    )
}

export default AthleteContentForm;
