import React from "react";
// import {Route, Link, Switch } from "react-router-dom";
import axios from 'axios';
import NewUser from "./NewUser";
import UserProfile from "./UserProfile"

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      passwordInput: "",
      message: "",
      // newUsernameInput:"",
      // newpasswordInput: "",
      // message2:"",
      toggleLogin:false,
      username:""

    }
  }

  handleUsernameChange = (e) => {
    this.setState({
      usernameInput: e.target.value
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      passwordInput: e.target.value
    })
  }

  submitForm = () => {
    const { usernameInput, passwordInput } = this.state;

    axios
      .post("/users/login", {
        username: usernameInput,
        password: passwordInput
      })
      .then((res) => {
        // this.props.setUser(res.data)
        // this.props.toggleLogin()
        console.log(res)
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: "Login Success",
          username: res.data.username,
          toggleLogin: true
        })
      })
      .catch((err) => {
        this.setState({
    
          message: "Username / Password Incorrect."
        })
      })
  }

  logout = () => {
    axios.post('/users/logout', this.state.username)
         .then((res) => {
           console.log(res);
          //  this.props.removeUser();
          //  this.props.toggleLogin();
           this.setState({
             usernameInput: "",
             passwordInput: "",
             message: res.data,
             toggleLogin:false,

           })
         })
         .catch((err) => {
           this.setState({
             message: "Please log in first."
           })
         })
  }






  render() {
    const { usernameInput, passwordInput, message,username } = this.state

    if (!this.state.toggleLogin) {
      return (
        <div>
          <a style={{color: "red"}} onClick={this.logout}> Log Out </a>

          <br></br>

          <h1>Log In</h1>

          Username:
          <input type="text" value={usernameInput} onChange={this.handleUsernameChange}/>

          Password:
          <input type="text" value={passwordInput} onChange={this.handlePasswordChange}/>

          <button onClick={this.submitForm}>Login</button>

          {message}

<br />


            <NewUser />
        </div>
      )
    } else {
      return (
        <div>
          <br></br>

          <a style={{color: "red"}} onClick={this.logout}> Log Out </a>

          <br></br>

          Welcome, {this.state.username}!

          <br></br>

          {this.state.message}
        </div>
      )
    }
  }
}

export default Login