import React from 'react';
import { Link } from 'react-router-dom';

// STYLES
import './app.css';

function CreateButton(props) {
    return (
        <Link to="/create">
            <div className="create-button">
                <h1>+</h1>
            </div>
        </Link>
    )
}

export default CreateButton;
