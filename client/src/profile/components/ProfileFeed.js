import React from 'react';
import Card from '../../card/Card';

import "../../app.css";

function Feed(props) {
    const contents = props.contents.map(content => <Card {...content} key={content._id} />)
    return (
        <div>
            <ul className="feed-list">
                {contents}
            </ul>
        </div>
    )
}

export default Feed;