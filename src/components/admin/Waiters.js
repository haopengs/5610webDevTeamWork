import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { findAllWaitersThunk, deleteWaiterThunk } from "../../services/waiters/waiters_thunks.js";
import {useNavigate} from 'react-router-dom';

export default function Waiters() {
    const { waiters } = useSelector((state) => state.waiters);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(findAllWaitersThunk());
    }
    , []);

    const handleWaiterClick = (waiterId) => {
        navigate(`/waiters/${waiterId}`);
        // console.log(`Displaying information for waiter with id: ${waiterId}`);
    }

    const handleDeleteWaiterClick = (waiterId) => {
        dispatch(deleteWaiterThunk(waiterId));
    }

    return (
        <div>
            <h2>Waiters DashBoard</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {waiters.map((waiter) => (
                        <tr key={waiter.id}>
                            <td>{waiter.id}</td>
                            <td>{waiter.firstName} {waiter.lastName}</td>
                            <td>
                                <button onClick={() => handleWaiterClick(waiter.id)}>Check Info</button>
                                <button onClick={() => handleDeleteWaiterClick(waiter.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}