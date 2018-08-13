import React from 'react'
import { Link } from 'react-router-dom';

// STYLES
import '../create.css';

function CreateHeader() {
    return (
        <div className="create-header-wrapper">
            <Link to="/">
                <h6>Cancel</h6>
            </Link>
            <h4>New Post</h4>
            <Link to="/">
                <h6>Create</h6>
            </Link>
        </div>
    )
}

export default CreateHeader;
