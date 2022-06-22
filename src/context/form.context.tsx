import { createContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const FormContext = createContext({
  disabled: false,
  setDisabled: (isDisabled: boolean) => {},
} as any);

const CustomFormProvider = ({ children, isDisabled, methods }: Props) => {
  const [disabled, setDisabled] = useState(isDisabled);

  return (
    <FormContext.Provider value={{ disabled, setDisabled, ...methods }}>
      <FormProvider {...methods}>{children}</FormProvider>
    </FormContext.Provider>
  );
};

type Props = {
  children: any;
  isDisabled?: boolean;
  methods?: any;
};

export { FormContext, CustomFormProvider };
