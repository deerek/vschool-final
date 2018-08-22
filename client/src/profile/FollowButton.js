import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'


function FollowButton(props) {
  return (
    <div className="customContainer">
      <button className="following" onClick={props.follow}>
        Follow</button>
      {/* <p>
        You are {text} this user.
          </p> */}
    </div>
  )
}

export default FollowButton
