import styles from './PlanMeal.module.scss';
import { useRef, useState } from 'react';

const DaysInput = () => {
  const [isVisible, setVisible] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const openTextArea = () => {
    setVisible(!isVisible);
  };
  return (
    <>
      <label className={styles.plan__label}>
        <div className={styles.plan__day}>
          <h3 className={styles.plan__title}>Понедельник</h3>
          <button className={styles.plan__add} onClick={openTextArea} type="button">
            {isVisible ? 'Удалить' : 'Добавить'}
          </button>
        </div>
        <textarea
          ref={textAreaRef}
          className={
            isVisible ? `${styles.plan__input} ${styles.plan__input_textarea}` : `${styles.plan__input_invisible}`
          }
          name="monday"
          placeholder="Напишите рекомендации"
        />
      </label>
      <label className={styles.plan__label}>
        <div className={styles.plan__day}>
          <h3 className={styles.plan__title}>Вторник</h3>
          <button className={styles.plan__add} onClick={openTextArea} type="button">
            {isVisible ? 'Удалить' : 'Добавить'}
          </button>
        </div>
        <textarea
          className={
            isVisible ? `${styles.plan__input} ${styles.plan__input_textarea}` : `${styles.plan__input_invisible}`
          }
          name="tuesday"
          placeholder="Напишите рекомендации"
        />
      </label>
      <label className={styles.plan__label}>
        <div className={styles.plan__day}>
          <h3 className={styles.plan__title}>Среда</h3>
          <button className={styles.plan__add} onClick={openTextArea} type="button">
            {isVisible ? 'Удалить' : 'Добавить'}
          </button>
        </div>
        <textarea
          className={
            isVisible ? `${styles.plan__input} ${styles.plan__input_textarea}` : `${styles.plan__input_invisible}`
          }
          name="wednesday"
          placeholder="Напишите рекомендации"
        />
      </label>
      <label className={styles.plan__label}>
        <div className={styles.plan__day}>
          <h3 className={styles.plan__title}>Четверг</h3>
          <button className={styles.plan__add} onClick={openTextArea} type="button">
            {isVisible ? 'Удалить' : 'Добавить'}
          </button>
        </div>
        <textarea
          className={
            isVisible ? `${styles.plan__input} ${styles.plan__input_textarea}` : `${styles.plan__input_invisible}`
          }
          name="thursday"
          placeholder="Напишите рекомендации"
        />
      </label>
      <label className={styles.plan__label}>
        <div className={styles.plan__day}>
          <h3 className={styles.plan__title}>Пятница</h3>
          <button className={styles.plan__add} onClick={openTextArea} type="button">
            {isVisible ? 'Удалить' : 'Добавить'}
          </button>
        </div>
        <textarea
          className={
            isVisible ? `${styles.plan__input} ${styles.plan__input_textarea}` : `${styles.plan__input_invisible}`
          }
          name="friday"
          placeholder="Напишите рекомендации"
        />
      </label>
      <label className={styles.plan__label}>
        <div className={styles.plan__day}>
          <h3 className={styles.plan__title}>Суббота</h3>
          <button className={styles.plan__add} onClick={openTextArea} type="button">
            {isVisible ? 'Удалить' : 'Добавить'}
          </button>
        </div>
        <textarea
          className={
            isVisible ? `${styles.plan__input} ${styles.plan__input_textarea}` : `${styles.plan__input_invisible}`
          }
          name="saturday"
          placeholder="Напишите рекомендации"
        />
      </label>
      <label className={styles.plan__label}>
        <div className={styles.plan__day}>
          <h3 className={styles.plan__title}>Воскресение</h3>
          <button className={styles.plan__add} onClick={openTextArea} type="button">
            {isVisible ? 'Удалить' : 'Добавить'}
          </button>
        </div>
        <textarea
          className={
            isVisible ? `${styles.plan__input} ${styles.plan__input_textarea}` : `${styles.plan__input_invisible}`
          }
          name="sunday"
          placeholder="Напишите рекомендации"
        />
      </label>
    </>
  );
};

export default DaysInput;
