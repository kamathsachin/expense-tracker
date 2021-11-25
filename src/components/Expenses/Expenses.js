import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  return (
    <div className="expenses">
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
