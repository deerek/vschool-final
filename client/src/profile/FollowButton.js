import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'


class FollowButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
        following: false
      }
      this.handleClick = this.handleClick.bind(this)
    } 
    
    handleClick() {
      this.setState({
        following: !this.state.following
      })
    }
    
    render() {
      const text = this.state.following ? 'following' : 'not following'
      const label = this.state.following ? ' Unfollow' : 'Follow'
      return (
        <div className="customContainer">
          <button className="following" onClick={ this.handleClick }>
            { label }</button>
          <p>
            You are { text } this user. 
          </p>
        </div>
      )
    }
  }
  
  export default FollowButton
  