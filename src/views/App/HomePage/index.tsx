import ExpensesList from "components/ExpensesList";
import ExpensesHttp from "http/expenses.http";
import { ExpensesContext } from "context/expenses.context";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import EditPage from "../EditPage";

const HomePage = () => {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const expensesData = useMemo(() => new ExpensesHttp(), []);

  const fetchExpenses = useCallback(async () => {
    const expenses = await expensesData.getExpenses();

    setExpenses(expenses);
  }, [expensesData, setExpenses]);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  return (
    <>
      <ExpensesList expenses={expenses} />
    </>
  );
};

export default HomePage;
