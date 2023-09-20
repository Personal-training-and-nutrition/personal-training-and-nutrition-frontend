import styles from './CaloriesInput.module.scss';
import { UseFormRegister  } from 'react-hook-form';
import {PlanInputType} from '../PlanPageLayot/PlanPageLayot';

const CaloriesInput = ({ register }: {register:UseFormRegister<PlanInputType>}) => {
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
                // name="calories"
                {...register('calories')}
                placeholder="ккал"
              />
            </label>
            <label>
              <span className={styles.calories__item}>Белки</span>
              <input
                className={`${styles.calories__input} ${styles.calories__input_params}`}
                type="text"
                // name="protein"
                {...register('protein')}
                placeholder="г"
              />
            </label>
            <label>
              <span className={styles.calories__item}>Жиры</span>
              <input
                className={`${styles.calories__input} ${styles.calories__input_params}`}
                type="text"
                // name="fats"
                {...register('fats')}
                placeholder="г"

              />
            </label>
            <label>
              <span className={styles.calories__item}>Углеводы</span>
              <input
                className={`${styles.calories__input} ${styles.calories__input_params}`}
                type="text"
                // name="carbohydrates"
                {...register('carbohydrates')}
                placeholder="г"
              />
            </label>
          </div>
        </div>
  )
}

export default CaloriesInput;