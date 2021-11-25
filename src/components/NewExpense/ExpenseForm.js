import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [newExpenseDesc, setNewExpenseDesc] = useState('');
  const [newExpenseAmt, setNewExpenseAmt] = useState('');
  const [newExpenseDt, setNewExpenseDt] = useState('');

  const descChangeHandler = (event) => {
    setNewExpenseDesc(event.target.value);
  };

  const amtChangeHandler = (event) => {
    setNewExpenseAmt(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setNewExpenseDt(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      desc: newExpenseDesc,
      amount: +newExpenseAmt,
      date: new Date(newExpenseDt),
    };

    props.onSaveEnteredExpense(expenseData);

    setNewExpenseDesc('');
    setNewExpenseAmt('');
    setNewExpenseDt('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Desc.</label>
          <input
            type="text"
            required
            value={newExpenseDesc}
            onChange={descChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            required
            value={newExpenseAmt}
            onChange={amtChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            required
            value={newExpenseDt}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
