import React from "react";
import foodPng from "../assets/icons/foodPng.webp";


const SignIn = () => {
  return (
    <div style={{width:"90%",margin:"auto"}}>
        <div className="SignInContainer">
          <div
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="leftSignIn">
              <h3>Sign Up</h3>
            </div>
            <div className="signInFood">
              <img src={foodPng} alt="" />
            </div>
          </div>

          <div className="signInForm">
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <div className="phoneNumber"></div>
            <div className="name"></div>
            <div className="email"></div>
            <div className="signupSidebar">
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "#fff",
                }}
                className=""
              >
                Continue
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SignIn;
