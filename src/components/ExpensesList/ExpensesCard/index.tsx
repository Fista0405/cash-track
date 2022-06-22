import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GenericModal from "components/Modals/GenericModal";
import DeleteModal from "components/Modals/DeleteModal";
import { ExpensesContext } from "context/expenses.context";
import ExpensesHttp from "http/expenses.http";
import { Card } from "models/card.model";
import { MouseEvent, useContext, useState } from "react";

import "./index.scss";
import EditPage from "views/App/EditPage";

const ExpensesCard = ({ expenseCardData }: Props) => {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const [expense] = useState(expenseCardData);
  const { id, type, description, value, date } = expense;
  const expensesHttp = new ExpensesHttp();
  const [isModalActive, setIsModalActive] = useState(false);

  const openModalWindow = (e: MouseEvent) => {
    e.stopPropagation();

    setIsModalActive(true);
  };

  const deleteHandler = async () => {
    const removeExpense = expenses.filter((expense) => expense.id !== id);

    await expensesHttp.deleteExpenses(id);

    setExpenses(removeExpense);
  };

  const navigateHandler = (e: MouseEvent) => {
    e.stopPropagation();
    {
      <GenericModal children={<EditPage />} />;
    }
  };

  return (
    <>
      {isModalActive && (
        <DeleteModal onConfirm={deleteHandler} stateHandler={setIsModalActive}>
          <h2>Delete item?</h2>
        </DeleteModal>
      )}
      <div className="expenses-card" onClick={navigateHandler}>
        <GenericModal children={<EditPage />} />

        <FontAwesomeIcon icon={faTrash} onClick={openModalWindow} />
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
