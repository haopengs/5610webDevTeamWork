import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { findAllCooksThunk, deleteCookThunk } from "../../services/cooks/cooks_thunks.js";
import {useNavigate} from 'react-router-dom';

export default function Cooks() {
    const { cooks } = useSelector((state) => state.cooks);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(findAllCooksThunk());
    }
    , []);

    const handleCookClick = (cookId) => {
        navigate(`/profile/${cookId}`);
        // console.log(`Displaying information for cook with id: ${cookId}`);
    }

    const handleDeleteCookClick = (cookId) => {
        dispatch(deleteCookThunk(cookId));
    }

    return (
        <div>
            <h2>Cooks DashBoard</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {cooks.map((cook) => (
                        <tr key={cook.id}>
                            <td>{cook.id}</td>
                            <td>{cook.firstName} {cook.lastName}</td>
                            <td>
                                <button onClick={() => handleCookClick(cook.id)}>Check Cook Info</button>
                                <button onClick={() => handleDeleteCookClick(cook.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


