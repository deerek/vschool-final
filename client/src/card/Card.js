import React, { Component } from 'react'
// import CardMedia from './components/CardMedia';
// import CardInfo from './components/CardInfo';

// STYLES
import './card.css';

export default class Card extends Component {
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
                    <h5>{this.props.eventDate}</h5>
                    <h6>{this.props.user}</h6>
                    <p>{this.props.details}</p>  
                </div>      
            </div>
        )
    }
}
