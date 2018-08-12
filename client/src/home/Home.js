import React, { Component } from 'react';

import Feed from './components/Feed';
import Header from '../Header';

// import '../app.css'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            content: []
        }
    }

    // GET REQUEST WILL BE HANDLED HERE
    // MAKE IT AN ACTION CREATOR (or reducer?) IN REDUX
    
    render() {
        return (
            <div>
                <Header />
                <Feed />
            </div>
        )
    }
}


export default Home;