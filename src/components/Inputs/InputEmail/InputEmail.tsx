import styles from './InputEmail.module.scss';

type Props = {
  name: string;
  placeholder: string;
  isLabel?: boolean;
  label: string;
};

const InputEmail = ({ name, placeholder, isLabel, label }: Props) => {
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
            name={name}
            minLength={2}
            maxLength={3}
            placeholder={placeholder}
          />
        </div>
      ) : (
        <input type="email" name={name} id="" placeholder={placeholder} className={styles.inputs__email} />
      )}
    </>
  );
};

export default InputEmail;
