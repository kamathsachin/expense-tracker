import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ expenseAmt, expenseDesc, expenseDate }) => {
  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseDesc}</h2>
        <div className="expense-item__price">${expenseAmt}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
