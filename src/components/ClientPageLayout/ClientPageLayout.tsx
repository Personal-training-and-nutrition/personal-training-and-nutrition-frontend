import { FieldErrors, UseFormRegister, UseFormReset } from 'react-hook-form';
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

export type ClientInputType = {
  last_name?: string | null;
  middle_name?: string | null;
  first_name: string | null;
  dob?: string | null;
  gender?: string | null;
  params: {
    weight?: number | null;
    height?: number | null;
  };
  phone_number: string | null;
  email: string;
  notes?: string | null;
  food_preferences?: string | null;
  bad_habits?: string | null;
  exp_trainings?: string | null;
  exp_diets?: string | null;
  diseases?: string | null;
};

type ClientFormType = {
  register: UseFormRegister<ClientInputType>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  isDirty?: boolean;
  isValid?: boolean;
  errors: FieldErrors<ClientInputType>;
  reset: UseFormReset<ClientInputType>;
};

export default function ClientPageLayout({ register, onSubmit, isDirty, isValid, errors, reset }: ClientFormType) {
  const errorVisible = `${styles.clientPageLayout__error} ${styles.clientPageLayout__error_active}`;
  const errorInvisible = `${styles.clientPageLayout__error}`;

  return (
    <form className={styles.clientPageLayout__form} action="" onSubmit={onSubmit}>
      <div className={styles.clientPageLayout__nameWrap}>
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
      <GenderInput name="gender" register={register} />
      <div className={styles.clientPageLayout__characteristic}>
        <div className={styles.clientPageLayout__dataWrap}>
          <DatePicker name="dob" register={register} isInvalid={Boolean(errors.dob)} />
          <span className={errors?.dob ? errorVisible : errorInvisible}>{errors?.dob?.message || '!!!'}</span>
        </div>

        <InputNumber name="params.weight" label="Вес" placeholder="кг" register={register} />
        <InputNumber name="params.height" label="Рост" placeholder="см" register={register} />
      </div>
      <div className={styles.clientPageLayout__contactsWrap}>
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
      <ul className={styles.clientPageLayout__about}>
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
      <div className={styles.clientPageLayout__buttonsWrap}>
        <Button textBtn="Сохранить" type="submit" isDirty={isDirty} isValid={isValid} />
        <ButtonCancel text="Отменить" isDirty={true} isValid={true} onClick={() => reset()} />
      </div>
    </form>
  );
}
