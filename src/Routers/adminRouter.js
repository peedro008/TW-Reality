import React, { useEffect, useState } from "react";
import AdminNav from "../Navs/adminNav";

import { BrowserRouter as Router, Route } from "react-router-dom";

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
import ManagerRecruit from "../Controllers/ManagerRecruit";

import UserEditController from "../Controllers/UserEdit";
import AddSell from "../Controllers/addSell";
import AddPackageControl from "../Controllers/addPackageControl";
import PackageManagementControl from "../Controllers/PackageManagementControl";
import AdminManagementControl from "../Controllers/adminManagementControl";
import ReferredEditControl from "../Controllers/ReferredEdit";
import ManagerEditController from "../Controllers/ManagerEdit";
import SellsControl from "../Controllers/SellsControl";
import AddClientControl from "../Controllers/addClientControl";
import MyClientsControl from "../Controllers/myClientsControl";
import EditClientControl from "../Controllers/editClientControl";
import logo from "../assets/realtorsBlanco.png";
import clientHistoryControl from "../Controllers/clientHistoryControl";
import AdminGraficsControl from "../Controllers/AdminGraficsControl";
import Stadistic from "../Controllers/stadistic";
import AddAdminControl from "../Controllers/addAdmin";
import AddReferred from "../Controllers/addReferred";
import ChatControl from "../Controllers/chatControl";

const AdminRouter = () => {
  const dispatch = useDispatch();

  FetchAll(dispatch);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  if (loading === false) {
    return (
      <div className="containerLoadingIn">
        <div className="loadingIn">
          <img
            style={{
              position: "relative",
              alignSelf: "center",
              justifySelf: "center",
              width: "200px",
              height: "auto",
              objectFit: "cover",
              display: "flex",
            }}
            src={logo}
          />
          {/* <div  style={{
                position: 'absolute',
                top: '60vh',
                right: '40vw',
                width: "350px",
                height: "auto",
                display: "flex",
                alignItems: 'center',
                justifyContent: 'center'
              }}>
               <img
              style={{
                width: "80px",
                height: "auto",
                objectFit: "cover",
                display: "flex",
              }}
              src={Dual}
            />
            </div> */}
        </div>
      </div>
    );
  } else {
    return (
      <Router>
        <Route component={AdminNav} />
        <Route exact path="/" component={AdminGraficsControl} />
        <Route exact path="/stadistic" component={Stadistic} />
        <Route exact path="/addSell" component={AddSell} />
        <Route exact path="/addPackage" component={AddPackageControl} />
        <Route
          exact
          path="/CommissionManagement"
          component={CommissionManagement}
        />
        <Route exact path="/sells" component={SellsControl} />
        <Route
          exact
          path="/packageManagement"
          component={PackageManagementControl}
        />
        <Route
          exact
          path="/management/ManagerRecruit"
          component={ManagerRecruit}
        />
        <Route exact path="/UsersManagement" component={UserManagement} />
        <Route exact path="/UserManagement/referred" component={AddReferred} />
        <Route
          exact
          path="/UserManagement/addAdmin"
          component={AddAdminControl}
        />
        <Route
          exact
          path="/adminManagement"
          component={AdminManagementControl}
        />
        <Route exact path="/editUser" component={UserEditController} />
        <Route exact path="/editReferred" component={ReferredEditControl} />
        <Route exact path="/editManager" component={ManagerEditController} />
        <Route exact path="/salesByMe" component={StadisticInfo} />
        <Route exact path="/salesByRealtors" component={SalesByRealtors} />
        <Route exact path="/myReferrals" component={MyReferrals} />
        <Route exact path="/newRealtors" component={NewRealtors} />
        <Route
          exact
          path="/totalCommissionPaid"
          component={TotalCommisionPaid}
        />
        <Route
          exact
          path="/totalCommissionUnpaid"
          component={TotalCommisionUnpaid}
        />
        <Route exact path="/addClient" component={AddClientControl} />
        <Route exact path="/clientsManagement" component={MyClientsControl} />
        <Route exact path="/editClient" component={EditClientControl} />
        <Route exact path="/myClientHistory" component={clientHistoryControl} />
        <Route exact path="/chat" component={ChatControl} />
      </Router>
    );
  }
};

export default AdminRouter;
