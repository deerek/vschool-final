import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/// COMPONENTS
import AppWelcome from './components/AppWelcome';
import Login from './components/Login';
import SignUp from './components/SignUp';

// STYLES
import './onboard.css';

class Onboard extends Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: false
        }
    }
    // handleSignUp(e) {
    //     e.preventDefault();
    //     axios.post('/quimges', this.state)
    //         .then(res => {
    //             console.log(res);
    //             console.log(res.data);
    //         })
    //         .then(()=> this.props.history.push("/"))
    //         .catch(err => {
    //             console.log('Error happened during fetching!', err);
    //         })
            
    // }
    
    render() {
        return (
            <div className="onboard-wrapper">

                <Switch>
                    <Route exact path="/onboard" render={(props) => {
                        return <AppWelcome {...props} />
                    }} />
                    <Route path="/onboard/login" render={(props) => {
                        return <Login {...this.state}{...props} />
                    }} />
                    <Route path="/onboard/sign-up" render={(props) => {
                        return <SignUp {...this.state}{...props} />
                    }} />
                </Switch>
                
            </div>
        )
    }
}

export default Onboard;
