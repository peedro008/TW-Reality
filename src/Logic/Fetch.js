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
    .get(`https://truewayrealtorsapi.com/getRealtors`)
    .then(function (response) {
      response.status == 200 || response.status == 204
        ? dispatch(getUsers(response.data))
        : dispatch(getUsers([]));
    })
    .catch((error) => {
      dispatch(getUsers([]));
    });
  axios
    .get(`https://truewayrealtorsapi.com/getMyRealtors?UserId=${UserId}`)
    .then(function (response) {
      dispatch(getRealtor(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get(`https://truewayrealtorsapi.com/getReferred`)
    .then(function (response) {
      dispatch(getReferred(response.data));
    })
    .catch((error) => {
      dispatch(getReferred([]));
    });
  axios
    .get(`https://truewayrealtorsapi.com/getCommission`)
    .then(function (response) {
      response.status == 404
        ? dispatch(getCommission([]))
        : dispatch(getCommission(response.data));
    })
    .catch((error) => {
      dispatch(getCommission([]));
    });
  axios
    .get(`https://truewayrealtorsapi.com/getMySells?UserId=${UserId}`)
    .then(function (response) {
      dispatch(getSells(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const RealtorsGet = (dispatch) => {
  axios
    .get(`https://truewayrealtorsapi.com/getRealtors`)
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
    .get(`https://truewayrealtorsapi.com/getReferred`)
    .then(function (response) {
      dispatch(getReferred(response.data));
    })
    .catch((error) => {
      dispatch(getReferred([]));
    });
  axios
    .get(`https://truewayrealtorsapi.com/getCommission`)
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
