import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ClientHistory from "../Components/clientHistory";
import { useDispatch, useSelector } from "react-redux";
import { GetMyClients } from "../Logic/Fetch";
import { getClients } from "../Redux/actions";
import ReactS3 from "react-s3";

const config = {
  bucketName: process.env.REACT_APP_BUCKET_NAME,
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS,
  secretAccessKey: process.env.REACT_APP_SECRET,
};

function ClientHistoryControl(props) {
  const userId = useSelector((state) => state.UserId);
  const dispatch = useDispatch();
  let clientData = props?.location.state.client;
  let ClientId = clientData?.ClientId;
  const [clientDataReload, setClientDataReload] = useState();
  const [reloadInfo, setReloadInfo] = useState("");
  const [history, setHistory] = useState([]);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [respEditClient, setRespEditClient] = useState([]);
  const [loaderPhoto, setLoaderPhoto] = useState(false);
  const [goStatus, setGoStatus] = useState("statusHistory");
  const [form, setForm] = useState([]);

  let optionsReason = [
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

  let optionsStatusListing = [
    {
      value: "Active / Listed",
      label: "Active / Listed",
    },
    {
      value: "Under contract",
      label: "Under contract",
    },
    {
      value: "Closed",
      label: "Closed",
    },
  ];

  let optionsStatusSelling = [
    {
      value: "Pre-qualifying",
      label: "Pre-qualifying",
    },
    {
      value: "Showing",
      label: "Showing",
    },
    {
      value: "Under contract",
      label: "Under contract",
    },
    {
      value: "Closed",
      label: "Closed",
    },
  ];
  let optionsStatusRent = [
    {
      value: "Under contract",
      label: "Under contract",
    },
    {
      value: "Closed",
      label: "Closed",
    },
  ];

  useEffect(() => {
    fetch(`https://truewayrealtorsapi.com/getClient?ClientId=${ClientId}`)
      .then(async (res) => {
        const jsonRes = await res.json();
        if (res.status === 200) {
          setClientDataReload(jsonRes[0]);
          setHistory(jsonRes[0].ClientHistories.reverse());
        } else {
          console.log(`Error in getClientHistory: ${res.status}`);
          setClientDataReload([]);
        }
      })
      .catch((err) => {
        console.log(`Error in getClientHistory: ${err}`);
        setClientDataReload([]);
      });
  }, [reloadInfo]);

  const dispatchClient = () => {
    axios
      .get(`https://truewayrealtorsapi.com/getAllMyClients?UserId=${userId}`)
      .then(function (response) {
        response.status == 200 || response.status == 204
          ? dispatch(getClients(response.data))
          : dispatch(getClients([]));
      })
      .catch((error) => {
        dispatch(getClients([]));
      });
  };
  useEffect(() => {
    setForm({
      ...form,
      clientType: clientDataReload?.clientType,
      status: clientDataReload?.status,
      reason: clientDataReload?.reason,
      ClientId: ClientId,
      Notes: "",
    });
  }, [clientDataReload]);

  console.log(clientDataReload);

  const onSubmit = () => {
    fetch(`https://truewayrealtorsapi.com/editClient`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(async (res) => {
      try {
        if (res.status !== 200 || res.status !== 204) {
          console.log("Client edited succesfully");
        } else {
          console.log("Client can not be edited");
        }
      } catch (err) {
        console.log("Client can not be edited");
      }
    });

    fetch(`https://truewayrealtorsapi.com/addClientHistory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(async (res) => {
      try {
        if (res.status === 200) {
          onOpenModal();
          setGoStatus("statusHistory");
          setReloadInfo(history.length + 1);
          dispatchClient();
          setRespEditClient([true, "Client record added successfully"]);

          setTimeout(() => {
            onCloseModal();
          }, 1000);
        } else {
          onOpenModal();
          setGoStatus("statusHistory");
          setRespEditClient([false, "Error adding Record"]);
        }
      } catch (err) {
        onOpenModal();
        setGoStatus("statusHistory");
        setRespEditClient([false, "Error adding record"]);
      }
    });
  };

  const upload = (e) => {
    setLoaderPhoto(true);
    console.log(e.target.files[0]);
    ReactS3.uploadFile(e.target.files[0], config)
      .then((data) => {
        console.log(data);

        fetch(`https://truewayrealtorsapi.com/editClient`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ClientId: ClientId, photo: data.location }),
        }).then(async (res) => {
          try {
            if (res.status !== 200 || res.status !== 204) {
              onOpenModal();
              dispatchClient();
              setGoStatus("");
              setReloadInfo(history.length + 1);
              setRespEditClient([true, "Photo edited succesfully"]);
              setLoaderPhoto(false);
              setTimeout(() => {
                onCloseModal();
              }, 1000);
            } else {
              onOpenModal();
              setGoStatus("");
              setRespEditClient([false, "Photo can not be edited"]);
              setLoaderPhoto(false);
            }
          } catch (err) {
            onOpenModal();
            setLoaderPhoto(false);
            setGoStatus("");
            setRespEditClient([false, "Error adding record"]);
          }
        });
        // setFileUploaded(data.key);
        // setIconSend("iconSend");
        // setForm({ media: data.location });
      })
      .catch((err) => {
        console.log(err);
        // setLoadingFile("fileDont");
      });
  };

  return (
    <ClientHistory
      myClientHistories={history}
      clientData={clientDataReload}
      optionsStatus={optionsStatus}
      optionsStatusListing={optionsStatusListing}
      optionsStatusSelling={optionsStatusSelling}
      optionsStatusRent={optionsStatusRent}
      optionsReason={optionsReason}
      respEditClient={respEditClient}
      form={form}
      setForm={setForm}
      onCloseModal={onCloseModal}
      onSubmit={onSubmit}
      open={open}
      setReloadInfo={setReloadInfo}
      upload={upload}
      loaderPhoto={loaderPhoto}
      goStatus={goStatus}
    />
  );
}

export default ClientHistoryControl;
