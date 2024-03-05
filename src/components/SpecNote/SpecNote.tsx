import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import Textarea from '../Inputs/Textarea/Textarea';
import styles from './SpecNote.module.scss';

type Props<TFormValues extends FieldValues> = {
  textareaName: Path<TFormValues>;
  textareaPlaceholder: string;
  register: UseFormRegister<TFormValues>;
};

const SpecNote = <TFormValues extends FieldValues>({
  textareaName,
  textareaPlaceholder,
  register,
}: Props<TFormValues>) => {
  return (
    <div className={styles.sn__wrapper}>
      <div className={styles.sn__titleWrap}>
        <h3 className={styles.sn__title}>Заметка</h3>
        <p className={styles.sn__text}>{`(видите только вы)`}</p>
      </div>
      <Textarea
        name={textareaName}
        placeholder={textareaPlaceholder}
        register={register}
        maxLength={300}
        minLength={1}
      />
    </div>
  );
};

export default SpecNote;
