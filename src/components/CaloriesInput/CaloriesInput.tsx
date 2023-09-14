import styles from './CaloriesInput.module.scss';
const CaloriesInput = () => {
  return (
    <div className={styles.calories__label}>
          <div className={styles.calories__wrap}>
            <h3 className={styles.calories__title}>КБЖУ</h3>
            <span className={styles.calories__title_tip}>(Введите план на день)</span>
          </div>
          <div className={styles.calories__items}>
            <label>
              <span className={styles.calories__item}>Калории</span>
              <input
                className={`${styles.calories__input} ${styles.calories__input_params}`}
                type="text"
                name="calories"
                placeholder="ккал"
                // value={values?.calories || ''}
                // onChange={handleChangeInput}
              />
            </label>
            <label>
              <span className={styles.calories__item}>Белки</span>
              <input
                className={`${styles.calories__input} ${styles.calories__input_params}`}
                type="text"
                name="protein"
                placeholder="г"
                // value={values?.protein || ''}
                // onChange={handleChangeInput}
              />
            </label>
            <label>
              <span className={styles.calories__item}>Жиры</span>
              <input
                className={`${styles.calories__input} ${styles.calories__input_params}`}
                type="text"
                name="fats"
                placeholder="г"
                // value={values?.fats || ''}
                // onChange={handleChangeInput}
              />
            </label>
            <label>
              <span className={styles.calories__item}>Углеводы</span>
              <input
                className={`${styles.calories__input} ${styles.calories__input_params}`}
                type="text"
                name="carbohydrates"
                placeholder="г"
                // value={values?.carbohydrates || ''}
                // onChange={handleChangeInput}
              />
            </label>
          </div>
        </div>
  )
}

export default CaloriesInput;