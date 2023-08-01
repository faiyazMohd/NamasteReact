import React from "react";

class ProfileClass extends React.Component {
    constructor (props){
        super(props);
        this.state= {
            userInfo:{
                name:"John Doe",
                location:"Earth 676",
                avatar_url:"kjoigb"
            }
        }
        console.log(this.props.name+" contructor");
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/faiyazMohd");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
        console.log(this.props.name+" componentDidMount");
    }
    render(){
        console.log(this.props.name+" render");
        return (
            <div>
                <h1>Profle Class Component</h1>
                <img src={this?.state?.userInfo?.avatar_url} alt="" />
                <h3>Name:{this?.state?.userInfo?.name}</h3>
                <h3>Location:{this?.state?.userInfo?.location}</h3>
            </div>
        )
    }
}

export default ProfileClass;