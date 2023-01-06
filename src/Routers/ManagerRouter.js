import React from "react";


import { BrowserRouter as Router, Route } from "react-router-dom";


import ManagerNav from "../Navs/ManagerNav";
import ManagerDashboard from "../Controllers/ManagerDashboard";
import ManagerRecruit from "../Controllers/ManagerRecruit";
import AddSell from "../Controllers/addSell";
import { useDispatch } from "react-redux";
import { FetchAll } from "../Logic/Fetch";
import UserManagement from "../Controllers/UserManagement";
import AddReferred from "../Controllers/addReferred";
import ManagerGraficsControl from "../Controllers/ManagerGrafics";
import StadisticInfo from "../Components/stadisticInfo/SalesByMe";
import SalesByRealtors from "../Components/stadisticInfo/SalesByRealtors";
import MyReferrals from "../Components/stadisticInfo/MyReferrals";
import NewRealtors from "../Components/stadisticInfo/NewRealtors";
import TotalCommisionPaid from "../Components/stadisticInfo/TotalCommissionPaid";
import TotalCommisionUnpaid from "../Components/stadisticInfo/TotalCommissionUnpaid";
import RealtorsListManagerControl from "../Controllers/realtorsListManagerControl";
import PackageManagementControl from "../Controllers/PackageManagementControl";
import AddPackageControl from "../Controllers/addPackageControl";
import PackageMarketingDash from "../Components/stadisticInfo/PackageMarketingDash";
import TransactionCoordSold from "../Components/stadisticInfo/TransactionCoordSold";
import TransactionCoordUnsold from "../Components/stadisticInfo/TransactionCoordUnsold";
import SellsControlManager from "../Controllers/SellsControlManager";

const ManagerRouter = () => {
  
  const dispatch = useDispatch()

  FetchAll(dispatch)
  return (
    <Router>
      <Route component={ManagerNav} />
      <Route exact path='/' component={ManagerGraficsControl}/>
      <Route exact path='/managerDashboard' component={ManagerDashboard}/>
      <Route exact path='/management/ManagerRecruit' component={ManagerRecruit}/>
      <Route exact path='/UsersManagement' component={UserManagement}/>
      <Route exact path='/addSell' component={AddSell}/>
      <Route exact path='/sells' component={SellsControlManager}/>
      <Route exact path='/realtorsListManager' component={RealtorsListManagerControl}/>
      <Route exact path="/UserManagement/referred" component={AddReferred}/>
      <Route exact path='/salesByMe' component={StadisticInfo}/>
       <Route exact path='/salesByRealtors' component={SalesByRealtors}/>
       <Route exact path='/myReferrals' component={MyReferrals}/>
       <Route exact path='/newRealtors' component={NewRealtors}/>
       <Route exact path='/packageMarketingDash' component={PackageMarketingDash}/>
       <Route exact path='/transactionCoordSold' component={TransactionCoordSold}/>
       <Route exact path='/transactionCoordUnsold' component={TransactionCoordUnsold}/>
       <Route exact path='/totalCommissionPaid' component={TotalCommisionPaid}/>
       <Route exact path='/totalCommissionUnpaid' component={TotalCommisionUnpaid}/>
       <Route exact path='/packageManagement' component={PackageManagementControl}/>
       <Route exact path='/addPackage' component={AddPackageControl}/>
    </Router>
  );
};

export default ManagerRouter;
