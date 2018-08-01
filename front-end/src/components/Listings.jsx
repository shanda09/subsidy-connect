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
         <div className='listings'>
          <li key={listing.id}>
            <img className='aptImg'src={listing.picture} alt="picture of apartment goes here" />{" "}
            
            <h3>{listing.title} For Rent</h3>

              <div className='listingInfo'>

            <li><p>Address: {listing.address}</p></li>

            <li><p>Subsidy: {listing.subsidy}</p></li>

           <li> <p>Rent: {listing.rent}</p></li>

           <li> <p>Number of Bedrooms: {listing.bedrooms}</p></li>

            <li><p>Description: {listing.description}</p></li>
              </div>
          </li>
          </div>
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