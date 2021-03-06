import React, { useState } from "react";

import "./Expenses.css";
import Card from "../../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
  const [year, setYear] = useState("2021");

  const onFilterYearHandler = (receivedYear) => {
    setYear(receivedYear);
  };

  const filteredExpenses = expenses.filter(
    ({ date }) => date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defaultYear={year} onFilterYear={onFilterYearHandler} />
        <ExpensesChart filteredExpenses={filteredExpenses} />
        <ExpenseList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
