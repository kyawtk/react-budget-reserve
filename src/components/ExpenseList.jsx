import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../AppContext'
const ExpenseList = () => {
    const {expenses} = useContext(AppContext)
  return (
    <>
    {expenses.length === 0 ? (
      <h3>
        <i>The list is empty</i>
      </h3>
    ) : (
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </ul>
    )}
  </>
  )
}

export default ExpenseList