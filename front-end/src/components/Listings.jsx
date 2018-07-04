import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";


class Listings extends React.Component {
  constructor() {
    super();
    this.state = {
      getAllListings: [],
      message: ''
    }
  }

  componentDidMount(){
    axios
      .get("/users/getAllListings")
      .then(res=>{
        this.setState({
          getAllListings: res.data
        })
      })
      .catch(err=>{
        this.setState({
          message:"Error getting listings. Go to home page."
        })
      })
  }

  render(){
    const {getAllListings, message} = this.state;
    console.log(this.state);
    return(
      <div>
      <div><Link to='/'><button >Home</button></Link></div>

<h1>Apartment/Room Listings</h1>
{message}   
<div>
  <ul>
    {
      getAllListings.map(listing=>{
        return (
          <li key={listing.id}>
            <h3>{listing.title} For Rent</h3>
            <img src={listing.picture} alt="picture of apartment goes here" />{" "}
            <p>Subsidy: {listing.subsidy}</p>

            <p>Address: {listing.address}</p>
            <p>Rent: {listing.rent}</p>
            <p>Number of Bedrooms: {listing.bedrooms}</p>
            <p>Description: {listing.description}</p>

          </li>
        )
      })
    }
    </ul>
</div>
</div>
    )
  }
}


export default Listings;