import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_BUDGET':
      return{
        ...state,budget: action.payload
      }
    case 'ADD_EXPENSE':
      return {
        ...state,expenses:[...state.expenses, action.payload]
      }
      case 'DELETE_EXPENSE':
        return{
          ...state,
          expenses: state.expenses.filter(expense => expense.id != action.payload)
        }
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    { id: crypto.randomUUID(), name: "shopping", cost: 23 },
    { id: crypto.randomUUID(), name: "groceyr", cost: 45 },
    
  ],
};

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return <AppContext.Provider value={{
    budget : state.budget,
    expenses: state.expenses,
    dispatch,
  }}>{children}</AppContext.Provider>;
};
