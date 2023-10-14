import { UseFormRegister } from 'react-hook-form';
import { InputsType } from '../../../pages/ProfilePage/Profile';
import { formatDate } from '../../../utils/formatDate';
import styles from './DatePicker.module.scss';

const DatePicker = ({ register, isInvalid }: { isInvalid?: boolean; register: UseFormRegister<InputsType> }) => {

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
  }

  return (
    <div className={styles.datePicker__wrapper}>
      <label className={styles.datePicker__label} htmlFor="a">
        Дата рождения
      </label>
      <input
        type="text"
        className={
          isInvalid ? `${styles.datePicker__input_invalid} ${styles.datePicker__input}` : styles.datePicker__input
        }
        onFocus={onFocusInput}
        placeholder="Дата рождения"
        {...register('dob', { required: false, onBlur: onBlurInput })}
        // {...register('dob', { required: true, onBlur: onBlurInput, validate: (value) => (new Date(value)) < new Date() || 'Дата не должна быть больше текущей'  })}
      />
    </div>
  );
};

export default DatePicker;
