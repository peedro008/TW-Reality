import React from 'react';

import {
    BrowserRouter as Router,
    
    Route} from 'react-router-dom'
import {FetchAll} from "../Logic/Fetch"
import ProducerNav from '../Navs/RealtorNav';
import RealtorDashboard from '../Controllers/RealtorDashboard'
import AddRealtor from '../Controllers/addRealtor';
import AddSell from '../Controllers/addSell';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Stadistic from '../Controllers/stadistic';
import AddReferred from '../Controllers/addReferred';
import RealtorNav from '../Navs/RealtorNav';

 const RealtorRouter=()=>{

  const dispatch = useDispatch()

  FetchAll(dispatch)


  
    return (
        <Router>
          <Route component={RealtorNav}/>     
          <Route exact path="/" component={RealtorDashboard}/>
          <Route exact path="/AddReferred" component={AddReferred}/>
          {/* <Route exact path="/addSell" component={AddSell}/> 
          <Route exact path="/Stadistic" component={Stadistic}/> 
           */}
        </Router>
      );
    }



export default RealtorRouter