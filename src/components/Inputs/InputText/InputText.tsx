import styles from './InputText.module.scss';

type Props = {
  name: string;
  label: string;
  minLength?: number;
  maxLength?: number;
  placeholder: string;
};

const InputText = ({ name, label, minLength ,maxLength, placeholder }: Props) => {
  return (
    <div className={styles.inputText__wrapper}>
      <label className={styles.inputText__label} htmlFor={name}>{label}</label>
      <input className={styles.inputText__input} type="text" name={name} minLength={minLength} maxLength={maxLength} placeholder={placeholder} />
    </div>
  );
};

export default InputText;
