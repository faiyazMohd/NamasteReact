import { useContext, useState } from "react";
import UserProfile from "./UserProfile";
import UserContext from "../UserContext";

const UserProfileState = (props)=>{
    const {user} =  useContext(UserContext)
    const [UserDetails, setUserDetails] = useState({
        userId:124132,
        userName:user.name,
        age:21,
    })

    // console.log(props);
    return(
        <UserProfile.Provider value={{UserDetails,setUserDetails}}>
            {props.children}
        </UserProfile.Provider>
    )
}


export default UserProfileState