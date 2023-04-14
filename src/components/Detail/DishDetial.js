import React from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { findDishByIdThunk } from '../../services/dishes/dishes_thunks';
import { findAllUsersByDishIdThunk } from '../../services/users/user_thunks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

export default function DishDetial() {
    const { dishId } = useParams();
    const { currentDish } = useSelector((state) => state.dishes)
    const { usersByDish } = useSelector((state) => state.users)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(findDishByIdThunk(dishId))
        dispatch(findAllUsersByDishIdThunk(dishId))
    }, [dishId])
    
  return (
      <div>
          DishDetail
          <div>
              <h3>Dish Detail</h3>
              {currentDish ?
                  <ul>
                      <li>Name : {currentDish.name}</li>
                      <li>Price : {currentDish.price}</li>
                      <li>Description : {currentDish.description}</li>
                      <li>Who also ordered this one?
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
