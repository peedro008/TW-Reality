import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRealtor,
  getReferred,
  getSells,
  getUsers,
  getCommission,
} from "../Redux/actions";
const FetchAll = (dispatch) => {
  const UserId = useSelector((s) => s.UserId);
  axios
    .get(`http://localhost:8080/getRealtors`)
    .then(function (response) {
      response.status == 200 || response.status == 204
        ? dispatch(getUsers(response.data))
        : dispatch(getUsers([]));
    })
    .catch((error) => {
      dispatch(getUsers([]));
    });
  axios
    .get(`http://localhost:8080/getMyRealtors?UserId=${UserId}`)
    .then(function (response) {
      dispatch(getRealtor(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get(`http://localhost:8080/getReferred`)
    .then(function (response) {
      dispatch(getReferred(response.data));
    })
    .catch((error) => {
      dispatch(getReferred([]));
    });
  axios
    .get(`http://localhost:8080/getCommission`)
    .then(function (response) {
      response.status == 404
        ? dispatch(getCommission([]))
        : dispatch(getCommission(response.data));
    })
    .catch((error) => {
      dispatch(getCommission([]));
    });
  axios
    .get(`http://localhost:8080/getMySells?UserId=${UserId}`)
    .then(function (response) {
      dispatch(getSells(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const RealtorsGet = (dispatch) => {
  axios
    .get(`http://localhost:8080/getRealtors`)
    .then(function (response) {
      response.status == 200 || response.status == 204
        ? dispatch(getUsers(response.data))
        : dispatch(getUsers([]));
    })
    .catch((error) => {
      dispatch(getUsers([]));
    });
};

const referredGet = (dispatch) => {
  axios
    .get(`http://localhost:8080/getReferred`)
    .then(function (response) {
      dispatch(getReferred(response.data));
    })
    .catch((error) => {
      dispatch(getReferred([]));
    });
  axios
    .get(`http://localhost:8080/getCommission`)
    .then(function (response) {
      response.status == 404
        ? dispatch(getCommission([]))
        : dispatch(getCommission(response.data));
    })
    .catch((error) => {
      dispatch(getCommission([]));
    });
};
export { FetchAll, referredGet, RealtorsGet };
