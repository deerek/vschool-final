import React from 'react';

// STYLES
import '../create.css';

function BrandContentForm(props) {
    return (
        <div className="brand-content-form-wrapper">
            <h3>Brand Post</h3>
            <form onSubmit={props.handleBrandSubmit}className="brand-content-form" action="">
                <input  placeholder="Media URL" 
                        name="media" 
                        type="text"
                        onChange={props.handleBrandChange}
                        value={props.media}/>
                <input  placeholder="Event Name" 
                        name="eventName" 
                        type="text"
                        onChange={props.handleBrandChange}
                        value={props.eventName}/>
                <input  placeholder="Event Category" 
                        name="eventCategory" 
                        type="text"
                        onChange={props.handleBrandChange}
                        value={props.eventCategory}/>
                <input  placeholder="Event Date" 
                        name="eventDate" 
                        type="date"
                        onChange={props.handleBrandChange}
                        value={props.eventDate}/>
                <textarea   placeholder="Enter Details"    
                            name="details" 
                            cols="30" 
                            rows="10"
                            onChange={props.handleBrandChange}
                            value={props.details}>
                </textarea>
                <button className="create-button-brand" type="submit">Create</button>
            </form>
        </div>
    )
}

export default BrandContentForm;
