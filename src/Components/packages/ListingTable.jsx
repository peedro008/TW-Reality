import React from "react";

const ListingTable = ({packages, Users}) => {
  return (
    <div>
      <table className="table5" style={{ marginTop: "80px" }}>
        <tbody>
          <tr>
            <th scope="col" className="column1">
              <p className="REPtype">Property Address</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype">Listing Price</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype">Total Commission</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype">Efective date</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype">Listing Term</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype">Seller</p>
            </th>
          </tr>
           {packages?.map((e, i) => {
                return (
                  <tr key={i}>
                    <td className="ClientName" scope="row">
                      {e.propertyAddress}
                    </td>
                    <td className="ClientName" scope="row">
                      $ {e.listingPrice}
                    </td>
                    <td className="ClientName" scope="row">
                    $ {e.totalCommission}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.closingDate?.slice(0,10)}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.listingTerm}
                    </td>
                    <td className="ClientName" scope="row">
                      {
                        Users.filter(f => f.id === e.UserId)[0]?.name
                      }
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default ListingTable;
