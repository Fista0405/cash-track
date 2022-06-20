import ReactDOM from "react-dom/client";
import App from "./views/App";
import { BrowserRouter } from "react-router-dom";

import "./style.scss";
import { ExpensesProvider } from "context/expenses.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ExpensesProvider>
      <App />
    </ExpensesProvider>
  </BrowserRouter>
);
