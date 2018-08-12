import React from 'react';
import Card from '../../card/Card';

import "../../app.css";

function Feed(props) {
    return (
        <div>
            <ul className="feed-list">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ul>
        </div>
    )
}

export default Feed;