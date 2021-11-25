import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const changeSelectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let filteredExpenses = props.expenses
    .filter((expense) => expense.date.getFullYear().toString() === filteredYear)
    .map((expense) => (
      <ExpenseItem
        key={expense.id}
        expenseDate={expense.date}
        expenseAmt={expense.amount}
        expenseDesc={expense.desc}
      />
    ));

  if (filteredExpenses.length === 0) {
    filteredExpenses = <p>No expenses for the year</p>;
  }

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSelectedYearChange={changeSelectedYearHandler}
      />
      {filteredExpenses}
    </div>
  );
};

export default Expenses;
