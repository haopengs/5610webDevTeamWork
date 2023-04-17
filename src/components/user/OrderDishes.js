import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { findAllDishsThunk } from '../../services/dishes/dishes_thunks'
import { createOrderThunk } from '../../services/orders/order_thunks'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'


export default function OrderDishes() {
  const { dishes } = useSelector((state) => state.dishes) 
  const { currentUser } = useSelector((state) => state.users);

  const [order, SetOrder] = useState({})

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOrder = (dish) => {
    // console.log(dish)
    // console.log(currentUser)

    SetOrder({
      user: currentUser.username,
      userId: currentUser.id,
      dish: dish.name,
      dishId: dish.id
    })
    // dispatch(createOrderThunk(order))
  }

  useEffect(() => {
    dispatch(findAllDishsThunk())
    console.log(order)
    dispatch(createOrderThunk(order))

  }, [order])

  return (
    <div className='p-5'>
      <div className=''>
        <h2>
          Dishes
          <Link to={"/user"} className='col-1 rounded-pill btn border float-end'><b>Back</b></Link>
        </h2> 
      </div>
      <ul className='list-group mt-2'>
          {dishes && (
              dishes.map((dish) => {
                  return (
                      <li className='list-group-item'>
                      {dish.name}
                     
                      <button  onClick={() => handleOrder(dish) } className="btn btn-warning float-end">
                          Order
                      </button>
                       <button onClick={() => navigate(`/dish/${dish.id}`) } className="btn btn-warning me-2 float-end">
                          Detail
                      </button>
                      </li>
                  )
              }
              )   
          )}
      </ul>
    </div>
  )
}
