import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import { editProfile } from '../redux/auth';

// COMPONENTS
import EditAthleteForm from './components/EditAthleteForm';
import EditBrandForm from './components/EditBrandForm';


class EditProfile extends Component {
    
    constructor(props) {
        super(props);
        this.state ={
            inputs: props.user
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.editProfile(this.state.inputs)
            .then(() => this.props.history.push("/profile"))
    }

    render() {

        const userType = this.props.user.userType;
        let form;
        if (userType === "athlete") {
            form = <EditAthleteForm     
                        handleChange={this.handleChange.bind(this)} 
                        handleSubmit={this.handleSubmit.bind(this)}
                        {...this.state.inputs} />
        } else {
            form =  <EditBrandForm       
                        handleBrandChange={this.handleBrandChange.bind(this)} 
                        handleBrandSubmit={this.handleBrandSubmit.bind(this)}
                        {...this.state.inputs} />
        }
        return (
            <div>
                <Link to="/">
                    <h6>Cancel</h6>
                </Link>
                {form}
            </div>
        )
    }   
}


export default connect(state => state.auth, {editProfile})(EditProfile);