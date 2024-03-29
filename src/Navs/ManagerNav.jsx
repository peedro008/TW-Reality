import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/css.css";
import logo from "../assets/realtorsbig.png";
import { FiBarChart2, FiGrid } from "react-icons/fi";
import { FaBoxes, FaBoxOpen, FaPaperPlane, FaWallet } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { BiStats } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineFile } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/actions";
import brokerSumo from "../assets/brokersumo.png";
import miamiRealtors from "../assets/miamiRealtors.jpg";
import myRealtorsDash from "../assets/myRealtorsDash.png";
import kvCore from "../assets/kvCore.png";
import trueWayMarketing from "../assets/TRUEWAYMARKETING.png";
import trueWayRealtors from "../assets/TruewayTransaction.jpeg";
import formSimplicity from "../assets/formSimplicity.png";

function ManagerNav({ onSearch }) {
  const dispatch = useDispatch();

  const Name = useSelector((state) => state.userName);
  const Role = useSelector((state) => state.userRole);

  const logOut = () => {
    localStorage.clear();
    window.history.pushState("", "", "/");
    dispatch(logout());
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="topbar">
        <div style={{ paddingRight: "40px", display: "flex" }}>
        <div className="circleLink" style={{marginBottom: '25px',marginRight:'100px', marginTop: '20px'}}>
      <a href="https://forms.floridarealtors.org/index/signin" target='_blank'>
        <img
          className="imageLink"
          src={formSimplicity}
          alt={"logo"}
          style={{height: 'auto', width: '120px'}}
        />
            </a>
      </div>
        <div className="circleLink" style={{marginBottom: '10px',marginRight:'100px', marginTop: '20px'}}>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZxHssfWU5-ZyJ_b3vYtYsSUiyFZu4k1CDJ1rRviBQbbV70w/viewform?vc=0&c=0&w=1&flr=0" target='_blank'>
        <img
          className="imageLink"
          src={trueWayMarketing}
          alt={"logo"}
          style={{height: '30px', width: '120px'}}
        />
            </a>
      </div>
      <div className="circleLink" style={{marginBottom: '0px', marginRight:'95px'}}>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfohgaggb5AGraI-wzMDXdxch6LPgbcMH5lj5ZJLlGijFSGew/viewform?vc=0&c=0&w=1&flr=0" target='_blank'>
        <img
          className="imageLink"
          src={trueWayRealtors}
          alt={"logo"}
          style={{height: '40px', width: '120px' }}
        />
            </a>
      </div>
          <div className="circleLink">
            <a href="https://www.miamirealtors.com/" target="blank">
              <img
                className="imageLink"
                src={miamiRealtors}
                alt={"logo"}
                style={{ backgroundColor: "#2b4162" }}
              />
            </a>
          </div>
          <div className="circleLink">
            <a
              href="https://myrealtordash.clareityiam.net/idp/login"
              target="blank"
            >
              <img
                className="imageLink"
                src={myRealtorsDash}
                alt={"logo"}
                style={{ backgroundColor: "#2b4162" }}
              />
            </a>
          </div>
          <div className="circleLink">
            <a href="https://app.kvcore.com/" target="blank">
              <img
                className="imageLink"
                src={kvCore}
                alt={"logo"}
                style={{ backgroundColor: "#2b4162" }}
              />
            </a>
          </div>
          <div className="circleLink">
            <a href="https://www.brokersumo.com/#/dashboard" target="blank">
              <img
                className="imageLink"
                src={brokerSumo}
                alt={"logo"}
                style={{ backgroundColor: "#2b4162" }}
              />
            </a>
          </div>
        </div>
        <div style={{ paddingRight: "40px", display: "flex" }}>
          <div className="circle">
            <p className="initial">{Name && Name.substring(0, 1)}</p>
          </div>
          <div className="ANusercontainer">
            <p className="NAname">{Name}</p>
            <p className="NArole">{Role}</p>
          </div>
          <button
            onClick={() => logOut()}
            style={{ backgroundColor: "transparent", borderWidth: "0px" }}
          >
            <FiLogOut
              cursor="pointer"
              size="20px"
              color="rgb(134, 139, 165)"
              style={{ alignSelf: "center" }}
            />
          </button>
        </div>
      </div>

      <div className="sidebar">
        <img
          className="image"
          src={logo}
          alt={"logo"}
          style={{ backgroundColor: "#2b4162" }}
        />

        <div className="NAcontainer">
          <NavLink className="NAiconCover" to="/" activeClassName="NAavtive" exact>
            <FiBarChart2
              className="NAicon"
             color="rgb(134, 139, 165)"
              activeClassName="NAactive"
            />
          </NavLink>
        </div>

        <div className="NAcontainer">
          <NavLink
            className="NAiconCover"
            to="/managerDashboard"
            activeClassName="NAavtive"
            exact
          >
            <FiGrid
              className="NAicon"
             color="rgb(134, 139, 165)"
              activeClassName="NAactive"
            />
          </NavLink>
        </div>

        <div className="NAcontainer">
          <NavLink className="NAiconCover" to="/addSell" activeClassName="NAavtive">
            <FaRegMoneyBillAlt className="NAicon" size="20px" color="rgb(134, 139, 165)" />
          </NavLink>
        </div>
        <div className="NAcontainer">
          <NavLink
            className="NAiconCover"
            to="/sells"
            activeClassName="NAavtive"
            exact
          >
            <FaPaperPlane
              className="NAicon"
             color="rgb(134, 139, 165)"
              activeClassName="NAactive"
            />
          </NavLink>
        </div>

        <div className="NAcontainer">
          <NavLink
            className="NAiconCover"
            to="/realtorsListManager"
            activeClassName="NAavtive"
          >
            <MdManageAccounts
              style={{ height: "25px", width: "25px" }}
              size="35px"
             color="rgb(134, 139, 165)"
            />
          </NavLink>
        </div>
        <span />
        <div className="NAcontainer">
          <NavLink
            className="NAiconCover"
            to="/UsersManagement"
            activeClassName="NAavtive"
          >
            <MdAdd
              style={{ height: "25px", width: "25px" }}
              size="35px"
             color="rgb(134, 139, 165)"
            />
          </NavLink>
        </div>
        <span />
      </div>
    </div>
  );
}

export default ManagerNav;
