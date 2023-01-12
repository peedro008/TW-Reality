import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ClientHistory from "../Components/clientHistory";
import { useDispatch, useSelector } from "react-redux";
import { GetMyClients } from "../Logic/Fetch";
import { getClients } from "../Redux/actions";

function ClientHistoryControl(props) {
  const userId = useSelector((state) => state.UserId);
  const dispatch = useDispatch();
  let clientData = props?.location.state.client;
  let ClientId = clientData?.ClientId;
  const [history, setHistory] = useState([])
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [respEditClient, setRespEditClient] = useState([]);
  const [form, setForm] = useState([])

  let optionsStatus = [
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

  let optionsStatusLead = [
    {
      value: "Entry Level",
      label: "Entry Level",
    },
    {
      value: "Hot Lead",
      label: "Hot Lead",
    },
  ];

  const dispatchClient = () => {
    axios
    .get(`http://localhost:8080/getAllMyClients?UserId=${userId}`)
    .then(function (response) {
      response.status == 200 || response.status == 204
        ? dispatch(getClients(response.data))
        : dispatch(getClients([]));
    })
    .catch((error) => {
      dispatch(getClients([]));
    });
  }
  useEffect(() => {
      fetch(`http://localhost:8080/getClientHistory?ClientId=${ClientId}`).then(async (res) => 
      {
        const jsonRes = await res.json();
        if (res.status === 200 ) {
          setHistory(jsonRes)
        } else {
          console.log(`Error in getClientHistory: ${res.status}`)
          setHistory([])
        }
      }  
      ).catch(err => {console.log(`Error in getClientHistory: ${err}`)
      setHistory([])});

      setForm({...form, clientType: clientData.clientType, status: clientData.status, ClientId: ClientId, Notes: ''})
  }, [clientData])
  
  const onSubmit = () => {
    fetch(`http://localhost:8080/editClient`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(async (res) => {
      try {
        if (res.status !== 200 || res.status !== 204) {
          console.log('Client edited succesfully')
        } else {
          console.log('Client can not be edited')
        }
      } catch (err) {
        console.log('Client can not be edited')
      }
    });

    fetch(`http://localhost:8080/addClientHistory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(async (res) => {
      try {
        if (res.status === 200) {
          onOpenModal();
          // Reload();
          dispatchClient();
          setRespEditClient([true, "Client record added successfully"])
        } else {
          onOpenModal();
          setRespEditClient([false, "Error adding Record"]);
        }
      } catch (err) {
        onOpenModal();
   
        setRespEditClient([false, "Error adding record"]);
      }
    });
  };

  return (
    <ClientHistory
    myClientHistories={history}
    clientData={clientData}
    optionsStatusLead={optionsStatusLead}
      optionsStatus={optionsStatus}
      respEditClient={respEditClient}
      form={form}
      setForm={setForm}
      onCloseModal={onCloseModal}
      onSubmit={onSubmit}
      open={open}
    />
  );
}

export default ClientHistoryControl;
