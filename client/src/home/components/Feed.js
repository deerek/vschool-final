import React from 'react';
import Card from '../../card/Card';

import "../../app.css";

function Feed(props) {
    // const results = props.data;
    // let content = results.map(content => <Card {...content} key={content._id} />)
    return (
        <div>
            <ul className="feed-list">
                
                {/* {content}  */}
                
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