import React from "react";
import AdminNav from "../Navs/adminNav";

import { BrowserRouter as Router, Route } from "react-router-dom";


import Stadistic from "../Controllers/stadistic";
import CommissionManagement from "../Controllers/CommissionManagement";
import UserManagement from "../Controllers/UserManagement";
import { FetchAll } from "../Logic/Fetch";
import { useDispatch } from "react-redux";
import StadisticInfo from "../Components/stadisticInfo/SalesByMe";
import SalesByRealtors from "../Components/stadisticInfo/SalesByRealtors";
import MyReferrals from "../Components/stadisticInfo/MyReferrals";
import NewRealtors from "../Components/stadisticInfo/NewRealtors";
import TotalCommisionPaid from "../Components/stadisticInfo/TotalCommissionPaid";
import TotalCommisionUnpaid from "../Components/stadisticInfo/TotalCommissionUnpaid";
import ToRecruit from "../Controllers/toRecruit";
import ManagerRecruit from "../Controllers/ManagerRecruit";
import AdminGraficsControl from "../Controllers/AdminGraficsControl";


const AdminRouter = () => {
  const dispatch = useDispatch()
  FetchAll(dispatch)
  return (
    <Router>
      <Route component={AdminNav} />
      <Route exact path='/' component={Stadistic}/>
      <Route exact path='/adminGrafics' component={AdminGraficsControl}/>
       <Route exact path='/CommissionManagement' component={CommissionManagement}/>
       <Route exact path='/management/ManagerRecruit' component={ManagerRecruit}/>
       <Route exact path='/UsersManagement' component={UserManagement}/>
       <Route exact path='/adminManagement' component={ToRecruit}/>
       <Route exact path='/salesByMe' component={StadisticInfo}/>
       <Route exact path='/salesByRealtors' component={SalesByRealtors}/>
       <Route exact path='/myReferrals' component={MyReferrals}/>
       <Route exact path='/newRealtors' component={NewRealtors}/>
       <Route exact path='/totalCommissionPaid' component={TotalCommisionPaid}/>
       <Route exact path='/totalCommissionUnpaid' component={TotalCommisionUnpaid}/>
    </Router>
  );
};

export default AdminRouter;
