import { Card } from "models/card.model";
import React, { useState } from "react";

const ExpensesContext = React.createContext({
  expenses: [],
  setExpenses: (expenses: Card[]) => {},
});

const ExpensesProvider = ({ children }: Props) => {
  const [expenses, setExpenses] = useState([]);

  return (
    <ExpensesContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpensesContext.Provider>
  );
};

type Props = {
  children: any;
};

export { ExpensesContext, ExpensesProvider };
