import React from "react";
import {Route, Link, Switch } from "react-router-dom";
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
                  <div><Link to='/'><button >Home</button></Link></div>

      <div className="login-wrap">
          
          {/* <div className="login-html">
		
    <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">Sign Up</label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input" />
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password" />
				</div>
				<div className="group">
					<input id="check" type="checkbox" className="check" checked />
					<label for="check"><span className="icon"></span> Keep me Signed in</label>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign In" />
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div> */}

          Username:
          <input type="text" value={usernameInput} onChange={this.handleUsernameChange}/>

          Password:
          <input type="text" value={passwordInput} onChange={this.handlePasswordChange}/>

          <button onClick={this.submitForm}>Login</button>

          {message}

<br />


            <NewUser />
            </div>
        </div>
      )
    } else {
      return (
        <div>
          <br></br>

          <a style={{color: "red"}} onClick={this.logout}> Log Out </a>

          <br></br>

          Welcome, {this.state.username}!
          <UserProfile />

          <br></br>

          {this.state.message}
        </div>
      )
    }
  }
}

export default Login