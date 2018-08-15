import React, { Component } from 'react';
import axios from 'axios';

import Feed from './components/Feed';
import Header from '../Header';
import CreateButton from '../CreateButton';

// import '../app.css'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            content: [] 
        }
    }

    // GET REQUEST FOR ALL "CONTENT" -----> MAKE IT AN ACTION CREATOR (or reducer?) IN REDUX
    componentDidMount() {
        axios
            .get('/content')
            .then(data => {
                this.setState({ content: data.data });
            })
            .catch(err => {
                console.log('Error GETting ALL content')
            });
    }
    
    render() {
        return (
            <div>
                <Header />
                <Feed data={this.state.content} />
                <CreateButton />
            </div>
        )
    }
}


export default Home;