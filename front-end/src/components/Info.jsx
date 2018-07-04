import React from "react";
import {Link} from "react-router-dom";


const Info = () => (
  <div>
      <div><Link to='/'><button >Home</button></Link></div>

<h1>Subsidy Info</h1>  
<div class="container">
<div class="row">
    <div cclass="col-sm">
      <h2>LINC</h2>
      <p>Living in Communities (LINC) is a limited rental assistance program for low-income families and single adults living in homeless or domestic violence shelters. Priority will be given to households that have lived in shelters the longest.

The general public and shelter residents cannot apply to this rent subsidy program. 
For more information on the LINC program please <a href='https://www1.nyc.gov/site/dhs/permanency/linc.page'>Click this link</a>

</p>
    </div>
    <div class="col-sm">
    <h2>CityFEPS</h2>
    <p>The CITYFEPS Rent Supplement Program can help eligible families with children at risk of entry to shelter and those already in shelter to
secure permanent housing. The number of households that can be approved to receive the CITYFEPS Rent Supplement will be limited
due to available funding. Potentially eligible families will be connected with CITYFEPS providers (community-based organizations), which
will assist the family in completing an application and locating housing.<br/>
For more information on the LINC program please <a href='https://www1.nyc.gov/assets/dhs/downloads/pdf/CITYFEPS/CITYFEPS-fact-sheet.pdf'>Click this link</a>

</p>
    </div>
    <div class="col-sm">
    <h2>SEPS</h2>
    <p>The City’s Special Exit and Prevention Supplement (SEPS) Program can help eligible individual adults and adult families (families without
children) at risk of entry to shelter and those already in shelter to secure permanent housing. The number of households that can be
approved to receive the SEPS Rent Supplement will be limited due to available funding. Potentially eligible individual adults and adult
families will be connected with SEPS providers (community-based organizations), which will assist the household in completing an
application and locating housing.</p>
For more information on the LINC program please <a href='https://www1.nyc.gov/assets/hra/downloads/pdf/services/homelessness-prevention/SEPSFacts_en.pdf'>Click this link</a>

    </div>
  </div>
  </div> 
  </div>
);

export default Info;