import styles from './ButtonCancel.module.scss';
const ButtonCancel = ({
  text,
  className,
  isDirty,
  isValid,
}: {
  text: string;
  className?: string;
  isDirty?: boolean;
  isValid?: boolean;
}) => {
  return (
    <button
      className={className === 'cancel_style_red' ? `${styles.cancel} ${styles.cancel_style_red}` : `${styles.cancel}`}
      type="button"
      disabled={!isDirty || !isValid}
    >
      {text}
    </button>
  );
};

export default ButtonCancel;
