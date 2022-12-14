import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import MyClients from "../Components/myClients";

function MyClientsControl() {
  const userId = useSelector((state) => state.UserId);
  const allMyClients = useSelector((state) => state.Clients);
  const [myClient, setMyClient] = useState([]);
  const [paginator, setPaginator] = useState(0);
  const [allMyClientsFilter, setAllMyClientsFilter] = useState(allMyClients);
  const [allMyClientsPag, setAllMyClientsPag] = useState(
    allMyClientsFilter?.slice(0, 5)
  );
  const [isFilter, setIsFilter] = useState(false);
  const [typeClient, setTypeClient] = useState("");
  const [reasonClient, setReasonClient] = useState("");
  const [statusClient, setStatusClient] = useState("");

  let optionsReason = [
    {
      value: "",
      label: "All",
    },
    {
      value: "Buyer",
      label: "Buyer",
    },
    {
      value: "Seller",
      label: "Seller",
    },
    {
      value: "Renter",
      label: "Renter",
    },
  ];

  let optionsClient = [
    {
      value: "Client",
      label: "Client",
    },
    {
      value: "Lead",
      label: "Lead",
    },
  ];

  let optionsStatus = [
    {
      value: "",
      label: "All",
    },
    {
      value: "Showing",
      label: "Showing",
    },
    {
      value: "Pre-Qualifying",
      label: "Pre-Qualifying",
    },
    {
      value: "Under Contract",
      label: "Under Contract",
    },
    {
      value: "Closed",
      label: "Closed",
    },
    {
      value: "Archive",
      label: "Archive",
    },
    {
      value: "Listed",
      label: "Listed",
    },
  ];

  const filterOn = () => {
    setPaginator(0);
    setIsFilter(true);
    setAllMyClientsFilter(
      allMyClients
        .filter((e) =>
          e.status.toLowerCase().includes(statusClient?.toLowerCase())
        )
        .filter((e) =>
          e.reason.toLowerCase().includes(reasonClient?.toLowerCase())
        )
        .filter((e) =>
          e.clientType.toLowerCase().includes(typeClient?.toLowerCase())
        )
    );
  };

  useEffect(() => {
    if (isFilter !== true) {
      const offset = 5;
      fetch(
        `https://truewayrealtorsapi.com/getMyClients?UserId=${userId}&offset=${offset}&page=${
          paginator * 5
        }`
      ).then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (typeof jsonRes === "string") {
            setMyClient([]);
          } else {
            setMyClient(jsonRes);
          }
        } catch (err) {
          console.log(err);
        }
      });
    }
  }, [paginator]);

  useEffect(() => {
    setAllMyClientsPag(
      allMyClientsFilter?.slice(paginator * 5, paginator * 5 + 5)
    );
  }, [paginator, allMyClientsFilter]);

  return (
    <MyClients
      allMyClientsFilter={isFilter ? allMyClientsPag : myClient}
      setTypeClient={setTypeClient}
      setReasonClient={setReasonClient}
      setStatusClient={setStatusClient}
      userId={userId}
      setPaginator={setPaginator}
      paginator={paginator}
      optionsClient={optionsClient}
      optionsReason={optionsReason}
      optionsStatus={optionsStatus}
      filterOn={filterOn}
      isFilter={isFilter}
    />
  );
}

export default MyClientsControl;
