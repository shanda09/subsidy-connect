import React from "react";
import {Route, Link, Switch } from "react-router-dom";


const Home = () => (
  <div>
<h1>Subsidy Connect!</h1>   

<ul>
<li><Link to='Listings'>Apartment and Room Listings </Link></li>
<li><Link to='Info'>Subsidy Information </Link></li>
<li><Link to='Login'>Landlord and Broker Login/singup </Link></li>
      </ul>
  </div>
);

export default Home;