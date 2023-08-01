import { useEffect } from "react";


const Profile  = ()=>{
     useEffect(() => {
        const timer = setInterval(() => {
              console.log("React OP !!");
            }, 1000);
            console.log("useEffect");
        return ()=>{
            clearInterval(timer)
            console.log("useEffect return");
        }
    }, []);

    console.log("rendered");
    return (
        <div>
            <h1>Profile Functional Component</h1>
        </div>
    )
}

export default Profile;