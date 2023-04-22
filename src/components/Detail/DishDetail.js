import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { findDishByIdThunk } from "../../services/dishes/dishes-thunks";
import { findAllAccountsByDishIdThunk } from "../../services/accounts/accounts-thunks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function DishDetail() {
  const { dishId } = useParams();
  const { currentDish } = useSelector((state) => state.dishes);
  const { accountsByDish } = useSelector((state) => state.accounts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(findDishByIdThunk(dishId));
    dispatch(findAllAccountsByDishIdThunk(dishId));
  }, [dispatch, dishId]);

  return (
    <div className="p-5">
      <div>
        <div>
          <h2>
            Dish Detail
            {/* <Link
              to={"/user"}
              className="col-1 rounded-pill btn border float-end"
            >
              <b>Back</b>
            </Link> */}
          </h2>
        </div>
        {currentDish ? (
          <div className="row">
            <div className="col-4">
              <img
                src={`/images/${currentDish.image}`}
                alt={currentDish.name}
                className="img-fluid mb-4"
              />
            </div>
            <div className="col-8">
              <ul className="list-group">
                <li className="list-group-item">Name : {currentDish.name}</li>
                <li className="list-group-item">Price : {currentDish.price}</li>
                <li className="list-group-item">
                  Description : {currentDish.description}
                </li>
                <li className="list-group-item">
                  Who also ordered this one?
                  <ul className="list-group">
                    {accountsByDish &&
                      accountsByDish.map((user) => {
                        return (
                          <li className="list-group-item">
                            {user.firstname} {user.lastname}
                            <button
                              onClick={() => navigate(`/profile/${user._id}`)}
                              className="btn btn-warning me-2 float-end"
                            >
                              Detail
                            </button>
                          </li>
                        );
                      })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          // <ul className="list-group">
          //   <li className="list-group-item">Name : {currentDish.name}</li>
          //   <li className="list-group-item">Price : {currentDish.price}</li>
          //   <li className="list-group-item">
          //     Description : {currentDish.description}
          //   </li>
          //   <li className="list-group-item">
          //     Who also ordered this one?
          //     <ul className="list-group">
          //       {accountsByDish &&
          //         accountsByDish.map((user) => {
          //           return (
          //             <li className="list-group-item">
          //               {user.firstname} {user.lastname}
          //               <button
          //                 onClick={() => navigate(`/profile/${user._id}`)}
          //                 className="btn btn-warning me-2 float-end"
          //               >
          //                 Detail
          //               </button>
          //             </li>
          //           );
          //         })}
          //     </ul>
          //   </li>
          // </ul>
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}
