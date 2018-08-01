import React from "react";
import {Link } from "react-router-dom";
import axios from 'axios';

class UserProfile extends React.Component {
    constructor() {
      super();
      this.state = {
        address: "",
        subsidy: "",
        bedroom: "",
        picture:"",
        description:"",
        rent:"",
        title:"",
        message3:""
      }
    }

    
    handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    handleForm = e => {
        e.preventDefault();
        const { address,rent,description,bedroom,message3,picture,subsidy,title} = this.state;
        console.log(this.state);
        axios
        .post('/users/addApt',{
            address:address,
            subsidy:subsidy,
            bedroom:bedroom,
            picture:picture,
            rent:rent,
            title:title,
            description:description,

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
        .catch(err=>{
            this.setState({
                message3:"error posting"
            })
        })
    }

render(){
    const { address,rent,description,bedroom,message3,picture,subsidy,title} = this.state;

    return(
        <div>
                  <div><Link to='Listings'><button >Listings</button></Link></div>

            <form onSubmit={this.handleForm}>
            <input 
              type="text" 
              onChange={this.handleInputChange}
              placeholder="Name of Complex"
              name="title"
              value={title} />
<input 
              type="text" 
              onChange={this.handleInputChange}
              placeholder="Adress"
              name="address"
              value={address} />
            <br />
            <input 
              type="text" 
              onChange={this.handleInputChange}
              placeholder="Rent"
              name="rent"
              value={rent} />
            <br />
            <input 
              type="text" 
              onChange={this.handleInputChange}
              placeholder="Description"
              name="description"
              value={description} />
            <br />
            <input 
              type="text" 
              onChange={this.handleInputChange}
              placeholder="Number of Bedrooms"
              name="bedroom"
              value={bedroom} />
            <br />
            <input 
              type="text" 
              onChange={this.handleInputChange}
              placeholder="Picture Url"
              name="picture"
              value={picture} />
            <br />
            <input 
              type="text" 
              onChange={this.handleInputChange}
              placeholder="Type of Subsidy"
              name="subsidy"
              value={subsidy} />
            <br />


            <button onClick={this.handleForm}>submit New Apartment</button>

          </form>
            
        </div>
    )
}
}

export default UserProfile;