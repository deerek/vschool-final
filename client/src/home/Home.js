// REACT
import React, { Component } from 'react';
// import axios from 'axios';

// REDUX
import { connect } from 'react-redux';
import { loadContents as loadAthleteContents } from '../redux/aContent';
import { loadContents as loadBrandContents } from '../redux/bContent';


import Feed from './components/Feed';
import Header from '../Header';
import CreateButton from '../CreateButton';
// import '../app.css'

class Home extends Component {

    componentDidMount() {
        // this.props.loadContents();
        this.props.loadAthleteContents();
        this.props.loadBrandContents();
    }

    render() {
        return (
            <div>
                <Header />
                <h1>{this.props.user}</h1>
                <Feed contents={[...this.props.aContent, ...this.props.bContent].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())} />
                <CreateButton />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { loadAthleteContents, loadBrandContents })(Home);


// THIS IS HOW WE WORK WITH TWO DIFFERENT CONTENT SCHEMAS
////////////////////////////////////////////////////////////////////////
