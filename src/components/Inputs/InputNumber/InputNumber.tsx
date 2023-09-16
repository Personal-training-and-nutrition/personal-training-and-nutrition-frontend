import styles from './InputNumber.module.scss';

type Props = {
  name: string;
  label: string;
  placeholder: string;
};

const InputNumber = ({ name, label, placeholder }: Props) => {
  return (
    <div className={styles.inputNum__wrapper}>
      <label className={styles.inputNum__label} htmlFor={name}>{label}</label>
      <input className={styles.inputNum__input} type="number" name={name} minLength={2} maxLength={3} placeholder={placeholder} />
    </div>
  );
};

export default InputNumber;
