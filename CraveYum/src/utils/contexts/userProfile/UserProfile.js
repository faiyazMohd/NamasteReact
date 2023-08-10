import { createContext } from "react";

const UserProfile = createContext({
        userId:0,
        userName:"Dummy",
        age:0,
    });
// console.log(UserProfile);

export default UserProfile;