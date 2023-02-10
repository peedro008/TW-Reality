import React, { useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
import spinnerr from "../../../assets/loadingIcon.gif";

const AddLenderFeedback = ({
  form,
  setForm,
  onSubmit,
  uploadDocs,

  loaderPhoto,
  updater,
  comprobate,
  open,
  resp,
  setUpdater,
}) => {
  console.log(form);
  const [checkedOne, setCheckedOne] = useState(false);

  const handleChangeOne = () => {
    setCheckedOne("Pre-Aproved");
  };

  const handleChangeTwo = () => {
    setCheckedOne("Need-to-work");
  };

  return (
    <div className="managerInputsContainer" style={{ marginTop: "10px" }}>
      <div className="managerInputsubContainer" style={{ width: "70vw" }}>
        <div className="inputDiv">
          <p className="PAYtitle">Pre-Aproved</p>
          <label className="containerCheck2">
            <input
              type="checkbox"
              checked={checkedOne === "Pre-Aproved"}
              className="checkBoxCont"
              onChange={(e) => {
                let form2 = form;
                if (
                  form.conditions?.filter((e) => e.key === "isPreAproved")
                    .length > 0
                ) {
                  form2.conditions.filter(
                    (e) => e.key === "isPreAproved"
                  )[0].value = true;

                  setForm(form2);
                } else {
                  form2.conditions.push({
                    key: "isPreAproved",
                    value: true,
                  });
                  setForm(form2);
                }
                setUpdater(updater + 1);
                handleChangeOne();
              }}
            />
            <span class="checkmark3"></span>
          </label>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">Need to work on credit or income</p>
          <label className="containerCheck2">
            <input
              type="checkbox"
              checked={checkedOne === "Need-to-work"}
              className="checkBoxCont"
              onChange={(val) => {
                let form2 = form;
                if (
                  form.conditions.filter((e) => e.key === "isPreAproved")
                    .length > 0
                ) {
                  form2.conditions.filter(
                    (e) => e.key === "isPreAproved"
                  )[0].value = false;

                  setForm(form2);
                } else {
                  form2.conditions.push({
                    key: "isPreAproved",
                    value: false,
                  });
                  setForm(form2);
                }
                handleChangeTwo();
              }}
            />
            <span class="checkmark3"></span>
          </label>
        </div>
      </div>
      {checkedOne === "Pre-Aproved" ? (
        <>
          <div className="managerInputsubContainer" style={{ width: "60vw" }}>
            <div className="inputDiv">
              <p className="PAYtitle">Current Credit Score</p>
              <input
                type="number"
                placeholder="Type current credit..."
                onChange={(e) => {
                  const form2 = form;
                  if (
                    form.attributes.filter(
                      (e) => e.key === "currentCreditScore"
                    ).length > 0
                  ) {
                    form2.attributes.filter(
                      (e) => e.key === "currentCreditScore"
                    )[0].value = e.target.value;
                    setForm(form2);
                  } else {
                    form2.attributes.push({
                      key: "currentCreditScore",
                      value: e.target.value,
                    });
                    setForm(form2);
                  }
                  setUpdater(updater + 1);
                }}
                className="inputClient"
              ></input>
            </div>
            <div className="inputDiv">
              <p className="PAYtitle">Pre-Approved amount</p>
              <input
                placeholder="Type amount..."
                onChange={(e) => {
                  const form2 = form;
                  if (
                    form.attributes.filter((e) => e.key === "preApprovedAmount")
                      .length > 0
                  ) {
                    form2.attributes.filter(
                      (e) => e.key === "preApprovedAmount"
                    )[0].value = e.target.value;
                    setForm(form2);
                  } else {
                    form2.attributes.push({
                      key: "preApprovedAmount",
                      value: e.target.value,
                    });
                    setForm(form2);
                  }

                  setUpdater(updater + 1);
                }}
                className="inputClient"
              ></input>
            </div>
            <div className="inputDiv">
              <p className="PAYtitle">Type of loan</p>
              <input
                placeholder="Type amount..."
                onChange={(e) => {
                  const form2 = form;
                  if (
                    form.attributes.filter((e) => e.key === "typeOfLoan")
                      .length > 0
                  ) {
                    form2.attributes.filter(
                      (e) => e.key === "typeOfLoan"
                    )[0].value = e.target.value;
                    setForm(form2);
                  } else {
                    form2.attributes.push({
                      key: "typeOfLoan",
                      value: e.target.value,
                    });
                    setForm(form2);
                  }
                  setUpdater(updater + 1);
                }}
                className="inputClient"
              ></input>
            </div>
            <div className="inputDiv">
              <p className="PAYtitle">Down payment amount</p>
              <input
                placeholder="Type down payment..."
                onChange={(e) => {
                  const form2 = form;
                  if (
                    form.attributes.filter((e) => e.key === "downPaymentAmount")
                      .length > 0
                  ) {
                    form2.attributes.filter(
                      (e) => e.key === "downPaymentAmount"
                    )[0].value = e.target.value;
                    setForm(form2);
                  } else {
                    form2.attributes.push({
                      key: "downPaymentAmount",
                      value: e.target.value,
                    });
                    setForm(form2);
                  }
                  setUpdater(updater + 1);
                }}
                className="inputClient"
              ></input>
            </div>
          </div>
          <div className="managerInputsubContainer" style={{ width: "60vw" }}>
            <div className="inputDiv">
              <p className="PAYtitle">Estimated cash to close</p>
              <input
                type="number"
                placeholder="Type estimated cash..."
                onChange={(e) => {
                  const form2 = form;
                  if (
                    form.attributes.filter((e) => e.key === "estimatedCash")
                      .length > 0
                  ) {
                    form2.attributes.filter(
                      (e) => e.key === "estimatedCash"
                    )[0].value = e.target.value;
                    setForm(form2);
                  } else {
                    form2.attributes.push({
                      key: "estimatedCash",
                      value: e.target.value,
                    });
                    setForm(form2);
                  }
                  setUpdater(updater + 1);
                }}
                className="inputClient"
              ></input>
            </div>
            <div className="inputDiv">
              <p className="PAYtitle" style={{ fontSize: "16px" }}>
                Estimated Monthly Payments
              </p>
              <input
                placeholder="Type estimated..."
                onChange={(e) => {
                  const form2 = form;
                  if (
                    form.attributes.filter(
                      (e) => e.key === "estimatedMonthlyPayments"
                    ).length > 0
                  ) {
                    form2.attributes.filter(
                      (e) => e.key === "estimatedMonthlyPayments"
                    )[0].value = e.target.value;
                    setForm(form2);
                  } else {
                    form2.attributes.push({
                      key: "estimatedMonthlyPayments",
                      value: e.target.value,
                    });
                    setForm(form2);
                  }
                  setUpdater(updater + 1);
                }}
                className="inputClient"
              ></input>
            </div>
            <div
              className="inputDiv"
              style={{ height: "auto", minWidth: "218px" }}
            >
              <p className="PAYtitle">Pre-Aproval and DU</p>
              <div
                class="file-input-pre"
                style={{ display: "flex", marginBottom: "-10px" }}
              >
                <input
                  onChange={(e) => {
                    uploadDocs(e);
                  }}
                  type="file"
                  name="file-input-pre"
                  id="file-input-pre"
                  class="file-input__input"
                />
                <label class="file-input__label_pre" htmlFor="file-input-pre">
                  <BiCloudUpload size={"300px"} />
                </label>
                <div style={{ flexDirection: "column" }}>
                  {loaderPhoto === "Loading" ? (
                    <img
                      src={spinnerr}
                      style={{
                        marginLeft: "15px",
                        width: "25px",
                        position: "absolute",
                        borderRadius: "10px",
                      }}
                    />
                  ) : (
                    <>
                      {form.files?.map((e, i) => {
                        return (
                          <p
                            key={i}
                            className="PAYtitle"
                            style={{
                              fontSize: "15px",
                              marginLeft: "5px",
                            }}
                          >
                            File add: {e.name}
                          </p>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="inputDiv">
              <p className="PAYtitle">Notes</p>
              <textarea
                placeholder="Type notes..."
                onChange={(e) => {
                  const form2 = form;
                  if (
                    form.attributes.filter(
                      (e) => e.key === "notesLenderFeedback"
                    ).length > 0
                  ) {
                    form2.attributes.filter(
                      (e) => e.key === "notesLenderFeedback"
                    )[0].value = e.target.value;
                    setForm(form2);
                  } else {
                    form2.attributes.push({
                      key: "notesLenderFeedback",
                      value: e.target.value,
                    });
                    setForm(form2);
                  }
                  setUpdater(updater + 1);
                }}
                className="AQinputPackageText"
              ></textarea>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              right: "55px",
              marginTop: "0px",
              display: "flex",
            }}
          >
            <button className="PAYbutton" onClick={() => onSubmit()}>
              <p className="PAYbuttonText">Save</p>
            </button>
          </div>
        </>
      ) : (
        checkedOne === "Need-to-work" && (
          <>
            <div className="managerInputsubContainer" style={{ width: "60vw" }}>
              <div className="inputDiv">
                <p className="PAYtitle">Current Credit Score</p>
                <input
                  type="number"
                  placeholder="Type current credit..."
                  onChange={(e) => {
                    const form2 = form;
                    if (
                      form.attributes.filter(
                        (e) => e.key === "currentCreditScore"
                      ).length > 0
                    ) {
                      form2.attributes.filter(
                        (e) => e.key === "currentCreditScore"
                      )[0].value = e.target.value;
                      setForm(form2);
                    } else {
                      form2.attributes.push({
                        key: "currentCreditScore",
                        value: e.target.value,
                      });
                      setForm(form2);
                    }
                    setUpdater(updater + 1);
                  }}
                  className="inputClient"
                ></input>
              </div>
              <div className="inputDiv">
                <p className="PAYtitle" style={{ width: "250px" }}>
                  Did you run credit simulator?
                </p>
                <input
                  placeholder="Type..."
                  onChange={(e) => {
                    const form2 = form;
                    if (
                      form.attributes.filter((e) => e.key === "didYouRunCS")
                        .length > 0
                    ) {
                      form2.attributes.filter(
                        (e) => e.key === "didYouRunCS"
                      )[0].value = e.target.value;
                      setForm(form2);
                    } else {
                      form2.attributes.push({
                        key: "didYouRunCS",
                        value: e.target.value,
                      });
                      setForm(form2);
                    }
                    setUpdater(updater + 1);
                  }}
                  className="inputClient"
                ></input>
              </div>
              <div className="inputDiv">
                <p className="PAYtitle">Notes</p>
                <textarea
                  placeholder="Type notes..."
                  onChange={(e) => {
                    const form2 = form;
                    if (
                      form.attributes.filter(
                        (e) => e.key === "notesLenderFeedback"
                      ).length > 0
                    ) {
                      form2.attributes.filter(
                        (e) => e.key === "notesLenderFeedback"
                      )[0].value = e.target.value;
                      setForm(form2);
                    } else {
                      form2.attributes.push({
                        key: "notesLenderFeedback",
                        value: e.target.value,
                      });
                      setForm(form2);
                    }
                  }}
                  className="AQinputPackageText"
                ></textarea>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                right: "55px",
                marginTop: "0px",
                display: "flex",
              }}
            >
              <button className="PAYbutton" onClick={() => onSubmit()}>
                <p className="PAYbuttonText">Save</p>
              </button>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default AddLenderFeedback;
