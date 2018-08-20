import React, { Component } from 'react'

// REDUX
import { connect } from 'react-redux';
import { addContent } from '../redux/aContent';
import { addContent as addBrandContent } from '../redux/bContent';

// COMPONENTS
import CreateHeader from './components/CreateHeader';
import AthleteContentForm from './components/AthleteContentForm';
import BrandContentForm from './components/BrandContentForm';
// import { Switch, Route } from 'react-router-dom';

class Create extends Component {

    constructor() {
        super();
        this.state = {
            inputs: {
                contentType: "",
                media: "",
                place: "",
                eventName: "",
                eventCategory: "",
                eventDate: "",
                caption: ""
            }
        }
    }

    handleChange(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    handleBrandChange(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                contentType: "",
                media: "",
                place: "",
                eventName: "",
                eventCategory: "",
                eventDate: "",
                caption: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addContent(this.state.inputs);
        this.clearInputs;
    }

    handleBrandSubmit(e) {
        e.preventDefault();
        this.props.addBrandContent(this.state.inputs);
        this.clearInputs;
    }

    render() {
        return (
            <div className="create-wrapper">
                <CreateHeader />
                <AthleteContentForm     
                    handleChange={this.handleChange.bind(this)} 
                    handleSubmit={this.handleSubmit.bind(this)}
                    {...this.state.inputs} />
                <BrandContentForm       
                    handleBrandChange={this.handleBrandChange.bind(this)} 
                    handleBrandSubmit={this.handleBrandSubmit.bind(this)}
                    {...this.state.inputs} />
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return state;
// }

export default connect(state => state.auth, { addContent, addBrandContent })(Create);