import { faUser } from "@fortawesome/free-solid-svg-icons";
import Form from "components/Form";
import InputField from "components/InputField";
import { FormContext } from "context/form.context";
import ExpensesHttp from "http/expenses.http";
import { Card } from "models/card.model";
import { MouseEvent, useContext } from "react";
import { validators } from "utils/generic.util";

const EditPage = () => {
  const { setDisabled } = useContext(FormContext);

  const expensesHttp = new ExpensesHttp();

  const submitHandler = async (data: Card) => {
    await expensesHttp.createExpense(data);
  };

  const toggleEdit = () => {
    setDisabled((prevDisabled: any) => !prevDisabled);
  };

  return (
    <Form onSubmit={submitHandler} isDisabled={() => toggleEdit}>
      <InputField
        icon={faUser}
        label="first name"
        formControl={[
          "name",
          validators({
            required: true,
            maxLength: 10,
          }),
        ]}
      >
        <input type="text" placeholder="first name" />
      </InputField>
      <button>Submit</button>
      <button type="button" onClick={toggleEdit}>
        Edit Mode
      </button>
    </Form>
  );
};

export default EditPage;
