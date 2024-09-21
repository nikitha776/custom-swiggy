import React from 'react'
import { isConstructorTypeNode } from 'typescript';
import { LOGO_URL } from '../Utils/constants';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name : "Nikitha",
        location : "Kondapalli",
      }
    }
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nikitha776");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    })
  }
  
  render() {
    const {name,location,login,avtar_url,public_repos} = this.state.userInfo;
    return (
      <div className="userContainer">
        <img src={avtar_url}></img>
        <h2>Name : {name}</h2>
        <h4>Location : {location}</h4>
        <h4>UserName : {login}</h4>
        <h4>Number of repos : {public_repos}</h4>
      </div>
    );
  }
}

export default UserClass;