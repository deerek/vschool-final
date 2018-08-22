import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from "moment";

// COMPONENTS
import BrandCardHeader from './components/BrandCardHeader';
import AthleteCardHeader from './components/AthleteCardHeader';

// STYLES
import './card.css';

export default class Card extends Component {
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
                    <h6>{this.props.user}</h6>
                    <Link to={`/profile/${this.props.contentType}/${this.props.user}`}>
                    <h6> {this.props.user} </h6>
                    </Link>
                    <p>{this.props.details}</p>  
                </div>      
            </div>
        )
    }
}
