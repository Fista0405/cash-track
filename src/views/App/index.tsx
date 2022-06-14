import ExpensesList from "components/ExpensesList";
import NavBar from "components/NavBar";
import { ExpensesProvider } from "context/expenses.context";
import ExpensesHttp from "http/expenses.http";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ObracunPage from "./HomePage";
import "./index.scss";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const expensesData = useMemo(() => new ExpensesHttp(), []);

  const fetchExpensesData = useCallback(async () => {
    const expenses = await expensesData.getExpenses();

    setExpenses(expenses);
  }, [expensesData, setExpenses]);

  useEffect(() => {
    fetchExpensesData();
  }, [fetchExpensesData]);

  const navBarItems = [
    { name: "Popis", path: "/" },
    { name: "Obracun", path: "/obracun" },
  ];

  return (
    <ExpensesProvider>
      <header className="header">
        <h1 className="header__title">Cash Track App</h1>
      </header>
      <main className="flex flex-column flex-align-center m-t-20">
        <NavBar items={navBarItems}></NavBar>
        <Routes>
          <Route path="/" element={<ExpensesList expenses={expenses} />} />
          <Route path="/obracun" element={<ObracunPage />} />
        </Routes>
      </main>
    </ExpensesProvider>
  );
};

export default App;
