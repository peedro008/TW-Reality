import React from "react";
import { BiCloudUpload } from "react-icons/bi";
import spinnerr from "../../../assets/loadingIcon.gif";

const AddClientSubmition = ({
  form,
  setForm,
  uploadDocs,
  loaderPhoto,
  uploadDriverLicense,
  setUpdater,
  updater,
  onSubmit,
  loaderPhotoLicense,
}) => {
  return (
    <div className="managerInputsContainer">
      <div className="managerInputsubContainer" style={{ width: "70vw" }}>
        <div className="inputDiv">
          <p className="PAYtitle">Self Employee - 1099</p>
          <label className="containerCheck2">
            <input
              type="checkbox"
              className="checkBoxCont"
              onChange={(e) => {
                let form2 = form;
                if (
                  form.conditions.filter((e) => e.key === "selfEmployee")
                    .length > 0
                ) {
                  form2.conditions.filter(
                    (e) => e.key === "selfEmployee"
                  )[0].value = !form2.conditions.filter(
                    (e) => e.key === "selfEmployee"
                  )[0].value;
                  setForm(form2);
                } else {
                  form2.conditions.push({
                    key: "selfEmployee",
                    value: true,
                  });
                  setForm(form2);
                }
                setUpdater(updater + 1);
              }}
            />
            <span class="checkmark3"></span>
          </label>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">W2 - Employee by Others</p>
          <label className="containerCheck2">
            <input
              type="checkbox"
              className="checkBoxCont"
              onChange={(e) => {
                let form2 = form;
                if (
                  form.conditions.filter((e) => e.key === "employeeByOthers")
                    .length > 0
                ) {
                  form2.conditions.filter(
                    (e) => e.key === "employeeByOthers"
                  )[0].value = !form2.conditions.filter(
                    (e) => e.key === "employeeByOthers"
                  )[0].value;
                  setForm(form2);
                } else {
                  form2.conditions.push({
                    key: "employeeByOthers",
                    value: true,
                  });
                  setForm(form2);
                }
                setUpdater(updater + 1);
              }}
            />
            <span class="checkmark3"></span>
          </label>
        </div>
        <div className="inputDiv" style={{ height: "auto" }}>
          <p className="PAYtitle">
            1099 - W2 - Incometax - Paystubs - Statements
          </p>
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
                  {form.files
                    ?.filter((e) => e.type === "normal")
                    .map((e, i) => {
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
        <div className="inputDiv" style={{ height: "auto" }}>
          <p className="PAYtitle">Driver License</p>
          <div
            class="file-input-pre-div"
            style={{ display: "flex", marginBottom: "-10px" }}
          >
            <input
              onChange={(e) => {
                uploadDriverLicense(e);
              }}
              type="file"
              name="file-input-pre-div"
              id="file-input-pre-div"
              class="file-input__input"
            />
            <label class="file-input__label_pre" htmlFor="file-input-pre-div">
              <BiCloudUpload size={"300px"} />
            </label>
            <div style={{ flexDirection: "column" }}>
              {loaderPhotoLicense === "Loading" ? (
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
                  {form.files
                    ?.filter((e) => e.type === "license")
                    .map((e, i) => {
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
      </div>

      <div className="managerInputsubContainer" style={{ width: "60vw" }}>
        <div className="inputDiv">
          <p
            className="PAYtitle"
            style={{ fontSize: "15px", marginBottom: "10px" }}
          >
            Time at current job or Business?
          </p>
          <input
            placeholder="Type time..."
            onChange={(e) => {
              const form2 = form;
              if (
                form.attributes.filter((e) => e.key === "timeBusiness").length >
                0
              ) {
                form2.attributes.filter(
                  (e) => e.key === "timeBusiness"
                )[0].value = e.target.value;
                setForm(form2);
              } else {
                form2.attributes.push({
                  key: "timeBusiness",
                  value: e.target.value,
                });
                setForm(form2);
              }

              setUpdater(updater + 1);
            }}
            className="inputClient"
          ></input>
          <p className="FORMerror"></p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">Pay per hour?</p>
          <input
            placeholder="Type pay..."
            onChange={(e) => {
              const form2 = form;
              if (
                form.attributes.filter((e) => e.key === "payPerHour").length > 0
              ) {
                form2.attributes.filter(
                  (e) => e.key === "payPerHour"
                )[0].value = e.target.value;
                setForm(form2);
              } else {
                form2.attributes.push({
                  key: "payPerHour",
                  value: e.target.value,
                });
                setForm(form2);
              }
              setUpdater(updater + 1);
            }}
            className="inputClient"
          ></input>
          <p className="FORMerror"></p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">Hours per week</p>
          <input
            placeholder="Type hours..."
            onChange={(e) => {
              const form2 = form;
              if (
                form.attributes.filter((e) => e.key === "hoursPerWeek").length >
                0
              ) {
                form2.attributes.filter(
                  (e) => e.key === "hoursPerWeek"
                )[0].value = e.target.value;
                setForm(form2);
              } else {
                form2.attributes.push({
                  key: "hoursPerWeek",
                  value: e.target.value,
                });
                setForm(form2);
              }
              setUpdater(updater + 1);
            }}
            className="inputClient"
          ></input>
          <p className="FORMerror"></p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">Overtime?</p>
          <input
            placeholder="Type overtime..."
            onChange={(e) => {
              const form2 = form;
              if (
                form.attributes.filter((e) => e.key === "overtime").length > 0
              ) {
                form2.attributes.filter((e) => e.key === "overtime")[0].value =
                  e.target.value;
                setForm(form2);
              } else {
                form2.attributes.push({
                  key: "overtime",
                  value: e.target.value,
                });
                setForm(form2);
              }
              setUpdater(updater + 1);
            }}
            className="inputClient"
          ></input>
          <p className="FORMerror"></p>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "60vw" }}>
        <div className="inputDiv">
          <p className="PAYtitle">List Previus Jobs</p>
          <input
            placeholder="Type prev jobs..."
            onChange={(e) => {
              const form2 = form;
              if (
                form.attributes.filter((e) => e.key === "listPreviusJobs")
                  .length > 0
              ) {
                form2.attributes.filter(
                  (e) => e.key === "listPreviusJobs"
                )[0].value = e.target.value;
                setForm(form2);
              } else {
                form2.attributes.push({
                  key: "listPreviusJobs",
                  value: e.target.value,
                });
                setForm(form2);
              }
              setUpdater(updater + 1);
            }}
            className="inputClient"
          ></input>
          <p className="FORMerror"></p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">Desire House Type</p>
          <input
            placeholder="Type house type..."
            onChange={(e) => {
              const form2 = form;
              if (
                form.attributes.filter((e) => e.key === "desireHouseType")
                  .length > 0
              ) {
                form2.attributes.filter(
                  (e) => e.key === "desireHouseType"
                )[0].value = e.target.value;
                setForm(form2);
              } else {
                form2.attributes.push({
                  key: "desireHouseType",
                  value: e.target.value,
                });
                setForm(form2);
              }
              setUpdater(updater + 1);
            }}
            className="inputClient"
          ></input>
          <p className="FORMerror"></p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">Notes</p>
          <textarea
            placeholder="Type notes..."
            onChange={(e) => {
              const form2 = form;
              if (form.attributes.filter((e) => e.key === "Notes").length > 0) {
                form2.attributes.filter((e) => e.key === "Notes")[0].value =
                  e.target.value;
                setForm(form2);
              } else {
                form2.attributes.push({
                  key: "Notes",
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
          marginTop: "-30px",
          display: "flex",
        }}
      >
        <button className="PAYbutton" onClick={onSubmit}>
          <p className="PAYbuttonText">Save</p>
        </button>
      </div>
    </div>
  );
};

export default AddClientSubmition;
