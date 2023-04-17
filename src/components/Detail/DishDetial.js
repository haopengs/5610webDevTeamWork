import React from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { findDishByIdThunk } from '../../services/dishes/dishes_thunks';
import { findAllUsersByDishIdThunk } from '../../services/users/user_thunks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function DishDetial() {
    const { dishId } = useParams();
    const { currentDish } = useSelector((state) => state.dishes)
    const { usersByDish, currentUser } = useSelector((state) => state.users)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!currentUser) {
            alert("Please login")
            navigate('/login')
        }
        dispatch(findDishByIdThunk(dishId))
        dispatch(findAllUsersByDishIdThunk(dishId))
    }, [dishId])
    
  return (
      <div className='p-5'>
          <div>
            <div className=''>
                <h2>
                    Dish Detail
                    <Link to={"/user"} className='col-1 rounded-pill btn border float-end'><b>Back</b></Link>
                </h2> 
            </div>
            {currentDish ?
                <ul className='list-group'>
                    <li className='list-group-item' >Name : {currentDish.name}</li>
                    <li className='list-group-item'>Price : {currentDish.price}</li>
                    <li className='list-group-item'>Description : {currentDish.description}</li>
                    <li className='list-group-item'>Who also ordered this one?
                        <ul className='list-group'>
                            {usersByDish && (
                                usersByDish.map((user) => {
                                    return (
                                        <li className='list-group-item'>
                                            <button onClick={() => navigate(`/profile/${user.id}`)} className="btn btn-warning me-2 float-end">
                                                {user.username}
                                            </button>
                                        </li>
                                    )
                                }
                                )
                            )}
                        </ul>
                    </li>
                </ul>
            :<div>Loading</div>}
          </div> 
      </div>
  )
}
