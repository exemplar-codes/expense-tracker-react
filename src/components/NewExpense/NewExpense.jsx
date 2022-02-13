import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const sendToNewExpenseHandler = (expense) => {
    props.sendToApp({ ...expense, id: Math.random() });
  };

  const [showForm, setShowForm] = useState(false);

  const switchFormVisibility = () => setShowForm((prevValue) => !prevValue);

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          sendToNewExpense={sendToNewExpenseHandler}
          switchFormVisibility={switchFormVisibility}
        />
      ) : (
        <button onClick={switchFormVisibility}>Add button</button>
      )}
    </div>
  );
}

export default NewExpense;
