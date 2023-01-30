import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import {useSelector} from 'react-redux'

function PackageMarketingDash(props) {
  const packages = useSelector(state => state.PackageMarketing)
  const id = props.location.state.aboutProps.id;
  const myPackages = packages.filter(e => e.UserId === id)
  console.log(packages);
  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{props.location.state.aboutProps.name}</p>
      </div>
        <p className="subTittMan" style={{ fontSize: '18px'}}>Package Marketing list</p>
      <div className="DashContainer">
        <div className="DashSubCont">
          <>
            <table className="table5" style={{ marginTop: "2vh", width: '90vw' }}>
              <tbody>
                <tr>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Client name</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Address</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Closing Date</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Value</p>
                  </th>
                </tr>
                {myPackages.map((e,i) => {
                  return (
                    <tr key={i}>
                      <td className="ClientName" scope="row">
                        {e.clientName}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.email}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.phone}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.openDate}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.closingDate}
                      </td>
                      <td className="ClientName" scope="row">
                       $ {e.value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        </div>
      </div>
      <BsChevronLeft
      cursor='pointer'
        color="grey"
        style={{
          minWidth: "30px",
          minHeight: "30px",
          position: "fixed",
          zIndex: 1009,
          left: "80px",
          top: "17px",
          alignSelf: "flex-start",
        }}
        onClick={() => window.history.go(-1)}
      />
    </div>
  );
}

export default PackageMarketingDash;
