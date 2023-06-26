import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";
import "./components/App.scss";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppContext, AppContextProvider } from "./AppContext";
function App() {
  
  return (
    <AppContextProvider>
    <div className="container">
      <h1> My Cash Reserve</h1>
      <div className="info">
        <Budget></Budget>

        <Remaining></Remaining>
        <Spent></Spent>
      </div>
      <h3 className="section-title">Expenses</h3>
      <ExpenseList></ExpenseList>
      <h3 className="section-title">Add Expense</h3>
      <AddExpenseForm></AddExpenseForm>
    </div>
    </AppContextProvider>
  );
}

export default App;
