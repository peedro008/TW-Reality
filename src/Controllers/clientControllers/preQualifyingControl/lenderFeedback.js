import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ReactS3 from "react-s3";
import { getClients } from "../../../Redux/actions";
import LenderFeedback from "../../../Components/clientComponents/preQualifyingComp/LenderFeedback";

const config = {
  bucketName: process.env.REACT_APP_BUCKET_NAME,
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS,
  secretAccessKey: process.env.REACT_APP_SECRET,
};

function LenderFeedbackControl({ clientData, setReloadInfo }) {
  const { ClientId, UserId, attributes, conditions } = clientData;

  const initialForm = {
    ClientId: ClientId,
    UserId: UserId,
    conditions: [],
    files: [],
    attributes: [],
  };

  const userId = useSelector((state) => state.UserId);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [form, setForm] = useState(initialForm);
  const [loaderPhoto, setLoaderPhoto] = useState("");
  const [updater, setUpdater] = useState(0);
  const [resp, setResp] = useState([]);
  const [comprobate, setComprobate] = useState(0);
  let New_York_Time = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    timestyle: "full",
    hourCycle: "h24",
  });

  useEffect(() => {
    if (conditions?.filter((e) => e.key === "isPreAproved")?.length > 0) {
      setComprobate(0);
    } else {
      setComprobate(1);
    }
  }, [attributes]);

  const loadForm = () => {
    setForm({
      ClientId: ClientId,
      UserId: UserId,
      conditions: clientData?.conditions,
      files: [],
      attributes: clientData?.attributes,
    });
  };

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

  const onSubmit = () => {
    onOpenModal();
    fetch(`https://truewayrealtorsapi.com/client/${ClientId}/detail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(async (res) => {
      try {
        if (res.status !== 200) {
          onOpenModal();
          setResp([false, "Lender feedback can not be updated"]);
        } else {
          onOpenModal();
          setResp([true, "Lender feedback updated succesfully"]);
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

  const uploadDocs = (e) => {
    setLoaderPhoto("Loading");
    ReactS3.uploadFile(e.target.files[0], config)
      .then((data) => {
        let form2 = form;
        form2.files?.push({
          name: data.key,
          link: data.location.replace(" ", "+"),
          contentType: data.key.split(".")[1],
          type: "pre-approval",
        });
        setForm(form2);
        setUpdater(updater + 1);
        setLoaderPhoto("");
      })
      .catch((err) => {
        console.log(err);
        setUpdater(updater + 1);
      });
  };

  return (
    <LenderFeedback
      form={form}
      setForm={setForm}
      onSubmit={onSubmit}
      uploadDocs={uploadDocs}
      setUpdater={setUpdater}
      loadForm={loadForm}
      clientData={clientData}
      updater={updater}
      loaderPhoto={loaderPhoto}
      onCloseModal={onCloseModal}
      open={open}
      comprobate={comprobate}
      setComprobate={setComprobate}
      resp={resp}
    />
  );
}

export default LenderFeedbackControl;
