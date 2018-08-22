import React from 'react';
import { Link } from 'react-router-dom';

// STYLES
import './app.css';

function CreateButton(props) {
    return (
        <Link to="/create">
            <div className="create-button">
                <img src={require("./images/plusBlack.png")} alt=""/>
            </div>
        </Link>
    )
}

export default CreateButton;
