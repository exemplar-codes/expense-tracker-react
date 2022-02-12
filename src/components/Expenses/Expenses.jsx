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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defaultYear={year} onFilterYear={onFilterYearHandler} />
        {expenses
          .filter(({ date }) => date.getFullYear() == year)
          .map(({ title, date, amount, id }) => (
            <ExpenseItem title={title} date={date} amount={amount} key={id} />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
