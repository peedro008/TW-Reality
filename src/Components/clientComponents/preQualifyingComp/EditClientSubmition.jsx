import React from "react";
import { BiCloudUpload } from "react-icons/bi";
import spinnerr from "../../../assets/loadingIcon.gif";
const EditClientSubmition = ({
  clientData,
  form,

  setForm,

  uploadDocs,
  loaderPhoto,

  setUpdater,
  updater,
  onSubmit,
}) => {
  console.log(form.conditions.find((e) => e.key === "selfEmployee")?.value);
  return (
    <div className="managerInputsContainer">
      <div className="managerInputsubContainer" style={{ width: "70vw" }}>
        <div className="inputDiv">
          <p className="PAYtitle">Self Employee - 1099</p>

          <label className="containerCheck2">
            <input
              checked={
                form.conditions.find((e) => e.key === "selfEmployee")?.value
              }
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
                  console.log("hola");
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
              checked={
                form.conditions.find((e) => e.key === "employeeByOthers")?.value
              }
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
            defaultValue={form.attributes[0].value}
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
            defaultValue={form.attributes[1].value}
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
            defaultValue={form.attributes[2].value}
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
            defaultValue={form.attributes[3].value}
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
            defaultValue={form.attributes[4].value}
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
            defaultValue={form.attributes[5].value}
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
            defaultValue={
              clientData?.attributes.find((e) => e.key === "Notes")?.value
            }
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

export default EditClientSubmition;
