import { ExpenseType } from "models/card.model";

const FormComponent = () => {
  const selectedOption = Object.keys(ExpenseType).map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return <select>{selectedOption}</select>;
};

export default FormComponent;
