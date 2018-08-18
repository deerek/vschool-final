import React, { Component } from 'react'

// REDUX
import addContent from '../redux/aContent';

// COMPONENTS
import PostType from './components/PostType';
import CreateHeader from './components/CreateHeader';
import MediaPreview from './components/MediaPreview';
import Caption from './components/Caption';
import AchievmentForm from './components/AchievmentForm';
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

    render() {
        return (
            <div className="create-wrapper">
                <CreateHeader />
                <PostType />
                <MediaPreview />
                <Caption />
                <AchievmentForm />
            </div>
        )
    }
}

export default Create;