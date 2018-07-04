import React from 'react';
import axios from 'axios'; //because Newton said so

class NewUser extends React.Component {
  constructor() {
    super();
    this.state = {
      newUsernameInput:"",
      newpasswordInput: "",
      message2:"",
    }
  }

  handleNewUsernameChange = (e) => {
    this.setState({
      newUsernameInput: e.target.value
    });
  }

  handleNewPasswordChange = (e) => {
    this.setState({
      newpasswordInput: e.target.value
    })
  }

  submitNewUser = () => {
    const { newUsernameInput, newpasswordInput } = this.state;

    axios
      .post("/users/new", {
        username: newUsernameInput,
        password: newpasswordInput
      })
      .then((res) => {
        this.setState({
          newUsernameInput: "",
          newpasswordInput: "",
          message2: "Register Success"
        })
      })
      .catch((err) => {
        this.setState({
          newUsernameInput: "",
          newpasswordInput: "",
          message2: "Something went wrong."
        })
      })
  }
  render() {
    const {  newpasswordInput, newUsernameInput,message2 } = this.state

    return (
      <div>
        <h1>Register</h1>

        Username:
        <input type="text" value={newUsernameInput} onChange={this.handleNewUsernameChange}/>

        Password:
        <input type="text" value={newpasswordInput} onChange={this.handleNewPasswordChange}/>

        <button onClick={this.submitNewUser}>Register</button>

        {message2}
      </div>
    )
  }
}

export default NewUser;