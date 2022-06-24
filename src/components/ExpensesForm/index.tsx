import { faUser } from "@fortawesome/free-solid-svg-icons";
import Form from "components/Form";
import InputField from "components/InputField";
import { ExpensesContext } from "context/expenses.context";
import { FormContext } from "context/form.context";
import ExpensesHttp from "http/expenses.http";
import { Card, ExpenseType } from "models/card.model";
import { useContext } from "react";
import { validators } from "utils/generic.util";

const ExpensesForm = () => {
  const { disabled, setDisabled, isDisabled } = useContext(FormContext);
  const { setExpenses } = useContext(ExpensesContext);
  const expensesHttp = new ExpensesHttp();

  const submitHandler = async (data: Card) => {
    await expensesHttp.createExpense(data);
    setExpenses(await expensesHttp.getExpenses());
  };

  const selectedOption = Object.keys(ExpenseType).map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <>
      <Form onSubmit={submitHandler} isDisabled={false}>
        <select>{selectedOption}</select>
        <InputField
          icon={faUser}
          label="Expenses Type"
          formControl={[
            "type",
            validators({
              required: true,
              maxLength: 10,
            }),
          ]}
        >
          <input type="text" placeholder="Expenses Type" />
        </InputField>

        <InputField label="Descripton" formControl={["description"]}>
          <input type="text" placeholder="Description" />
        </InputField>

        <InputField
          label="Expenses Amount"
          formControl={[
            "value",
            validators({
              required: true,
            }),
          ]}
        >
          <input type="text" placeholder="Enter amount" />
        </InputField>
        <button>Submit</button>
      </Form>
    </>
  );
};

export default ExpensesForm;
