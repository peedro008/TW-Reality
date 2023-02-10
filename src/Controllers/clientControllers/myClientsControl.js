import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import MyClients from "../../Components/clientComponents/myClients";

function MyClientsControl() {
  const userId = useSelector((state) => state.UserId);
  const allMyClients = useSelector((state) => state.Clients);
  const [myClient, setMyClient] = useState([]);
  const [paginator, setPaginator] = useState(0);
  const [allMyClientsFilter, setAllMyClientsFilter] = useState(allMyClients);
  const [allMyClientsPag, setAllMyClientsPag] = useState(
    allMyClientsFilter?.slice(0, 10)
  );
  const [isFilter, setIsFilter] = useState(false);
  const [typeClient, setTypeClient] = useState("");
  const [reasonClient, setReasonClient] = useState("");
  const [statusClient, setStatusClient] = useState("");
  const [searchName, setSearchName] = useState("");

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
    {
      value: "Entry Level",
      label: "Entry Level",
    },
    {
      value: "Hot Lead",
      label: "Hot Lead",
    },
  ];

  const filterOn = (btnFilter) => {
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
          e.clientType
            .toLowerCase()
            .includes(
              btnFilter ? btnFilter.toLowerCase() : typeClient?.toLowerCase()
            )
        )
        .filter((e) =>
          e.clientName.toLowerCase().includes(searchName?.toLowerCase())
        )
    );
  };

  useEffect(() => {
    if (isFilter !== true) {
      const offset = 10;
      fetch(
        `http://localhost:8080/getMyClients?UserId=${userId}&offset=${offset}&page=${
          paginator * 10
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
      allMyClientsFilter?.slice(paginator * 10, paginator * 10 + 10)
    );
  }, [paginator, allMyClientsFilter]);

  return (
    <MyClients
      allMyClientsFilter={allMyClientsPag}
      setTypeClient={setTypeClient}
      setReasonClient={setReasonClient}
      setStatusClient={setStatusClient}
      setPaginator={setPaginator}
      paginator={paginator}
      optionsReason={optionsReason}
      optionsStatus={optionsStatus}
      filterOn={filterOn}
      isFilter={isFilter}
      setSearchName={setSearchName}
    />
  );
}

export default MyClientsControl;
