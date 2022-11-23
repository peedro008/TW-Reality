import React from "react";

const OfferTable = ({packages, Users}) => {
  return (
    <div>
      <table className="table5" style={{ minWidth: '80vw', marginTop: '80px' }}>
        <tbody>
          <tr>
            <th scope="col" className="column1">
              <p className="REPtype">Property Address</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype">Offer Amount</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype">Closing Date</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype">Type of financing?</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype">Initial Deposit</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype">Buyer's Name</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype">Days to acept</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype">Seller</p>
            </th>
          </tr>
           {packages?.map((e,i) => {
                return (
                  <tr key={i}>
                    <td className="ClientName" scope="row">
                      {e.propertyAddress}
                    </td>
                    <td className="ClientName" scope="row">
                      $ {e.offerAmount}
                    </td>
                    <td className="ClientName" scope="row">
                    {e.closingDate?.slice(0,10)}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.typeFinancing}
                    </td>
                    <td className="ClientName" scope="row">
                      $ {e.initialDeposit}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.buyerName}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.acceptOffer}
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

export default OfferTable;
