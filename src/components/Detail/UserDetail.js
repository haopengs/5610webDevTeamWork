import React from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { findUserByIdThunk } from '../../services/users/user_thunks';
import { useDispatch } from 'react-redux';


export default function UserDetail() {
    const { oneUser } = useSelector((state) => state.users)
    const { profileId } = useParams();

    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findUserByIdThunk(profileId))
    },[profileId])

  return (
    <div>
        <h3>User Detail</h3>
        {oneUser ?
            <ul>
                <li>Name : {oneUser.firstName}</li>
                <li>Price : {oneUser.lastName}</li>
                <li>Email : {oneUser.email}</li>
            </ul>
        :<div>Loading</div>}
    </div>   
  )
}
