import React from "react";

const SellingTable = ({packages, Users}) => {
  return (
    <div>
      <table className="table5" style={{ minWidth: '70vw', maxWidth: '90vw', marginTop: '80px' }}>
        <tbody>
          <tr>
            <th scope="col" className="column1">
              <p className="REPtype">Property Address</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype">Listening Agent's Email</p>
            </th>
            {/* <th scope="col" className="column1">
              <p className="REPtype">Listening Agent's Phone</p>
            </th> */}
            <th scope="col" className="column1">
              <p className="REPtype">Title Company (Email)</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype">Title Company (Phone)</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype">Seller</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype">Documents</p>
            </th>
          </tr>
           {packages?.map((e, i) => {
                return (
                  <tr key={i}>
                    <td className="ClientName" scope="row">
                      {e.propertyAddress}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.agentEmail}
                    </td>
                    {/* <td className="ClientName" scope="row">
                    {e.agentPhone}
                    </td> */}
                    <td className="ClientName" scope="row">
                      {e.buyerEmail}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.buyerPhone}
                    </td>
                    <td className="ClientName" scope="row">
                      {
                        Users.filter(f => f.id === e.UserId)[0]?.name
                      }
                    </td>
                    <td className="ClientName" scope="row">
                      <a href={e.otherDocuments} target='blank'>
                      Link
                      </a>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default SellingTable;
