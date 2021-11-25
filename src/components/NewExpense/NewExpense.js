import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseHandler = (savedExpenseData) => {
    const savedExpense = {
      ...savedExpenseData,
      id: Math.random().toString(),
    };

    props.onAddNewExpense(savedExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveEnteredExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
