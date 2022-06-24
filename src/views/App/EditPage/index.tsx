import { faUser } from "@fortawesome/free-solid-svg-icons";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import Form from "components/Form";
import InputField from "components/InputField";
import { ExpensesContext } from "context/expenses.context";
import { FormContext } from "context/form.context";
import ExpensesHttp from "http/expenses.http";
import { Card } from "models/card.model";
import { useContext } from "react";
import { validators } from "utils/generic.util";

const EditPage = () => {
  const { disabled, setDisabled, isDisabled } = useContext(FormContext);
  const { setExpenses } = useContext(ExpensesContext);
  const expensesHttp = new ExpensesHttp();

  const submitHandler = async (data: Card) => {
    await expensesHttp.createExpense(data);
    setExpenses(await expensesHttp.getExpenses());
  };

  const toggleEdit = () => {
    isDisabled((disabled: any) => !disabled);

    console.log({ setDisabled, disabled });
  };

  return (
    <Form onSubmit={submitHandler} isDisabled={false}>
      <InputField
        icon={faUser}
        label="type"
        formControl={[
          "type",
          validators({
            required: true,
            maxLength: 10,
          }),
        ]}
      >
        <input type="text" placeholder="first name" />
      </InputField>
      <button>Submit</button>
      <button onClick={toggleEdit} type="button">
        Toggle Edit Mode
      </button>
    </Form>
  );
};

export default EditPage;
