import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToRecruitComponent from '../Components/toRecruit'
import { getUsers } from '../Redux/actions';

function ToRecruit() {
      const Referred = useSelector(e=>e.Referred)
  const Users = useSelector(e=>e.Users)
  const Name = useSelector((state) => state.userName);
  const dispatch = useDispatch()
  useEffect(()=>{
    axios
    .get(`http://localhost:8080/getRealtors`)
    .then(function (response) {
      dispatch(getUsers(response.data));
    
    })
    .catch((error) => {
      dispatch(getUsers([]));
    })},[])

  return (
    <div><ToRecruitComponent
    Users={Users}
    Name={Name}
  Referred={Referred}
    /></div>
  )
}

export default ToRecruit