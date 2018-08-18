import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import { verify } from './redux/auth';

// COMPONENTS
import ProtectedRoute from './ProtectedRoute';
import Onboard from './onboard/Onboard';
import Home from './home/Home';
import Create from './create/Create';
import Profile from './profile/Profile';
import AppWelcome from './onboard/components/AppWelcome';
import Login from './onboard/components/Login';
import SignUp from './onboard/components/SignUp';
import EditProfile from './edit-profile/EditProfile';

class App extends Component {
    componentDidMount() {
        this.props.verify();
    }
    render() {
        const { isAuthenticated, loading } = this.props;
        return (
            <div>
                <div className="app-wrapper">
                    { loading ?
                        <div>...Loading User Data...</div>
                        :
                        <Switch>
                            <Route path="/onboard/sign-up" render={ props => isAuthenticated
                                ?
                                <Redirect to="/" /> 
                                :
                                <SignUp {...props} />
                            } />
                            <Route path="/onboard/login" render={props => isAuthenticated
                                ?
                                <Redirect to="/" />
                                :
                                <Login {...props} />
                            } />
                            <Route path="/onboard/app-welcome" component={AppWelcome} />
                            <ProtectedRoute exact path="/" component={Home} />
                            <ProtectedRoute path="/create" component={Create} />
                            <ProtectedRoute path="/profile" component={Profile} />
                            <ProtectedRoute path="/edit-profile" component={EditProfile} />
                        </Switch>
                    }
                </div>
            </div> 
        )
    }
}

export default withRouter(connect(state => state.auth, {verify})(App));