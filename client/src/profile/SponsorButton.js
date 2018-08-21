import React, { Component } from 'react'
// import { Link } from 'react-router-dom'


class SponsorButton extends Component {
    constructor() {
      super();
      this.state = {
        sponsered: false
      }
      this.handleClick = this.handleClick.bind(this)
    } 
    
    handleClick() {
      this.setState({
        sponsored: !this.state.sponsored
      })
    }
    
    render() {
      const text = this.state.sponsored ? 'sponsored' : 'not sponsored'
      const label = this.state.sponsored ? 'Unsponsor' : 'Sponsor'
      return (
        <div className="customContainer">
          <button className="sponsored" onClick={ this.handleClick }>
            { label }</button>
          <p>
            You have { text } this athlete. 
          </p>
        </div>
      )
    }
  }
  
  export default SponsorButton