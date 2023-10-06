import { UseFormRegister } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';
import { formatDate } from '../../../utils/formatDate';
import styles from './DatePicker.module.scss';
import { useState } from 'react';

const DatePicker = ({ register }: { isInvalid?: boolean; register: UseFormRegister<InputsType> }) => {
  const [error, setError] = useState(false);

  function checkValidData (value: string) {
    const today = new Date();
    const bDay = new Date(value)
    today.getTime() < bDay.getTime() ? setError(true) : setError(false);
  }

  function onBlurInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.type = 'text';
    if (e.target.value) {
      e.target.value = formatDate(e.target.value);
    }
    console.log(e.target.type);
  }

  function onFocusInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.type = 'date';
    console.log(e.target.type);
    checkValidData(e.target.value)
  }

  const errorVisible = `${styles.datePicker__error} ${styles.datePicker__error_active}`;
  const errorInvisible = `${styles.datePicker__error}`;

  return (
    <div className={styles.datePicker__wrapper}>
      <label className={styles.datePicker__label} htmlFor="a">
        Дата рождения
      </label>
      <input
        type="text"
        className={
          error ? `${styles.datePicker__input_invalid} ${styles.datePicker__input}` : styles.datePicker__input
        }
        onFocus={onFocusInput}
        placeholder="Дата рождения"
        {...register('dob', { required: true, onBlur: onBlurInput })}
      />
      <span className={error ? errorVisible : errorInvisible}>Дата не должна быть больше текущей</span>
    </div>
  );
};

export default DatePicker;
