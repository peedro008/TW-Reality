import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getClients } from "../../../Redux/actions";
import Showing from "../../../Components/clientComponents/showingComp/showing";

function ShowingControl({ clientData, setReloadInfo, setNewHistory }) {
  const { ClientId, UserId, attributes } = clientData;

  const initialForm = {
    ClientId: ClientId,
    UserId: UserId,
    attributes: [
      { key: "houseType", value: "" },
      { key: "city", value: "" },
      { key: "zipCodes", value: "" },
      { key: "bedrooms", value: "" },
      { key: "baths", value: "" },
      { key: "size", value: "" },
      { key: "pool", value: "" },
      { key: "Notes", value: "" },
    ],
  };

  let optionsHouse = [
    {
      value: "Condo",
      label: "Condo",
    },
    {
      value: "Commercial",
      label: "Commercial",
    },
    {
      value: "Mobile/Manufacturad",
      label: "Mobile/Manufacturad",
    },
    {
      value: "Single Family",
      label: "Single Family",
    },
    {
      value: "Townhouse",
      label: "Townhouse",
    },
    {
      value: "Villa",
      label: "Villa",
    },
  ];

  const userId = useSelector((state) => state.UserId);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [form, setForm] = useState(initialForm);
  const [resp, setResp] = useState([]);
  const [updater, setUpdater] = useState(0);
  const [comprobate, setComprobate] = useState();

  let New_York_Time = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    timestyle: "full",
    hourCycle: "h24",
  });

  useEffect(() => {
    if (attributes.length > 0) {
      setComprobate(0);
    } else {
      setComprobate(0);
    }
  }, [attributes]);

  const loadForm = () => {
    setForm({
      ClientId: ClientId,
      UserId: UserId,
      conditions: [
        {
          id: clientData?.conditions[0].id,
          key: "selfEmployee",
          value: clientData?.conditions[0].value,
        },
        {
          id: clientData?.conditions[1].id,
          key: "employeeByOthers",
          value: clientData?.conditions[1].value,
        },
      ],
      files: [],
      attributes: [
        {
          id: clientData?.attributes[0].id,
          key: "timeBusiness",
          value: clientData?.attributes[0].value,
        },
        {
          id: clientData?.attributes[1].id,
          key: "payPerHour",
          value: clientData?.attributes[1].value,
        },
        {
          id: clientData?.attributes[2].id,
          key: "hoursPerWeek",
          value: clientData?.attributes[2].value,
        },
        {
          id: clientData?.attributes[3].id,
          key: "overtime",
          value: clientData?.attributes[3].value,
        },
        {
          id: clientData?.attributes[4].id,
          key: "listPreviusJobs",
          value: clientData?.attributes[4].value,
        },
        {
          id: clientData?.attributes[5].id,
          key: "desireHouseType",
          value: clientData?.attributes[5].value,
        },
        {
          id: clientData?.attributes[6].id,
          key: "Notes",
          value: clientData?.attributes[6].value,
        },
      ],
    });
  };

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
  };

  const onSubmit = () => {
    onOpenModal();
    fetch(`http://localhost:8080/client/${ClientId}/detail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(async (res) => {
      try {
        if (res.status !== 200) {
          onOpenModal();
          setResp([false, "Showing Data can not be updated"]);
        } else {
          onOpenModal();
          setResp([true, "Showing Data updated succesfully"]);
          setTimeout(() => {
            dispatchClient();
            setReloadInfo(New_York_Time);
            setComprobate(0);
            onCloseModal();
          }, 1500);
        }
      } catch (err) {
        onOpenModal();
        console.log(err);
        setResp([false, "Error editing Client"]);
      }
    });
  };

  return (
    <Showing
      form={form}
      setForm={setForm}
      open={open}
      onSubmit={onSubmit}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
      resp={resp}
      userId={userId}
      clientData={clientData}
      setUpdater={setUpdater}
      updater={updater}
      comprobate={comprobate}
      setComprobate={setComprobate}
      loadForm={loadForm}
      optionsHouse={optionsHouse}
    />
  );
}

export default ShowingControl;
