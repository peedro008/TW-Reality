import React, { useEffect, useState } from "react";
import { BiCloudUpload, BiPlus } from "react-icons/bi";
import spinnerr from "../../../assets/loadingIcon.gif";
import Select from "react-select";
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
  const [previusJobNumber, setPreviusJobNumber] = useState(0);

  useEffect(() => {
    if (form.attributes?.find((e) => e.key === "previusJobName3")) {
      setPreviusJobNumber(3);
    } else if (form.attributes?.find((e) => e.key === "previusJobName2")) {
      setPreviusJobNumber(2);
    }
  }, [form]);

  console.log(form.attributes?.find((e) => e.key === "previusJobName2"));
  console.log(previusJobNumber);
  return (
    <div className="managerInputsContainer">
      <div className="managerInputsubContainer" style={{ width: "70vw" }}>
        <div>
          <div style={{ display: "flex", marginBottom: "-20px" }}>
            <div className="inputDiv" style={{ display: "flex" }}>
              <p className="PAYtitle" style={{ marginRight: "10px" }}>
                Self Employee - 1099
              </p>

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
            <div className="inputDiv" style={{ display: "flex" }}>
              <p className="PAYtitle" style={{ marginRight: "10px" }}>
                W2 - Employee by Others
              </p>
              <label className="containerCheck2">
                <input
                  checked={
                    form.conditions.find((e) => e.key === "employeeByOthers")
                      ?.value
                  }
                  type="checkbox"
                  className="checkBoxCont"
                  onChange={(e) => {
                    let form2 = form;
                    if (
                      form.conditions.filter(
                        (e) => e.key === "employeeByOthers"
                      ).length > 0
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
          </div>
          <div style={{ display: "flex", marginBottom: "-20px" }}>
            <div className="inputDiv" style={{ display: "flex" }}>
              <p className="PAYtitle" style={{ marginRight: "10px" }}>
                Resident
              </p>

              <label className="containerCheck2">
                <input
                  checked={
                    form.conditions.find((e) => e.key === "resident")?.value
                  }
                  type="checkbox"
                  className="checkBoxCont"
                  onChange={(e) => {
                    let form2 = form;
                    if (
                      form.conditions.filter((e) => e.key === "resident")
                        .length > 0
                    ) {
                      form2.conditions.filter(
                        (e) => e.key === "resident"
                      )[0].value = !form2.conditions.filter(
                        (e) => e.key === "resident"
                      )[0].value;
                      console.log("hola");
                      setForm(form2);
                    } else {
                      form2.conditions.push({
                        key: "resident",
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
            <div className="inputDiv" style={{ display: "flex" }}>
              <p className="PAYtitle" style={{ marginRight: "10px" }}>
                Us Citicen
              </p>
              <label className="containerCheck2">
                <input
                  checked={
                    form.conditions.find((e) => e.key === "usCiticen")?.value
                  }
                  type="checkbox"
                  className="checkBoxCont"
                  onChange={(e) => {
                    let form2 = form;
                    if (
                      form.conditions.filter((e) => e.key === "usCiticen")
                        .length > 0
                    ) {
                      form2.conditions.filter(
                        (e) => e.key === "usCiticen"
                      )[0].value = !form2.conditions.filter(
                        (e) => e.key === "usCiticen"
                      )[0].value;
                      setForm(form2);
                    } else {
                      form2.conditions.push({
                        key: "usCiticen",
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
            <div className="inputDiv" style={{ display: "flex" }}>
              <p className="PAYtitle" style={{ marginRight: "10px" }}>
                Work Permit
              </p>
              <label className="containerCheck2">
                <input
                  checked={
                    form.conditions.find((e) => e.key === "workPermit")?.value
                  }
                  type="checkbox"
                  className="checkBoxCont"
                  onChange={(e) => {
                    let form2 = form;
                    if (
                      form.conditions.filter((e) => e.key === "workPermit")
                        .length > 0
                    ) {
                      form2.conditions.filter(
                        (e) => e.key === "workPermit"
                      )[0].value = !form2.conditions.filter(
                        (e) => e.key === "workPermit"
                      )[0].value;
                      setForm(form2);
                    } else {
                      form2.conditions.push({
                        key: "workPermit",
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
          </div>
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
            defaultValue={
              form.attributes?.find((e) => e.key === "timeBusiness")?.value
            }
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
            defaultValue={
              form.attributes?.find((e) => e.key === "payPerHour")?.value
            }
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
            defaultValue={
              form.attributes?.find((e) => e.key === "hoursPerWeek")?.value
            }
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
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">Desire House Type</p>
          <input
            defaultValue={
              form.attributes?.find((e) => e.key === "desireHouseType")?.value
            }
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
        </div>
        <div className="inputDiv">
          <p className="PAYtitle" style={{ width: "320px", fontSize: "16px" }}>
            How much money do you have for closing?
          </p>
          <input
            defaultValue={
              form.attributes?.find((e) => e.key === "moneyForClosing")?.value
            }
            placeholder="Type house type..."
            onChange={(e) => {
              const form2 = form;
              if (
                form.attributes.filter((e) => e.key === "moneyForClosing")
                  .length > 0
              ) {
                form2.attributes.filter(
                  (e) => e.key === "moneyForClosing"
                )[0].value = e.target.value;
                setForm(form2);
              } else {
                form2.attributes.push({
                  key: "moneyForClosing",
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
        <div className="inputDiv" style={{ marginTop: "-15px" }}>
          <p className="PAYtitle" style={{ fontSize: "15px", width: "218px" }}>
            Have you been in the same job for more than two years?
          </p>
          <Select
            defaultValue={
              form.attributes?.find((e) => e.key === "sameJob").value === "Yes"
                ? { value: "Yes", label: "Yes" }
                : { value: "No", label: "No" }
            }
            onChange={(e) => {
              const form2 = form;
              if (
                form.attributes?.filter((e) => e.key === "sameJob")?.length > 0
              ) {
                form2.attributes.filter((e) => e.key === "sameJob")[0].value =
                  e.value;
                setForm(form2);
              } else {
                console.log(e);
                form2.attributes?.push({
                  key: "sameJob",
                  value: e.value,
                });
                setForm(form2);
              }
              setUpdater(updater + 1);
            }}
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            name={"Realtor Name"}
            className="PAYselect3"
            placeholder="Yes / No"
          />
        </div>
        {form.attributes?.find((e) => e.key === "sameJob")?.value === "Yes" ? (
          <div style={{ marginTop: "-20px" }}>
            <p className="PAYtitle">List Previus Job</p>
            <div style={{ display: "flex", marginTop: "-5px" }}>
              <div className="inputDiv" style={{ marginRight: "5px" }}>
                <p className="PAYtitle" style={{ fontSize: "15px" }}>
                  Name
                </p>
                <input
                  defaultValue={
                    form.attributes?.filter(
                      (e) => e.key === "previusJobName"
                    )[0]?.value
                  }
                  placeholder="Job name..."
                  onChange={(e) => {
                    const form2 = form;
                    if (
                      form.attributes.filter((e) => e.key === "previusJobName")
                        .length > 0
                    ) {
                      form2.attributes.filter(
                        (e) => e.key === "previusJobName"
                      )[0].value = e.target.value;
                      setForm(form2);
                    } else {
                      form2.attributes.push({
                        key: "previusJobName",
                        value: e.target.value,
                      });
                      setForm(form2);
                    }
                    setUpdater(updater + 1);
                  }}
                  className="inputClient"
                  style={{ maxWidth: "180px" }}
                ></input>
              </div>
              <div className="inputDiv">
                <p className="PAYtitle" style={{ fontSize: "15px" }}>
                  Position
                </p>
                <input
                  defaultValue={
                    form.attributes?.filter(
                      (e) => e.key === "previusJobPosition"
                    )[0]?.value
                  }
                  placeholder="Job position..."
                  onChange={(e) => {
                    const form2 = form;
                    if (
                      form.attributes.filter(
                        (e) => e.key === "previusJobPosition"
                      ).length > 0
                    ) {
                      form2.attributes.filter(
                        (e) => e.key === "previusJobPosition"
                      )[0].value = e.target.value;
                      setForm(form2);
                    } else {
                      form2.attributes.push({
                        key: "previusJobPosition",
                        value: e.target.value,
                      });
                      setForm(form2);
                    }
                    setUpdater(updater + 1);
                  }}
                  className="inputClient"
                  style={{ maxWidth: "180px" }}
                ></input>
              </div>
            </div>
          </div>
        ) : (
          form.attributes?.find((e) => e.key === "sameJob")?.value === "No" && (
            <>
              <div>
                <div style={{ marginTop: "-20px" }}>
                  <p className="PAYtitle">List Previus Jobs</p>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "10px",
                      marginTop: "-5px",
                    }}
                  >
                    <div className="inputDiv" style={{ marginRight: "5px" }}>
                      <p className="PAYtitle" style={{ fontSize: "15px" }}>
                        Name
                      </p>
                      <input
                        defaultValue={
                          form.attributes?.filter(
                            (e) => e.key === "previusJobName1"
                          )[0]?.value
                        }
                        placeholder="Job name 1..."
                        onChange={(e) => {
                          const form2 = form;
                          if (
                            form.attributes.filter(
                              (e) => e.key === "previusJobName1"
                            ).length > 0
                          ) {
                            form2.attributes.filter(
                              (e) => e.key === "previusJobName1"
                            )[0].value = e.target.value;
                            setForm(form2);
                          } else {
                            form2.attributes.push({
                              key: "previusJobName1",
                              value: e.target.value,
                            });
                            setForm(form2);
                          }
                          setUpdater(updater + 1);
                        }}
                        className="inputClient"
                        style={{ maxWidth: "180px" }}
                      ></input>
                    </div>
                    <div className="inputDiv">
                      <p className="PAYtitle" style={{ fontSize: "15px" }}>
                        Position
                      </p>
                      <input
                        defaultValue={
                          form.attributes?.filter(
                            (e) => e.key === "previusJobPosition1"
                          )[0]?.value
                        }
                        placeholder="Job position 1..."
                        onChange={(e) => {
                          const form2 = form;
                          if (
                            form.attributes.filter(
                              (e) => e.key === "previusJobPosition1"
                            ).length > 0
                          ) {
                            form2.attributes.filter(
                              (e) => e.key === "previusJobPosition1"
                            )[0].value = e.target.value;
                            setForm(form2);
                          } else {
                            form2.attributes.push({
                              key: "previusJobPosition1",
                              value: e.target.value,
                            });
                            setForm(form2);
                          }
                          setUpdater(updater + 1);
                        }}
                        className="inputClient"
                        style={{ maxWidth: "180px" }}
                      ></input>
                    </div>
                  </div>
                </div>
                {previusJobNumber > 1 && (
                  <div style={{ display: "flex", marginBottom: "10px" }}>
                    <div className="inputDiv" style={{ marginRight: "5px" }}>
                      <p className="PAYtitle" style={{ fontSize: "15px" }}>
                        Name
                      </p>
                      <input
                        defaultValue={
                          form.attributes?.filter(
                            (e) => e.key === "previusJobName2"
                          )[0]?.value
                        }
                        placeholder="Job name 2..."
                        onChange={(e) => {
                          const form2 = form;
                          if (
                            form.attributes.filter(
                              (e) => e.key === "previusJobName2"
                            ).length > 0
                          ) {
                            form2.attributes.filter(
                              (e) => e.key === "previusJobName2"
                            )[0].value = e.target.value;
                            setForm(form2);
                          } else {
                            form2.attributes.push({
                              key: "previusJobName2",
                              value: e.target.value,
                            });
                            setForm(form2);
                          }
                          setUpdater(updater + 1);
                        }}
                        className="inputClient"
                        style={{ maxWidth: "180px" }}
                      ></input>
                    </div>
                    <div className="inputDiv">
                      <p className="PAYtitle" style={{ fontSize: "15px" }}>
                        Position
                      </p>
                      <input
                        defaultValue={
                          form.attributes?.filter(
                            (e) => e.key === "previusJobPosition2"
                          )[0]?.value
                        }
                        placeholder="Job position 2..."
                        onChange={(e) => {
                          const form2 = form;
                          if (
                            form.attributes.filter(
                              (e) => e.key === "previusJobPosition2"
                            ).length > 0
                          ) {
                            form2.attributes.filter(
                              (e) => e.key === "previusJobPosition2"
                            )[0].value = e.target.value;
                            setForm(form2);
                          } else {
                            form2.attributes.push({
                              key: "previusJobPosition2",
                              value: e.target.value,
                            });
                            setForm(form2);
                          }
                          setUpdater(updater + 1);
                        }}
                        className="inputClient"
                        style={{ maxWidth: "180px" }}
                      ></input>
                    </div>
                  </div>
                )}
                {previusJobNumber > 2 && (
                  <div style={{ display: "flex" }}>
                    <div className="inputDiv" style={{ marginRight: "5px" }}>
                      <p className="PAYtitle" style={{ fontSize: "15px" }}>
                        Name
                      </p>
                      <input
                        defaultValue={
                          form.attributes?.filter(
                            (e) => e.key === "previusJobName3"
                          )[0]?.value
                        }
                        placeholder="Job name 3..."
                        onChange={(e) => {
                          const form2 = form;
                          if (
                            form.attributes.filter(
                              (e) => e.key === "previusJobName3"
                            ).length > 0
                          ) {
                            form2.attributes.filter(
                              (e) => e.key === "previusJobName3"
                            )[0].value = e.target.value;
                            setForm(form2);
                          } else {
                            form2.attributes.push({
                              key: "previusJobName3",
                              value: e.target.value,
                            });
                            setForm(form2);
                          }
                          setUpdater(updater + 1);
                        }}
                        className="inputClient"
                        style={{ maxWidth: "180px" }}
                      ></input>
                    </div>
                    <div className="inputDiv">
                      <p className="PAYtitle" style={{ fontSize: "15px" }}>
                        Position
                      </p>
                      <input
                        defaultValue={
                          form.attributes?.filter(
                            (e) => e.key === "previusJobPosition3"
                          )[0]?.value
                        }
                        placeholder="Job position 3..."
                        onChange={(e) => {
                          const form2 = form;
                          if (
                            form.attributes.filter(
                              (e) => e.key === "previusJobPosition3"
                            ).length > 0
                          ) {
                            form2.attributes.filter(
                              (e) => e.key === "previusJobPosition3"
                            )[0].value = e.target.value;
                            setForm(form2);
                          } else {
                            form2.attributes.push({
                              key: "previusJobPosition3",
                              value: e.target.value,
                            });
                            setForm(form2);
                          }
                          setUpdater(updater + 1);
                        }}
                        className="inputClient"
                        style={{ maxWidth: "180px" }}
                      ></input>
                    </div>
                  </div>
                )}
                {previusJobNumber < 1 && (
                  <BiPlus
                    size="30px"
                    onClick={() => setPreviusJobNumber(2)}
                    style={{ cursor: "pointer" }}
                  />
                )}
                {previusJobNumber === 2 && (
                  <BiPlus
                    size="30px"
                    onClick={() => setPreviusJobNumber(3)}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
            </>
          )
        )}

        {form.attributes?.find((e) => e.key === "sameJob")?.value === "Yes" &&
          form.conditions?.find((e) => e.key === "employeeByOthers")?.value ===
            true && (
            <div className="inputDiv">
              <p className="PAYtitle">Overtime (Yes or no)</p>
              <Select
                defaultValue={
                  form.attributes?.find((e) => e.key === "overtime").value ===
                  "Yes"
                    ? { value: "Yes", label: "Yes" }
                    : { value: "No", label: "No" }
                }
                onChange={(e) => {
                  const form2 = form;
                  if (
                    form.attributes?.filter((e) => e.key === "overtime")
                      ?.length > 0
                  ) {
                    form2.attributes.filter(
                      (e) => e.key === "overtime"
                    )[0].value = e.value;
                    setForm(form2);
                  } else {
                    console.log(e);
                    form2.attributes?.push({
                      key: "overtime",
                      value: e.value,
                    });
                    setForm(form2);
                  }
                  setUpdater(updater + 1);
                }}
                options={[
                  { value: "Yes", label: "Yes" },
                  { value: "No", label: "No" },
                ]}
                name={"Realtor Name"}
                className="PAYselect3"
                placeholder="Yes / No"
              />
            </div>
          )}

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
