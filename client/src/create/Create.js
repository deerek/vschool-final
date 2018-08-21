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
                media: "",
                finishingPlace: "",
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.addContent(this.state.inputs)
            .then(() => this.props.history.push("/"))
    }

    handleBrandSubmit(e) {
        e.preventDefault();
        this.props.addBrandContent(this.state.inputs)
            .then(() => this.props.history.push("/"))
    }

    render() {
        const userType = this.props.user.userType;
        let form;
        if (userType === "athlete") {
            form = <AthleteContentForm     
                        handleChange={this.handleChange.bind(this)} 
                        handleSubmit={this.handleSubmit.bind(this)}
                        {...this.state.inputs} />
        } else {
            form =  <BrandContentForm       
                        handleBrandChange={this.handleBrandChange.bind(this)} 
                        handleBrandSubmit={this.handleBrandSubmit.bind(this)}
                        {...this.state.inputs} />
        }
        return (
            <div className="create-wrapper">
                <CreateHeader />
                {form}
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return state;
// }

export default connect(state => state.auth, { addContent, addBrandContent })(Create);