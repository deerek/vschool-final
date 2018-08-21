import React from 'react'
import { Link } from 'react-router-dom';

// STYLES
import '../create.css';

function CreateHeader() {
    return (
        <div className="create-header-wrapper">
            <Link to="/" className="cancel-link">
                <img className="create-cancel-icon" src={require("../../images/closeIcon.png")} alt=""/>
            </Link>
            <h4>New Post</h4>
            <h4 className="filler">create</h4>
        </div>
    )
}

export default CreateHeader;
