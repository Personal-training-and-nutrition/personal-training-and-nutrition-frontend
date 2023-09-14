// import { useState } from 'react';
import useValidation from './useValidate';
import Button from '../Button/Button';
import DayBlock from './DayBlock';
import TitleBlock from '../TitleBlock/TitleBlock';
import styles from './PlanMeal.module.scss';
import { weekday } from '../../utils/constants';
import React from 'react';
import CaloriesInput from '../CaloriesInput/CaloriesInput'

const PlanMeal: React.FC = () => {
  const { values, onChange, isValidForm } = useValidation();

  const handleChangeInput = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(evt);
  };

  return (
    <div className={styles.plan__content}>
      <TitleBlock text="ПЛАН ПИТАНИЯ" isBack={true} />
      <h1 className={styles.plan__userData}>Никитина Александра Сергеевна, 35 лет</h1>
      <form className={styles.plan__form}>
        <label className={styles.plan__label}>
          <h3 className={styles.plan__title}>Название плана питания</h3>
          <input
            className={styles.plan__input}
            type="text"
            name="nameplan"
            placeholder="Напишите название плана"
            value={values?.nameplan || ''}
            onChange={handleChangeInput}
            required
          />
        </label>
        <CaloriesInput />
        <label className={styles.plan__label}>
          <h3 className={styles.plan__title}>Рекомендации</h3>
          <textarea
            className={`${styles.plan__input} ${styles.plan__input_textarea}`}
            name="recomendations"
            placeholder="Напишите рекомендации"
            value={values?.recomendations || ''}
            onChange={(evt) => handleChangeInput(evt)}
          />
        </label>

        {weekday.map((item, index) => (
          <DayBlock item={item} key={index} />
        ))}

        <Button textBtn="Сохранить" type='submit' />
      </form>
      <button
        className={isValidForm ? `${styles.plan__cancel}` : `${styles.plan__cancel} ${styles.plan__cancel_disabled}`}
        type="button"
      >
        Отменить
      </button>
    </div>
  );
};
export default PlanMeal;
