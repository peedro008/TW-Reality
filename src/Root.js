import React from 'react';
import {  useSelector } from 'react-redux';
import Auth from './Controllers/auth';
import { BrowserRouter as Router, Route } from "react-router-dom"

import AdminRouter from './Routers/adminRouter';


import { FetchAll}  from './Logic/Fetch';
import LoginRouter from './Routers/LoginRouter';
import ManagerRouter from './Routers/ManagerRouter';
import RealtorRouter from './Routers/RealtorRouter';

function Root ({ store }) {

const state= useSelector(state=>state.userRole)

if(!state){
  return (
      
    

    
      <LoginRouter/>
       
     
   )
  
  }

 if (state==="Admin"){
  return (

    
    <AdminRouter/>
     
     
  
  )

}
if (state==="Manager"){
  return (

    
    <ManagerRouter/>
     
     
  
  )

}

if (state=="Realtor"){
  return (

    <RealtorRouter/>
  )

}


}












  
export default   Root

