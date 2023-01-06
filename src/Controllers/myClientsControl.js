import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import MyClients from "../Components/myClients";

function MyClientsControl() {
  const userId = useSelector((state) => state.UserId);
  const [myClient, setMyClient] = useState([]);
  const [paginator, setPaginator] = useState(0);
  console.log(myClient);

  useEffect(() => {
    const offset = 5;
    fetch(
      `https://truewayrealtorsapi.com/getMyClients?UserId=${userId}&offset=${offset}&page=${paginator * 5}`
    ).then(async (res) => {
      try {
        const jsonRes = await res.json();
        if (typeof jsonRes === "string") {
          setMyClient([]);
        } else {
          {
            setMyClient(jsonRes);
          }
        }
      } catch (err) {
        console.log(err);
      }
    });
  }, [paginator]);

  return (
    <MyClients
      userId={userId}
      myClient={myClient}
      setPaginator={setPaginator}
      paginator={paginator}
    />
  );
}

export default MyClientsControl;
