import styles from './DatePicker.module.scss';

// type Props = {}

const DatePicker = () => {
  function onBlurInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.type = 'text';

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
        name=""
        id=""
        className={styles.datePicker__input}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        placeholder='Дата рождения'
      />
    </div>
  );
};

export default DatePicker;
