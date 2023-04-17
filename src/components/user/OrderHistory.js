import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { findOrdersByUserIdThunk,deleteOrderThunk } from '../../services/orders/order_thunks'
import { Link } from 'react-router-dom'


export default function OrderDishes() {
  const { curOrders } = useSelector((state) => state.orders) 
  const { currentUser } = useSelector((state) => state.users);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(findOrdersByUserIdThunk(currentUser.id))
  }, [])

  return (
    <div className='p-5'>
      <div className=''>
        <h2>
          Orders History
          <Link to={"/user"} className='col-1 rounded-pill btn border float-end'><b>Back</b></Link>
        </h2> 
      </div>
      <ul className='list-group'>
          {curOrders && (
              curOrders.map((curOrder) => {
                  return (
                      <li className='list-group-item'>
                          {curOrder.dish}
                          <button onClick={() => dispatch(deleteOrderThunk(curOrder.id))} className="btn btn-warning float-end">
                              Delete
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
