import React, { useState } from "react";

const useForm = <T>(
  initialValues: T
): [T, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [values, setValues] = useState(initialValues);

  const valuesSetter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, valuesSetter];
};

export default useForm;
