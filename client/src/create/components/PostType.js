import React, { Component } from 'react'

// STYLES
import '../create.css';

class PostType extends Component {
    render() {
        return (
            <div className="post-type-wrapper">
                <ul>
                    <li>Photo</li>
                    <li>Achievment</li>
                </ul>
            </div>
        )
    }
}

export default PostType;