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
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const displayForm = IsEditing ? (
    <ExpenseForm
      onSaveEnteredExpense={saveExpenseHandler}
      onCancel={stopEditingHandler}
    />
  ) : (
    <button onClick={startEditingHandler}>Add New Expense</button>
  );

  return <div className="new-expense">{displayForm}</div>;
};

export default NewExpense;
