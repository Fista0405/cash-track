import FormComponent from "components/FormComponent";
import HomePage from "./HomePage";
import EditPage from "./EditPage";

import "./index.scss";
import { ExpensesProvider } from "context/expenses.context";
import NavBar from "components/NavBar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const navBarItems = [
    { name: "Popis", path: "/" },
    { name: "Obracun", path: "/obracun" },
  ];

  return (
    <ExpensesProvider>
      <header className="header">
        <h1 className="header__title">Cash Track App</h1>
      </header>
      <main className="flex flex-column flex-align-center m-t-20">
        <NavBar items={navBarItems}></NavBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <section>
          <FormComponent />
          <EditPage />
        </section>
      </main>
    </ExpensesProvider>
  );
};

export default App;
