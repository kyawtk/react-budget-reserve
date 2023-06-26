import React, { useContext, useState } from "react";
import { MdHearingDisabled } from "react-icons/md";
import { AppContext } from "../AppContext";
const AddExpenseForm = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
const {dispatch} = useContext(AppContext)
  function handleSubmit(e){
    e.preventDefault()
    console.log(name + " " + cost)
    const expense ={
        name,
        cost: parseInt(cost),
        id: crypto.randomUUID()
    }
    dispatch({
        type: 'ADD_EXPENSE',
        payload: expense
    })
  }
  return (
    <form action="#" className="form"  onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          id="name"
          required
          className="form-input"
        />
      </label>
      <label htmlFor="cost">
        Cost
        <input
          type="number"
          value={cost}
          onChange={(e) => {
            setCost(e.target.value);
          }}
          id="cost"
          required
          className="form-input"
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </label>
    </form>
  );
};

export default AddExpenseForm;
