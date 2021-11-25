import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ expenseAmt, expenseDesc, expenseDate }) => {
  const [expDesc, setExpenseTitle] = useState(expenseDesc);

  const clickHandler = () => {
    setExpenseTitle('Updated!!');
  };

  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__description">
        <h2>{expDesc}</h2>
        <div className="expense-item__price">${expenseAmt}</div>
      </div>
      <button onClick={clickHandler}>Click Here!!</button>
    </div>
  );
};

export default ExpenseItem;
