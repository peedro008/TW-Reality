import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useGoogleCharts from '../Charts/useGoogleCharts'
import ManagerDashboardComponent from '../Components/ManagerDashboard'
import { getUsers } from '../Redux/actions'

function ManagerDashboard() {
  
  const google = useGoogleCharts();

  const Referred = useSelector(e=>e.Referred)
  const Users = useSelector(e=>e.Users)
  const Name = useSelector((state) => state.userName);
  const [selected, setSelected]=useState(false)
  const dispatch = useDispatch()
  useEffect(()=>{
    axios
    .get(`http://localhost:8080/getRealtors`)
    .then(function (response) {
      dispatch(getUsers(response.data));
    
    })
    .catch((error) => {
      dispatch(getUsers([]));
    });
  },[])
  return (<ManagerDashboardComponent
    Users={Users}
    Name={Name}
  Referred={Referred}
  google={google}
  selected={selected}
setSelected={setSelected}
  />
  )
}

export default ManagerDashboard