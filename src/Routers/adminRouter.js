import React from "react";
import AdminNav from "../Navs/adminNav";

import { BrowserRouter as Router, Route } from "react-router-dom";


import Stadistic from "../Controllers/stadistic";
import CommissionManagement from "../Controllers/CommissionManagement";
import UserManagement from "../Controllers/UserManagement";
import { FetchAll } from "../Logic/Fetch";
import { useDispatch } from "react-redux";


const AdminRouter = () => {
  const dispatch = useDispatch()
  FetchAll(dispatch)
  return (
    <Router>
      <Route component={AdminNav} />
      <Route exact path='/' component={Stadistic}/>
       <Route exact path='/CommissionManagement' component={CommissionManagement}/>
       <Route exact path='/UsersManagement' component={UserManagement}/>
    </Router>
  );
};

export default AdminRouter;
