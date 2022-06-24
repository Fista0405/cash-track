import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExpensesForm from "components/ExpensesForm";
import ConfirmationModal from "components/Modals/ConfirmationModal";
import Modal from "components/Modals/Modal";
import { ExpensesContext } from "context/expenses.context";
import ExpensesHttp from "http/expenses.http";
import { Card } from "models/card.model";
import { MouseEvent, useContext, useState } from "react";

import "./index.scss";

const ExpensesCard = ({ expenseCardData }: Props) => {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const [expense] = useState(expenseCardData);
  const { id, type, description, value, date } = expense;
  const expensesHttp = new ExpensesHttp();

  const [isModalActive, setIsModalActive] = useState(false);
  const [isConfirmationModalActive, setIsConfirmationModalActive] =
    useState(false);

  const openModalWindow = (e: MouseEvent) => {
    e.stopPropagation();

    setIsModalActive(true);
  };

  const openConfirmationModalWindow = (e: MouseEvent) => {
    e.stopPropagation();

    setIsConfirmationModalActive(true);
  };

  const deleteHandler = async () => {
    const removeExpense = expenses.filter((expense) => expense.id !== id);

    await expensesHttp.deleteExpenses(id);

    setExpenses(removeExpense);
  };

  return (
    <>
      {isModalActive && (
        <Modal stateHandler={setIsModalActive}>{<ExpensesForm />}</Modal>
      )}

      {isConfirmationModalActive && (
        <ConfirmationModal
          stateHandler={setIsConfirmationModalActive}
          onConfirm={deleteHandler}
        >
          <h2>Are you sure you want to delete {type}?</h2>
        </ConfirmationModal>
      )}

      <div className="expenses-card" onClick={openModalWindow}>
        <FontAwesomeIcon icon={faTrash} onClick={openConfirmationModalWindow} />
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
