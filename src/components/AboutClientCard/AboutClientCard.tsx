import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { InputsType } from '../../pages/ProfilePage/Profile';
import Textarea from '../Inputs/Textarea/Textarea';
import styles from './AboutClientCard.module.scss';
import { useState } from 'react';

type Props<TFormValues extends FieldValues> = {
  title: string;
  textareaName: Path<TFormValues>;
  textaeraPlaceholder: string;
  register: UseFormRegister<TFormValues>;
};

const AboutClientCard = <TFormValues extends FieldValues>({
  title,
  textareaName,
  textaeraPlaceholder,
  register,
}: Props<TFormValues>) => {
  const [isShowCard, setIsShowCard] = useState(false);

  function onShowClick() {
    setIsShowCard(!isShowCard);
  }

  return (
    <li
      className={isShowCard ? `${styles.cc__item} ${styles.cc__item_full}` : `${styles.cc__item} ${styles.cc__grayBg}`}
    >
      <div className={styles.cc__titleWrap} onClick={onShowClick}>
        <h3 className={styles.cc__title}>{title}</h3>
        <button
          type="button"
          className={!isShowCard ? `${styles.cc__btn} ${styles.cc__btn_active}` : `${styles.cc__btn}`}
        ></button>
      </div>
      <div className={isShowCard ? `${styles.cc__inputWrap} ${styles.cc__inputWrap_show}` : `${styles.cc__inputWrap}`}>
        <Textarea name={textareaName} placeholder={textaeraPlaceholder} register={register} />
      </div>
    </li>
  );
};

export default AboutClientCard;
