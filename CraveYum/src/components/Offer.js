import React, { Component } from "react";
import UserContext from "../utils/contexts/UserContext";
import UserProfileState from "../utils/contexts/userProfile/UserProfileState";
import UserProfile from "../utils/contexts/userProfile/UserProfile";

class Offer extends Component {
  render() {
    return (
      <div>
        <h1>This is a Offer Page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <>
              <h2>name:{user.name}</h2> <h2>email:{user.email}</h2>
            </>
          )}
        </UserContext.Consumer>
        <UserProfile.Consumer>
          {({ UserDetails }) => <h2>userName : {UserDetails.userName}</h2>}
        </UserProfile.Consumer>
        <hr />
        <UserContext.Consumer>
          {({ user, setUser }) => (
            <>
              <input type="text" value={user.name} onChange={(e) => {
                setUser({...user,name:e.target.value})
              }} />
            </>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Offer;
