import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteModal from "components/Modals/DeleteModal";
import GenericModal from "components/Modals/GenericModal";
import { ExpensesContext } from "context/expenses.context";
import ExpensesHttp from "http/expenses.http";
import { Card } from "models/card.model";
import { MouseEvent, useContext, useState } from "react";
import EditPage from "views/App/EditPage";

import "./index.scss";

const ExpensesCard = ({ expenseCardData }: Props) => {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const [expense] = useState(expenseCardData);
  const { id, type, description, value, date } = expense;
  const expensesHttp = new ExpensesHttp();

  const [isModalActive, setIsModalActive] = useState(false);
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);

  const openModalWindow = (e: MouseEvent) => {
    e.stopPropagation();

    setIsModalActive(true);
  };

  const openDeleteModalWindow = (e: MouseEvent) => {
    e.stopPropagation();

    setIsDeleteModalActive(true);
  };

  const deleteHandler = async (e: MouseEvent) => {
    e.stopPropagation();
    const removeExpense = expenses.filter((expense) => expense.id !== id);

    await expensesHttp.deleteExpenses(id);

    setExpenses(removeExpense);
  };

  return (
    <>
      {isModalActive && (
        <DeleteModal stateHandler={setIsModalActive}>
          {<EditPage />}
        </DeleteModal>
      )}

      <div className="expenses-card" onClick={openDeleteModalWindow}>
        <GenericModal children={undefined} onConfirm={deleteHandler} />
        <h3>{type}</h3>
        <span>{description}</span>
        <span>{value}</span>
        <span>{date}</span>
      </div>
    </>
  );
};

type Props = {
  expenseCardData: Card;
};
export default ExpensesCard;
