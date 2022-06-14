import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExpensesContext } from "context/expenses.context";
import ExpensesHttp from "http/expenses.http";
import { Card } from "models/card.model";
import { MouseEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.scss";

const ExpensesCard = ({ expenseCardData }: Props) => {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const [expense, setExpense] = useState(expenseCardData);
  const { id, expenseCategory, description, value, date } = expense;
  const expensesHttp = new ExpensesHttp();
  const location = useNavigate();

  const deleteHandler = async (e: MouseEvent) => {
    e.stopPropagation();

    const removeExpense = expenses.filter((expense) => expense.id !== id);

    await expensesHttp.deleteExpenses(id);

    const updateState = await expensesHttp.updateExpenses({ id, expenses });
    setExpense(updateState);
    setExpenses(removeExpense);
  };

  const navigateHandler = (e: MouseEvent) => {
    e.stopPropagation();
    location("/obracun");
  };

  return (
    <div className="expenses-card" onClick={navigateHandler}>
      <FontAwesomeIcon icon={faTrash} onClick={deleteHandler} />
      <h3>{expenseCategory}</h3>
      <span>{description}</span>
      <span>{value}</span>
      <span>{date}</span>
    </div>
  );
};

type Props = {
  expenseCardData: Card;
};
export default ExpensesCard;
