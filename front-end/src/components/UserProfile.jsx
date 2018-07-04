import React from "react";
// import {Route, Link, Switch } from "react-router-dom";
import axios from 'axios';

class Login extends React.Component {
    constructor() {
      super();
      this.state = {
        address: "",
        subsidy: "",
        bedroom: "",
        picture:"",
        description:"",
        rent:"",
        message3:""
      }
    }
    handleForm = e => {
        e.preventDefault();
        const { address,rent,description,bedroom,message3,picture,subsidy} = this.state;

        axios
        .post('/users/addApt',{
            address:address,
            subsidy:subsidy,
            bedroom:bedroom,
            picture:picture,
            rent:rent,
            description:description
        })
        .then(()=>{
            this.setState({
                address:"",
                subsidy:"",
                bedroom:"",
                picture:"",
                description:"",
                rent:"",
                message3:"success"
            })
        })
        .cathc(err=>{
            this.setState({
                message3:"error posting"
            })
        })
    }

render(){
    const { address,rent,description,bedroom,message3,picture,subsidy} = this.state;

    return(
        <div></div>
    )
}
}