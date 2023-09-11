import { useState } from 'react';
const useValidation = () => {
  type InputValuesType = {
    nameplan?: string;
    calories?: number;
    protein?: number;
    fats?: number;
    carbohydrates?: number;
    recomendations?: string;
  };
  const [values, setValues] = useState<InputValuesType>();
  const [isValidForm, setIsValidForm] = useState(false);
  // const [errors, setError] = useState<PropsValues>();

  const onChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setValues((values) => ({ ...values, [name]: value }));
    console.log('я в хуке', evt.target.validity);
    // if (validity.valid) {
    //   setError((errors) => ({ ...errors, [name]: false }));
    // } else setError((errors) => ({ ...errors, [name]: true }));
    setIsValidForm(evt.target.closest('form')!.checkValidity());
  };

  return {
    values,
    setValues,
    // errors,
    onChange,
    isValidForm,
    setIsValidForm,
    // resetValidation,
  };
};

export default useValidation;
