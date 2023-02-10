import React from "react";
import { Modal } from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import CrossMark from "../assets/cross-mark.png";

const CommonModal = ({ open, onCloseModal, resp }) => {
  return (
    <Modal open={open} onClose={onCloseModal} center classNames={"modal"}>
      <div className="modal">
        {resp[0] === true ? (
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

            <p className="modalText">{resp[1] || "Saved"}</p>
          </>
        ) : (
          resp[0] === false && (
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

              <p className="modalText">{resp[1] || "Error"}</p>
            </>
          )
        )}
      </div>
    </Modal>
  );
};

export default CommonModal;
