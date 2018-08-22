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
                <img src={this.props.media} alt=""/>
                <div className="post-info-wrapper">


                    <h5>{moment(this.props.eventDate).format("dddd, MMMM Do")}</h5>
                    {/* <h6>{props.auth.user.avatar}</h6> */}
                    <h5>{this.props.eventDate}</h5>
                    <p>{this.props.details}</p> 

                    <h6>{this.props.user}</h6>

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