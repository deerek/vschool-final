import React, { Component } from 'react'
// import CardMedia from './components/CardMedia';
// import CardInfo from './components/CardInfo';

export default class Card extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.finishingPlace}</h1>
                <h4>{this.props.eventName}</h4>
                <h5>{this.props.eventCategory}</h5>
                <img src={this.props.media} alt=""/>
                <h5>{this.props.eventDate}</h5>
                <h6>{this.props.user}</h6>
                <p>{this.props.details}</p>         
            </div>
        )
    }
}
