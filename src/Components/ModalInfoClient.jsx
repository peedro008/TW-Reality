import React from "react";
import { Modal } from "react-responsive-modal";

const ModalInfoClient = ({ openInfoModal, setOpenInfoModal, metaData }) => {
  console.log(metaData);
  return (
    <Modal
      open={openInfoModal}
      onClose={() => setOpenInfoModal(false)}
      center
      classNames={"modal"}
    >
      <div className="modalInfoClient">
        <p className="clientData" style={{ fontSize: "25px" }}>
          {metaData?.message}
        </p>
        {metaData?.cambios?.map((e) => {
          return (
            <p
              className="clientData"
              style={{ color: "grey", fontSize: "20px" }}
            >
              • {e.campo}: {e.value}
            </p>
          );
        })}
        <p
          className="clientData"
          style={{ color: "grey", fontSize: "20px" }}
        ></p>
      </div>
    </Modal>
  );
};

export default ModalInfoClient;
