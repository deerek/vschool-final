import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import AvatarContainer from '.../../../src/AvatarContainer';
// import CardMedia from './components/CardMedia';
// import CardInfo from './components/CardInfo';
// import Profile from '../profile/Profile';

//moment


import moment from "moment";

// COMPONENTS
import BrandCardHeader from './components/BrandCardHeader';
import AthleteCardHeader from './components/AthleteCardHeader';

// STYLES
import './card.css';

 class Card extends Component {
    render() {
        const contentType = this.props.contentType;
        let header;
        if (contentType === "athlete") {
            header = <AthleteCardHeader eventName={this.props.eventName} finishingPlace={this.props.finishingPlace} eventCategory={this.props.eventCategory} />
        } else {
            header =  <BrandCardHeader eventDate={moment(this.props.eventDate).format("dddd, MMMM Do")} eventName={this.props.eventName} />
        }
        return (
            <div className="card-wrapper">
                <div className="card-header">
                    {header}
                </div>
                <div className="card-media-wrapper">
                    <img src={this.props.media} alt=""/>
                </div>
                <div className="post-info-wrapper">
                    <Link to={`/profile/${this.props.contentType}/${this.props.user}`}>
                        {/* { this.props.auth.user.userType === "athlete" && "brand" && <Avatar /> } */}
                    
                        {/* "athlete" "brand" --> "athletes" "brands" */}
                        <AvatarContainer className="avatar-card" userId={this.props.user} userType={this.props.contentType === "athlete" ? "athletes" : "brands"}/>
                    </Link> 
                    <h3>{this.props.user}</h3>
                    <h5>{moment(this.props.createdAt).fromNow("dddd, MMMM Do")} ago</h5>
                </div>      
            </div>
        )
    }
}
export default connect(state => state, {})(Card)