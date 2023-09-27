import { UseFormRegister } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';
import styles from './InputEmail.module.scss';

type Props = {
  name: string;
  placeholder: string;
  isLabel?: boolean;
  label?: string;
  register: UseFormRegister<InputsType>
};

const InputEmail = ({ name, placeholder, isLabel, label, register }: Props) => {
  return (
    <>
      {isLabel ? (
        <div className={styles.inputs__wrapper}>
          <label className={styles.inputs__label} htmlFor="phone">
            {label}
          </label>
          <input
            className={styles.inputs__input}
            type="email"
            placeholder={placeholder}
            {...register(`${name}` as never, {required: true})}
          />
        </div>
      ) : (
        <input type="email" id="" placeholder={placeholder} className={styles.inputs__email} {...register(`${name}` as never, {required: true})}/>
      )}
    </>
  );
};

export default InputEmail;
