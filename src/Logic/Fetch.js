import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRealtor,
  getReferred,
  getSells,
  getUsers,
  getCommission,
  getTransactionCoordinator,
  getPackageMarketing,
} from "../Redux/actions";
const FetchAll = (dispatch) => {
  const UserId = useSelector((s) => s.UserId);
  const UserRole = useSelector((s) => s.userRole);
  console.log(UserRole)
  if(UserRole === 'Admin') {

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
  } else {
    axios
    .get(`https://truewayrealtorsapi.com/getMyUsers?UserId=${UserId}`)
    .then(function (response) {
      dispatch(getUsers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }

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
    .get(`https://truewayrealtorsapi.com/getSells`)
    .then(function (response) {
      dispatch(getSells(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
 
    axios
    .get(`https://truewayrealtorsapi.com/getTransactionCoordinator`)
    .then(function (response) {
      dispatch(getTransactionCoordinator(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    axios
    .get(`https://truewayrealtorsapi.com/getPackagesMarketing`)
    .then(function (response) {
      dispatch(getPackageMarketing(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const RealtorsGet = (dispatch) => {
  const UserId = useSelector((s) => s.UserId);
  const UserRole = useSelector((s) => s.userRole);

  if(UserRole === 'Admin') {
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
  } else {
    axios
    .get(`https://truewayrealtorsapi.com/getMyUsers?UserId=${UserId}`)
    .then(function (response) {
      dispatch(getUsers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }

};

const getSell = (dispatch) => {
  axios
  .get(`https://truewayrealtorsapi.com/getSells`)
  .then(function (response) {
    dispatch(getSells(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
}
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
export { FetchAll, referredGet, RealtorsGet, getSell };
