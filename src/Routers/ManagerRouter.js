import React from "react";


import { BrowserRouter as Router, Route } from "react-router-dom";


import ManagerNav from "../Navs/ManagerNav";
import ManagerDashboard from "../Controllers/ManagerDashboard";
import ManagerRecruit from "../Controllers/ManagerRecruit";
import AddSell from "../Controllers/addSell";
import { useDispatch } from "react-redux";
import { FetchAll } from "../Logic/Fetch";
import CommissionManagement from "../Controllers/CommissionManagement";
import ToRecruit from "../Controllers/toRecruit";
import UserManagement from "../Controllers/UserManagement";
import AddReferred from "../Controllers/addReferred";


const ManagerRouter = () => {
  
  const dispatch = useDispatch()

  FetchAll(dispatch)
  return (
    <Router>
      <Route component={ManagerNav} />
      <Route exact path='/' component={ManagerDashboard}/>
      <Route exact path='/management/ManagerRecruit' component={ManagerRecruit}/>
      <Route exact path='/UsersManagement' component={UserManagement}/>
      <Route exact path='/AddSell' component={AddSell}/>
      <Route exact path='/management' component={ToRecruit}/>
      <Route exact path="/UserManagement/referred" component={AddReferred}/>
    </Router>
  );
};

export default ManagerRouter;
