import React from "react";
import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  let title = props.title;
  function clickHandler() {
    console.log("Updated!");
    title = Math.floor(Math.random() * 100);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
