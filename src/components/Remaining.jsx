import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
const Remaining = () => {

  const {expenses, budget} = useContext(AppContext)
  const totalExpense  = expenses.reduce((total, expense) => {
    return total = total+expense.cost
  },0)

  const divStyle = (budget-totalExpense) <= 0 ? "bg-red" : "bg-green" 
  return (
    <div className={`info-card ${divStyle}`} >
        <h2>Remaining : ${budget-totalExpense}</h2>
    </div>
  )
}

export default Remaining