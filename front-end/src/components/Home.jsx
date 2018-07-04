import React from "react";
import {Link } from "react-router-dom";



const Home = () => (
  <div>
<h1>Subsidy Connect!</h1>   
<div className='flex-container'>

<div><Link to='Listings'><button type="button" class="btn btn-primary">Apartment and Room Listings </button></Link></div>
<div><Link to='Info'><button type="button" class="btn btn-primary">Subsidy Information </button></Link></div>
<div><Link to='Login'><button type="button" class="btn btn-primary">Landlord and Broker Login/singup</button></Link></div>
  
      </div>
  </div>
);

export default Home;