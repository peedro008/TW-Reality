import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ReactS3 from "react-s3";
import { getClients } from "../../../Redux/actions";
import PreQualifying from "../../../Components/clientComponents/preQualifyingComp/preQualifying";

const config = {
  bucketName: process.env.REACT_APP_BUCKET_NAME,
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS,
  secretAccessKey: process.env.REACT_APP_SECRET,
};

function PreQualifyingControl({ clientData, setReloadInfo }) {
  const { ClientId, UserId, attributes } = clientData;

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
  const [loaderPhotoLicense, setLoaderPhotoLicense] = useState("");
  const [resp, setResp] = useState([]);
  const [updater, setUpdater] = useState(0);

  let New_York_Time = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    timestyle: "full",
    hourCycle: "h24",
  });
  console.log(form);
  const [comprobate, setComprobate] = useState();

  useEffect(() => {
    if (attributes.length > 0) {
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
          setResp([false, "Pre Qualifying Data can not be updated"]);
        } else {
          onOpenModal();
          setResp([true, "Pre Qualifying Data updated succesfully"]);
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
        form2.files.push({
          name: data.key,
          link: data.location.replace(" ", "+"),
          contentType: data.key.split(".")[1],
          type: "normal",
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

  const uploadDriverLicense = (e) => {
    setLoaderPhotoLicense("Loading");
    ReactS3.uploadFile(e.target.files[0], config)
      .then((data) => {
        let form2 = form;
        form2.files.push({
          name: data.key,
          link: data.location.replace(" ", "+"),
          contentType: data.key.split(".")[1],
          type: "license",
        });
        setForm(form2);
        setUpdater(updater + 1);
        setLoaderPhotoLicense("");
      })
      .catch((err) => {
        console.log(err);
        setUpdater(updater + 1);
        // setLoadingFile("fileDont");
      });
  };

  return (
    <PreQualifying
      form={form}
      setForm={setForm}
      open={open}
      onSubmit={onSubmit}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
      resp={resp}
      userId={userId}
      clientData={clientData}
      uploadDocs={uploadDocs}
      uploadDriverLicense={uploadDriverLicense}
      setUpdater={setUpdater}
      updater={updater}
      loaderPhoto={loaderPhoto}
      loaderPhotoLicense={loaderPhotoLicense}
      comprobate={comprobate}
      setComprobate={setComprobate}
      loadForm={loadForm}
      setReloadInfo={setReloadInfo}
    />
  );
}

export default PreQualifyingControl;
