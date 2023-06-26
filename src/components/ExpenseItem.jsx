import React, { useContext } from 'react'
import {MdDelete}  from 'react-icons/md'
import { AppContext } from '../AppContext'
const ExpenseItem = ({id, name, cost}) => {
  const {dispatch} = useContext(AppContext)
  const handleDeleteExpense = ()=>{
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id
    })
  }
  return (
    <li className='li-item'>
        {name}
        <div className="">
            <span className='badge badge-primary'>
                ${cost}
            </span>
            <MdDelete onClick={handleDeleteExpense}></MdDelete>
        </div>
    </li>
  )
}

export default ExpenseItem