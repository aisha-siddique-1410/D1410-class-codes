import React from 'react'

function Profile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age:{props.age}</p>
      <p>Location: {props.city}</p>
    </div>
  );
}

export default Profile;
