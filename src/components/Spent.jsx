import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
const Spent = () => {
  const {expenses} = useContext(AppContext)
  const totalExpense  = expenses.reduce((total, expense) => {
    return total = total+expense.cost
  },0)
  return (
    <div className="info-card bg-red">
        <h2>Spent So far: ${totalExpense}</h2>
    </div>
  )
}

export default Spent