import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';


class ProtectedRoute extends Component {
    render() {
        const {isAuthenticated, path} = this.props;
        const ProtectedComponent = this.props.component;
        return (
            isAuthenticated 
                ?
                <Route path={path} component={ProtectedComponent} /> 
                :
                <Redirect to="/onboard/app-welcome" />
        )
    }
}

export default connect(state => state.auth, {})(ProtectedRoute);