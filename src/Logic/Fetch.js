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
  getClients,
  getUsersManager
} from "../Redux/actions";


const FetchAll = (dispatch) => {
  const UserId = useSelector((s) => s.UserId);
  const UserRole = useSelector((s) => s.userRole);
  console.log(UserRole)
  if(UserRole === 'Admin') {

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
  } else {
    axios
    .get(`http://localhost:8080/getMyUsers?UserId=${UserId}`)
    .then(function (response) {
      dispatch(getUsers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }

  axios
    .get(`http://localhost:8080/getMyRealtors?UserId=${UserId}`)
    .then(function (response) {
      dispatch(getRealtor(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

    axios
    .get(`http://localhost:8080/getMyUsers?UserId=${UserId}`)
    .then(function (response) {
      dispatch(getUsersManager(response.data));
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
    .get(`http://localhost:8080/getSells`)
    .then(function (response) {
      dispatch(getSells(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    axios
    .get(`http://localhost:8080/getAllMyClients?UserId=${UserId}`)
    .then(function (response) {
      response.status == 200 || response.status == 204
        ? dispatch(getClients(response.data))
        : dispatch(getClients([]));
    })
    .catch((error) => {
      dispatch(getUsers([]));
    });
    axios
    .get(`http://localhost:8080/getTransactionCoordinator`)
    .then(function (response) {
      dispatch(getTransactionCoordinator(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    axios
    .get(`http://localhost:8080/getPackagesMarketing`)
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
      .get(`http://localhost:8080/getRealtors`)
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
    .get(`http://localhost:8080/getMyUsers?UserId=${UserId}`)
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
  .get(`http://localhost:8080/getSells`)
  .then(function (response) {
    dispatch(getSells(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
}

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
export { FetchAll, referredGet, RealtorsGet, getSell };
