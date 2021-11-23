import './ExpenseItem.css';

const ExpenseItem = ({ expenseAmt, expenseDesc, expenseDate }) => {
  return (
    <div className="expense-item">
      <div>{expenseDate.toString()}</div>
      <div className="expense-item__description">
        <h2>{expenseDesc}</h2>
        <div className="expense-item__price">${expenseAmt}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
