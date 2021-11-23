import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <ExpenseItem
        expenseDate={expenses[0].date}
        expenseAmt={expenses[0].amount}
        expenseDesc={expenses[0].title}
      />
      <ExpenseItem
        expenseDate={expenses[1].date}
        expenseAmt={expenses[1].amount}
        expenseDesc={expenses[1].title}
      />
      <ExpenseItem
        expenseDate={expenses[2].date}
        expenseAmt={expenses[2].amount}
        expenseDesc={expenses[2].title}
      />
      <ExpenseItem
        expenseDate={expenses[3].date}
        expenseAmt={expenses[3].amount}
        expenseDesc={expenses[3].title}
      />
    </div>
  );
}

export default App;
