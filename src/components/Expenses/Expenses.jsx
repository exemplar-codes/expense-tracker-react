import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

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
        {filteredExpenses.length === 0 ? (
          <p style={{ color: "white" }}>No expenses found</p>
        ) : (
          filteredExpenses.map(({ title, date, amount, id }) => (
            <ExpenseItem title={title} date={date} amount={amount} key={id} />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
