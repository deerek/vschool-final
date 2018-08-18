// REACT
import React, { Component } from 'react';
import axios from 'axios';

// REDUX
import { connect } from 'react-redux';
import { loadContents } from '../redux/aContent';

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

    componentDidMount() {
        this.props.loadContents();
    }
    
    render() {
        return (
            <div>
                <Header />
                <Feed contents={this.props.aContent} />
                <CreateButton />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { loadContents })(Home);


// THIS IS HOW WE WORK WITH TWO DIFFERENT CONTENT SCHEMAS
////////////////////////////////////////////////////////////////////////
// const getContent = async () => {
//     const athleteContent = await axios.get(contentUrl);
//     const brandContent = await axios.get(brandUrl);
//     return [...athleteContent.data, ...brandContent.data]
// }

// export const setContent = () => dispatch => {
//     getContent()
//         .then(content => dispatch({ type: "CONTENT", content }))

// }