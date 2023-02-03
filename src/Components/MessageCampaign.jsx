import React, { useState } from "react";
import { BiCloudUpload, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
import Isologo_background from "../assets/Isologo_background.png";
import { Modal } from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import CrossMark from "../assets/cross-mark.png";
import spinnerr from "../assets/loaderEllipsis.gif";
import { BsChevronLeft } from "react-icons/bs";
import ReactS3 from "react-s3";

const config = {
  bucketName: process.env.REACT_APP_BUCKET_NAME,
  // dirName: 'whatsApp', /* optional */
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS,
  secretAccessKey: process.env.REACT_APP_SECRET,
};

const MessageCampaign = ({
  contacts,
  addContact,
  setForm,
  form,
  respAdd,
  setSearch,
  onCloseModal,
  open,
  onSubmit,
  resetInput,
  setResetInput,
}) => {
  const [fileUploaded, setFileUploaded] = useState("");
  const [loadingFile, setLoadingFile] = useState(false);
  const [iconSend, setIconSend] = useState("iconSend");

  const upload = (e) => {
    setLoadingFile("fileUploading");
    console.log(e.target.files[0]);
    ReactS3.uploadFile(e.target.files[0], config)
      .then((data) => {
        console.log(data);
        setFileUploaded(data);
        setIconSend("iconSend");
        setForm({ ...form, media: data.location.replace(" ", "+") });
        setLoadingFile("fileDone");
      })
      .catch((err) => {
        console.log(err);
        setLoadingFile("fileDont");
      });
  };
  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">Message Campaign</p>
      </div>
      <div className="containerContact" style={{ marginTop: "10px" }}>
        <div className="containerContactList">
          <div
            className="input-wrapper-contact"
            style={{ marginTop: "15px", marginLeft: "10px" }}
          >
            <p
              className="chatNameSelect"
              style={{ backgroundColor: "transparent", width: "400px" }}
            >
              Send multiple messages
            </p>
          </div>

          <div style={{ marginLeft: "30px", marginTop: "30px" }}>
            <form
              onSubmit={() => onSubmit()}
              className="chatText"
              style={{ width: "50%" }}
            >
              <textarea
                className="inputMessage"
                placeholder="Type a message..."
                value={resetInput}
                onChange={(e) => {
                  setForm({ ...form, body: e.target.value });
                  setResetInput(e.target.value);
                }}
              ></textarea>
              <div class="file-input">
                <input
                  onChange={(e) => {
                    upload(e);
                    setFileUploaded("Loading");
                    setIconSend("iconSend2");
                  }}
                  type="file"
                  name="file-input"
                  id="file-input"
                  class="file-input__input"
                />
                <label class="file-input__label" htmlFor="file-input">
                  <BiCloudUpload size={"300px"} />
                </label>
              </div>
              {(form.body || form.media) && (
                <label
                  class="send__label"
                  onClick={() => {
                    onSubmit();
                    setResetInput("");
                    setIconSend("iconSend2");
                    setFileUploaded("");
                  }}
                >
                  <AiOutlineSend size={"35px"} className={iconSend} />
                </label>
              )}
            </form>
          </div>

          {fileUploaded === "Loading" ? (
            <img
              src={spinnerr}
              style={{
                width: "40px",
                marginBottom: "-15px",
                paddingLeft: "35px",
              }}
            />
          ) : (
            fileUploaded !== "" && (
              <>
                <p
                  className="chatPhone"
                  style={{
                    marginTop: "30px",
                    marginBottom: "20px",
                    marginLeft: "30px",
                  }}
                >
                  File add: {fileUploaded.key}
                </p>
                <img
                  src={fileUploaded.location}
                  style={{ width: "250px", marginLeft: "30px" }}
                />
              </>
            )
          )}
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => {
          onCloseModal();
        }}
        center
        classNames={"modal"}
      >
        <div className="modal">
          {respAdd === "Error adding contant" ? (
            <>
              <img
                src={CrossMark}
                style={{
                  width: "35px",
                  alignSelf: "center",
                  marginTop: "25px",
                  marginBottom: "10px",
                }}
              />
              <p className="modalText">Error</p>
            </>
          ) : (
            <>
              <img
                src={Icon}
                style={{
                  width: "35px",
                  alignSelf: "center",
                  marginTop: "25px",
                  marginBottom: "10px",
                }}
              />
              <p className="modalText">Send: {respAdd.send || "0"}</p>
              <p className="modalText">Failed: {respAdd.failed}</p>
            </>
          )}

          <button
            className="modalButton"
            onClick={() => {
              onCloseModal();
            }}
          >
            Continue
          </button>
        </div>
      </Modal>
      <BsChevronLeft
        cursor="pointer"
        color="grey"
        style={{
          minWidth: "30px",
          minHeight: "30px",
          zIndex: 1010,
          position: "fixed",
          zIndex: 9,
          left: "80px",
          top: "17px",
          alignSelf: "flex-start",
        }}
        onClick={() => window.history.go(-1)}
      />
      <img
        src={Isologo_background}
        style={{
          position: "fixed",
          pointerEvents: "none",
          right: 0,
          bottom: 0,
          width: "428px",
          opacity: "0.5",
        }}
      />
    </div>
  );
};

export default MessageCampaign;
