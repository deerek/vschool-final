import React, { Component } from 'react'
import PostType from './components/PostType';
import CreateHeader from './components/CreateHeader';
import MediaPreview from './components/MediaPreview';
import Caption from './components/Caption';
import AchievmentForm from './components/AchievmentForm';
// import { Switch, Route } from 'react-router-dom';

class Create extends Component {
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