import React, { Component } from 'react'
import CardMedia from './components/CardMedia';
import CardInfo from './components/CardInfo';

export default class Card extends Component {
    render() {
        return (
            <div>
                <CardMedia />
                <CardInfo />            
            </div>
        )
    }
}
