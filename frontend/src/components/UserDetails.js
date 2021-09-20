import React from 'react';
import './UserDetails.css'

const UserDetails =  ({ user }) => {
  const userDetails = <div>
    <div className="Name">Name: {user ? user.name : null}</div>
    <img className="ProfilePicture" src={user? user.picture : null} alt="User profile" />
  </div>
  return <div className="UserDetails">
    <h1>User Details</h1>
    {user ? userDetails : null}
  </div>
}

export default UserDetails;
