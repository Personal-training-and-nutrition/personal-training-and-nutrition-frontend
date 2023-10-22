import InputText from '../../components/Inputs/InputText/InputText';
import GenderInput from '../../components/Inputs/GenderInput/GenderInput';
import DatePicker from '../../components/Inputs/DatePicker/DatePicker';
import InputNumber from '../../components/Inputs/InputNumber/InputNumber';
import InputPhone from '../../components/Inputs/InputPhone/InputPhone';
import InputEmail from '../../components/Inputs/InputEmail/InputEmail';
import AboutClientCard from '../../components/AboutClientCard/AboutClientCard';
import SpecNote from '../../components/SpecNote/SpecNote';
import ButtonCancel from '../../components/ButtonCancel/ButtonCancel';
import Button from '../../components/Button/Button';

import styles from './ClientPageLayout.module.scss';

export default function ClientPageLayout() {
  const errorVisible = `${styles.addClient__error} ${styles.addClient__error_active}`;
  const errorInvisible = `${styles.addClient__error}`;

  return (
    <form className={styles.addClient__form} action="" onSubmit={onSubmit}>
      <div className={styles.addClient__nameWrap}>
        <InputText name="last_name" label="Фамилия" placeholder="Фамилия" register={register} />{' '}
        <span className={errors?.last_name ? errorVisible : errorInvisible}>{errors?.last_name?.message || ''}</span>
        <InputText
          name="first_name"
          label="Имя"
          placeholder="Имя"
          register={register}
          textError="Введите имя"
          isInvalid={Boolean(errors.first_name)}
        />
        <span className={errors?.first_name ? errorVisible : errorInvisible}>{errors?.first_name?.message || ''}</span>
        <InputText name="middle_name" label="Отчество" placeholder="Отчество" register={register} />
      </div>
      <GenderInput register={register} />
      <div className={styles.addClient__characteristic}>
        <div className={styles.addClient__dataWrap}>
          <DatePicker register={register} isInvalid={Boolean(errors.dob)} />
          <span className={errors?.dob ? errorVisible : errorInvisible}>{errors?.dob?.message || '!!!'}</span>
        </div>

        <InputNumber name="weight" label="Вес" placeholder="кг" register={register} />
        <InputNumber name="height" label="Рост" placeholder="см" register={register} />
      </div>
      <div className={styles.addClient__contactsWrap}>
        <div>
          <InputPhone name="phone_number" register={register} isInvalid={Boolean(errors.phone_number)} />
          <span className={errors?.phone_number ? errorVisible : errorInvisible}>
            {errors?.phone_number?.message || ''}
          </span>
        </div>
        <div>
          <InputEmail
            name="email"
            label="Email"
            placeholder="Email"
            isLabel={true}
            register={register}
            isInvalid={Boolean(errors.email)}
          />
          <span className={errors?.email ? errorVisible : errorInvisible}>{errors?.email?.message || ''}</span>
        </div>
      </div>
      <ul className={styles.addClient__about}>
        <AboutClientCard
          title="Заболевания"
          textareaName="diseases"
          textaeraPlaceholder="Добавьте важную информацию"
          register={register}
        />
        <AboutClientCard
          title="Опыт диет"
          textareaName="exp_diets"
          textaeraPlaceholder="Добавьте важную информацию"
          register={register}
        />
        <AboutClientCard
          title="Опыт тренировок"
          textareaName="exp_trainings"
          textaeraPlaceholder="Добавьте важную информацию"
          register={register}
        />
        <AboutClientCard
          title="Вредные привычки"
          textareaName="bad_habits"
          textaeraPlaceholder="Добавьте важную информацию"
          register={register}
        />
        <AboutClientCard
          title="Предпочтения в еде"
          textareaName="food_preferences"
          textaeraPlaceholder="Добавьте важную информацию"
          register={register}
        />
      </ul>
      <SpecNote textareaName="notes" textareaPlaceholder="Добавьте важную информацию" register={register} />
      <div className={styles.addClient__buttonsWrap}>
        <Button textBtn="Сохранить" type="submit" isDirty={isDirty} isValid={isValid} />
        <ButtonCancel text="Отменить" isDirty={true} isValid={true} onClick={() => reset()} />
      </div>
    </form>
  );
}
