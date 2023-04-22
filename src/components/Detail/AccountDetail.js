import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { findAccountByIdThunk } from "../../services/accounts/accounts-thunks";
import { useDispatch } from "react-redux";

export default function AccountDetail() {
  const { oneAccount } = useSelector((state) => state.accounts);
  const { profileId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAccountByIdThunk(profileId));
  }, [dispatch, profileId]);

  return (
    <div className="p-5">
      <h3>Account Detail</h3>
      {oneAccount ? (
        <ul className="list-group">
          <li className="list-group-item">
            Name : {oneAccount.firstname} {oneAccount.lastname}
          </li>
          <li className="list-group-item">Phone : {oneAccount.phone}</li>
          <li className="list-group-item">Email : {oneAccount.email}</li>
        </ul>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

