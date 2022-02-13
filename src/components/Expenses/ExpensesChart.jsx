import React from "react";
import Chart from "../Chart/Chart";

function ExpensesChart(props) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ]; // { label, value}

  for (const expense of props.filteredExpenses) {
    const expenseMonth = expense.date.getMonth(); // 0 for January
    chartDataPoints[expenseMonth].value += expense.amount;
    if (expense.amount) console.log(expense.amount);
  }
  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;
