import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Onboard from './onboard/Onboard';
import Home from './home/Home';
import Create from './create/Create';
import Profile from './profile/Profile';
import AppWelcome from './onboard/components/AppWelcome';
import Login from './onboard/components/Login';
import SignUp from './onboard/components/SignUp';
import EditProfile from './edit-profile/EditProfile';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="app-wrapper">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/onboard" component={Onboard} />
                            <Route path="/onboard/app-welcome" component={AppWelcome} />
                            <Route path="/onboard/login" component={Login} />
                            <Route path="/onboard/sign-up" component={SignUp} />
                        <Route path="/create" component={Create} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/edit-profile" component={EditProfile} />
                    </Switch>
                </div>
            </div> 
        )
    }
}
