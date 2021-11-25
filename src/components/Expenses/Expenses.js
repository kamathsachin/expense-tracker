import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const changeSelectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSelectedYearChange={changeSelectedYearHandler}
      />
      <ExpenseItem
        expenseDate={props.expenses[0].date}
        expenseAmt={props.expenses[0].amount}
        expenseDesc={props.expenses[0].title}
      />
      <ExpenseItem
        expenseDate={props.expenses[1].date}
        expenseAmt={props.expenses[1].amount}
        expenseDesc={props.expenses[1].title}
      />
      <ExpenseItem
        expenseDate={props.expenses[2].date}
        expenseAmt={props.expenses[2].amount}
        expenseDesc={props.expenses[2].title}
      />
      <ExpenseItem
        expenseDate={props.expenses[3].date}
        expenseAmt={props.expenses[3].amount}
        expenseDesc={props.expenses[3].title}
      />
    </div>
  );
};

export default Expenses;
