import { useState } from "react";
import Chart from "./Components/Chart/Chart";
import Expenses from "./Components/Expenses/Expenses";
import Filter from "./Components/Filter/Filter";
import ExpenseForm from "./Components/NewExpense/ExpenseForm";
import Card from "./Components/UI/Card";


function App() {

  const INITIAL_LIST = [
    { id: 1, name: "Internet Bill", date: new Date(2022, 11, 17), amount: 1000 },
    { id: 2, name: "Mobile Bill", date: new Date(2022, 11, 21), amount: 500 },
    { id: 2, name: "Mobile Repair Bill", date: new Date(2019, 7, 21), amount: 5500 },
    { id: 3, name: "Grocery Bill", date: new Date(2022, 11, 1), amount: 1500 },
    { id: 4, name: "Internet Bill", date: new Date(2021, 10, 17), amount: 1000 },
  ];

  const [list, setList] = useState(INITIAL_LIST);
  const [displayList, setDisplayList] = useState(list);
  const [year, setYear] = useState(2022);

  function updateList(newExpense) {
    let newList = [newExpense, ...list];
    setList(newList);
    setDisplayList(newList);
  }

  function applyFilter(selectedYear) {
    let result = selectedYear === 'all' ? list : list.filter(el => el.date.getFullYear() === selectedYear);
    setDisplayList(result);
    setYear(result)
  }

  return (
    <div>
      <ExpenseForm onNewExpenseSubmit={updateList} />
      <Chart data={displayList} />
      <Card>
        <Filter selectedFilter={year} onFilterChange={applyFilter} />
      </Card>
      <Expenses data={displayList} />

    </div>
  );
}

export default App;
