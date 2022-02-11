import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

function Expense({ expenses }) {
  const [year, setYear] = useState(0);

  const onFilterYearHandler = (receivedYear) => {
    setYear(receivedYear);
    console.log(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterYear={onFilterYearHandler} />
        <ExpenseItem
          title={expenses[0].title}
          date={expenses[0].date}
          amount={expenses[0].amount}
        />
        <ExpenseItem
          title={expenses[1].title}
          date={expenses[1].date}
          amount={expenses[1].amount}
        />
        <ExpenseItem
          title={expenses[2].title}
          date={expenses[2].date}
          amount={expenses[2].amount}
        />
        <ExpenseItem
          title={expenses[3].title}
          date={expenses[3].date}
          amount={expenses[3].amount}
        />
      </Card>
    </div>
  );
}

export default Expense;
