import ExpensesList from "components/ExpensesList";
import FormComponent from "components/FormComponent";
import GenericModal from "components/GenericModal";
import NavBar from "components/NavBar";
import ExpensesHttp from "http/expenses.http";
import { ExpensesContext } from "context/expenses.context";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { Route, Routes } from "react-router-dom";

import "./index.scss";
import DetailView from "./DetailViewPage";

const App = () => {
  const { expenses, setExpenses } = useContext(ExpensesContext);

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
    <>
      <header className="header">
        <h1 className="header__title">Cash Track App</h1>
      </header>
      <main className="flex flex-column flex-align-center m-t-20">
        <NavBar items={navBarItems}></NavBar>
        <Routes>
          <Route path="/" element={<ExpensesList expenses={expenses} />} />
        </Routes>
        <FormComponent />
        <GenericModal children={<DetailView />} />
      </main>
    </>
  );
};

export default App;
