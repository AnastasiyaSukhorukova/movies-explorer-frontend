import { useState } from "react";

export function useFormWithValidation(defaultValues = {}, defaultFormValidity = false) {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(defaultValues);
  const [inputVilidities, setInputVilidities] = useState({});
  const [isValid, setIsValid] = useState(defaultFormValidity);

  const handleChange = (e) => {
    const { name, value, validationMessage, validity, form } = e.target;
    setValues({
      ...values, 
      [name]: value,
    });
    setErrors({
      ...errors, 
      [name]: validationMessage,
    });
    setInputVilidities({
      ...inputVilidities, 
      [name]: validity.valid,
    });
    setIsValid(form.checkValidity());
  };


  return { values, handleChange, errors, isValid, inputVilidities };
};