import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [IsEditing, setIsEditing] = useState(false);

  const saveExpenseHandler = (savedExpenseData) => {
    const savedExpense = {
      ...savedExpenseData,
      id: Math.random().toString(),
    };

    props.onAddNewExpense(savedExpense);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const displayForm = IsEditing ? (
    <ExpenseForm onSaveEnteredExpense={saveExpenseHandler} />
  ) : (
    <button onClick={startEditingHandler}>Add New Expense</button>
  );

  return <div className="new-expense">{displayForm}</div>;
};

export default NewExpense;
