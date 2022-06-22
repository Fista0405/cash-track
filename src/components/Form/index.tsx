import { CustomFormProvider, FormContext } from "context/form.context";
import { useForm } from "react-hook-form";
import { createClass } from "utils/generic.util";

const Form = ({ children, onSubmit, isDisabled }: Props) => {
  const methods = useForm();

  const classes = createClass({ submitted: methods.formState.isSubmitted });

  //   methods.formState.isSubmitted ? "submitted" : ""

  return (
    <CustomFormProvider isDisabled={isDisabled} methods={methods}>
      <form className={classes} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </CustomFormProvider>
  );
};

type Props = {
  children: any;
  onSubmit: any;
  isDisabled?: boolean;
};

export default Form;
