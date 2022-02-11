import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const sendToNewExpenseHandler = (expense) => {
    props.sendToApp({ ...expense, id: Math.random() });
  };

  return (
    <div className="new-expense">
      <ExpenseForm sendToNewExpense={sendToNewExpenseHandler} />
    </div>
  );
}

export default NewExpense;
