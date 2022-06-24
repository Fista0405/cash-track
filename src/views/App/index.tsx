import HomePage from "./HomePage";
import NavBar from "components/NavBar";
import ExpensesForm from "components/ExpensesForm";

import { ExpensesProvider } from "context/expenses.context";
import { Routes, Route } from "react-router-dom";

import "./index.scss";

const App = () => {
  const navBarItems = [
    { name: "Popis", path: "/" },
    { name: "Obracun", path: "/obracun" },
  ];

  return (
    <>
      <header className="header">
        <h1 className="header__title">Cash Track App</h1>
      </header>
      <ExpensesProvider>
        <main className="flex flex-column flex-align-center m-t-20">
          <NavBar items={navBarItems}></NavBar>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <section>
            <ExpensesForm />
          </section>
        </main>
      </ExpensesProvider>
    </>
  );
};

export default App;
