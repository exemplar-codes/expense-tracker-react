import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenseItems, setExpenseItems] = useState(DUMMY_EXPENSES);

  const receiveExpenseData = (data) => {
    setExpenseItems((prevExpenseList) => [data, ...prevExpenseList]);
  };

  return (
    <div>
      <NewExpense sendToApp={receiveExpenseData} />
      <Expenses expenses={expenseItems} />
    </div>
  );
}

export default App;
