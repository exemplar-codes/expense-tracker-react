import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList({ filteredExpenses }) {
  if (filteredExpenses.length > 0)
    return (
      <ul className="expenses-list">
        {filteredExpenses.map(({ title, date, amount, id }) => (
          <ExpenseItem title={title} date={date} amount={amount} key={id} />
        ))}
      </ul>
    );
  else return <h2 className="expenses-list__fallback">No expenses found</h2>;
}

export default ExpenseList;
