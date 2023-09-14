// import { useState } from 'react';
import useValidation from './useValidate';
import Button from '../Button/Button';
import DayBlock from './DayBlock';
import TitleBlock from '../TitleBlock/TitleBlock';
import styles from './PlanMeal.module.scss';
import { weekday } from '../../utils/constants';
import React from 'react';

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
        <div className={styles.plan__label}>
          <div className={styles.plan__wraptitle}>
            <h3 className={styles.plan__title}>КБЖУ</h3>
            <span className={styles.plan__title_tip}>(Введите план на день)</span>
          </div>
          <div className={styles.plan__items}>
            <label>
              <span className={styles.plan__item}>Калории</span>
              <input
                className={`${styles.plan__input} ${styles.plan__input_params}`}
                type="text"
                name="calories"
                placeholder="ккал"
                value={values?.calories || ''}
                onChange={handleChangeInput}
              />
            </label>
            <label>
              <span className={styles.plan__item}>Белки</span>
              <input
                className={`${styles.plan__input} ${styles.plan__input_params}`}
                type="text"
                name="protein"
                placeholder="г"
                value={values?.protein || ''}
                onChange={handleChangeInput}
              />
            </label>
            <label>
              <span className={styles.plan__item}>Жиры</span>
              <input
                className={`${styles.plan__input} ${styles.plan__input_params}`}
                type="text"
                name="fats"
                placeholder="г"
                value={values?.fats || ''}
                onChange={handleChangeInput}
              />
            </label>
            <label>
              <span className={styles.plan__item}>Углеводы</span>
              <input
                className={`${styles.plan__input} ${styles.plan__input_params}`}
                type="text"
                name="carbohydrates"
                placeholder="г"
                value={values?.carbohydrates || ''}
                onChange={handleChangeInput}
              />
            </label>
          </div>
        </div>
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

        <Button textBtn="Сохранить" type='submit' className="button__blue" />
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
