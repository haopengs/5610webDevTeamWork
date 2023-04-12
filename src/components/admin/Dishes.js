import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {findAllDishsThunk, deleteDishThunk, updateDishThunk} from '../../services/dishes/dishes_thunks'

export default function Dishes() {
    const { dishes } = useSelector((state) => state.dishes) 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findAllDishsThunk())
    },[])
    return (
        <div>
            <h1>Dishes</h1> 
            <ul className='list-group'>
                {dishes && (
                    dishes.map((dish) => {
                        return (
                            <li className='list-group-item'>
                                {dish.name}
                                <button className="btn btn-warning float-end">
                                    {dish.editing ? "Save" : "Edit"}
                                </button>
                                <button className="btn btn-warning float-end">
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
