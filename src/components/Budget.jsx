import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";
const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState('');
  const [openTextbox, setOpenTextbox] = useState(false);
  function saveBudget() {
    dispatch({
      type:"CHANGE_BUDGET",
      payload: newBudget
    })
    setOpenTextbox(false);
  }
  function handleBudget(e) {
    setNewBudget(e.target.value);
  }

  return (
    <div className="info-card bg-grey">
      <h2> Budget :
        {openTextbox ? (
          <>
          
            <input
              type="number"
              onChange={handleBudget}
              value={newBudget}
              required
              min={0}
              className="form-input budget"
            />{" "}
            <button className="btn btn-primary" onClick={saveBudget}>
              Save
            </button>
          </>
        ) : (
          <> ${budget}</>
        )}
      </h2>
      {openTextbox? '' :<button className="btn btn-primary" onClick={()=>setOpenTextbox(true)}>
        Edit
      </button>  }
      
    </div>
  );
};

export default Budget;
