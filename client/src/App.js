import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Onboard from './onboard/Onboard';
import Home from './home/Home';
import Create from './create/Create';
import Profile from './profile/Profile';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="app-wrapper">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/onboard" component={Onboard} />
                        <Route path="/create" component={Create} />
                        <Route path="/profile" component={Profile} /> 
                    </Switch>
                </div>
            </div> 
        )
    }
}
