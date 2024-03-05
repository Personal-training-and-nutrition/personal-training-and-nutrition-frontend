import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { formatDate } from '../../../utils/formatDate';
import styles from './DatePicker.module.scss';

const DatePicker = <TFormValues extends FieldValues>({
  name,
  register,
  isInvalid,
}: {
  name: Path<TFormValues>;
  isInvalid?: boolean;
  register: UseFormRegister<TFormValues>;
}) => {
  function onBlurInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.type = 'text';
    if (e.target.value) {
      e.target.value = formatDate(e.target.value);
    }
  }

  function onFocusInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.type = 'date';
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
        {...register(name, {
          required: 'Введите дату',
          onBlur: onBlurInput,
          validate: {
            dataMoreCurrent: (value) => {
              return new Date(value) < new Date() || 'Дата не должна быть больше текущей';
            },
            dataOld: (value) => {
              return new Date(value) > new Date('1900-01-01') || 'Введите корректную дату';
            },
          },
        })}
      />
    </div>
  );
};

export default DatePicker;
