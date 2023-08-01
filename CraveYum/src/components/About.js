import {Component} from 'react'
import { Outlet } from 'react-router-dom'
import Profile from "./Profile"
import ProfileClass from './ProfileClass'

class About extends  Component{
  constructor(props){
    super(props);
    console.log("Parent Contructor");
  }
  componentDidMount(){
    // this.interval = setInterval(() => {
    //   console.log("React OP !!");
    // }, 1000);
    // this.timeout = setTimeout(() => {
    //   console.log("logging after 5sec");
    // }, 5000);
    console.log("Parent componentDidMount");
  }

  componentWillUnmount(){
    // clearInterval(this.interval);
    // clearTimeout(this.timeout);
    console.log("componentWillUnmount");
  }
  render(){
    console.log("Parent render");
    return (
      <div>
        <h1>About Us Page</h1>
        <h2>CraveYum is a best and number 1  online food delivering place in india</h2>
        {/* <Outlet/> */}
        {/* <Profile/> */}
        <ProfileClass name={"First Child"}/>
        <ProfileClass name={"Second Child"}/>
        {/* <ProfileClass name={"Third Child"}/>
        <ProfileClass name={"Fourth Child"}/> */}
      </div>
    )
  }
}


export default About
