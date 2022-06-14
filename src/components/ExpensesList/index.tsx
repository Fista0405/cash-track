import { Card, TExpenses } from "models/card.model";
import ExpensesCard from "./ExpensesCard";
import "./index.scss";

const ExpensesList = ({ expenses }: Props) => {
  const content = expenses.map((item: TExpenses) => {
    return (
      <li>
        <ExpensesCard expenseCardData={new Card(item)}></ExpensesCard>
      </li>
    );
  });

  return <ul className="contact-list">{content}</ul>;
};

type Props = {
  expenses: TExpenses[];
};

export default ExpensesList;
