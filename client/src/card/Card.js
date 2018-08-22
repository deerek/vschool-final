import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AvatarContainer from '.../../../src/AvatarContainer';
// import CardMedia from './components/CardMedia';
// import CardInfo from './components/CardInfo';
// import Profile from '../profile/Profile';

//moment
import moment from "moment";

// STYLES
import './card.css';

 class Card extends Component {
    render() {
        return (
            <div className="card-wrapper">
                <div className="card-top-wrapper">
                    <h1>{this.props.finishingPlace}</h1>
                    <div className="event-info">
                        <h3>{this.props.eventName}</h3>
                        <h5>{this.props.eventCategory}</h5>
                    </div>
                </div>
                <img src={this.props.media} alt=""/>
                <div className="post-info-wrapper">

                    <h5>{moment(this.props.eventDate).format("dddd, MMMM Do")}</h5>
                    {/* <h6>{props.auth.user.avatar}</h6> */}
                    <h5>{this.props.eventDate}</h5>
                    <p>{this.props.details}</p> 
                    <Link to={`/profile/${this.props.contentType}/${this.props.user}`}>
                    {/* { this.props.auth.user.userType === "athlete" && "brand" && <Avatar /> } */}
                    
                    {/* "athlete" "brand" --> "athletes" "brands" */}
                    <AvatarContainer userId={this.props.user} userType={this.props.contentType === "athlete" ? "athletes" : "brands"}/>
                    </Link> 
                </div>      
            </div>
        )
    }
}
export default connect(state => state, {})(Card)