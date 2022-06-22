import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormContext } from "context/form.context";
import { cloneElement, useContext } from "react";
import { useFormContext } from "react-hook-form";

import "./index.scss";

const InputField = ({
  children,
  label = "",
  icon,
  formControl = null,
}: Props) => {
  const { disabled, ...methods } = useContext(FormContext);
  const defaultProps = { disabled };

  const [id, validators] = formControl || [];
  const props = formControl
    ? { ...defaultProps, ...methods?.register(id, validators) }
    : defaultProps;

  const errorMessage = methods?.formState?.errors[id]?.message;

  const content = cloneElement(children, props);

  return (
    <div className="input-field">
      <label className="input-field__label" htmlFor={id}>
        {label}
      </label>
      <div className="input-field__input">
        <FontAwesomeIcon icon={icon} />
        {content}
      </div>
      <span className="input-field__error">{errorMessage}</span>
    </div>
  );
};

type Props = {
  children: any;
  label?: string;
  icon?: IconProp;
  formControl?: any[];
  isDisabled?: boolean;
};

export default InputField;
