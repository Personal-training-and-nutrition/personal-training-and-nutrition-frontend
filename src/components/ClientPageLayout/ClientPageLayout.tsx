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
  user: {
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
  };
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
        <InputText name="user.last_name" label="Фамилия" placeholder="Фамилия" register={register} />{' '}
        <span className={errors?.user?.last_name ? errorVisible : errorInvisible}>
          {errors?.user?.last_name?.message || ''}
        </span>
        <InputText
          name="user.first_name"
          label="Имя"
          placeholder="Имя"
          register={register}
          textError="Введите имя"
          isInvalid={Boolean(errors.user?.first_name)}
        />
        <span className={errors?.user?.first_name ? errorVisible : errorInvisible}>
          {errors?.user?.first_name?.message || ''}
        </span>
        <InputText name="user.middle_name" label="Отчество" placeholder="Отчество" register={register} />
      </div>
      <GenderInput name="user.gender" register={register} />
      <div className={styles.clientPageLayout__characteristic}>
        <div className={styles.clientPageLayout__dataWrap}>
          <DatePicker name="user.dob" register={register} isInvalid={Boolean(errors.user?.dob)} />
          <span className={errors?.user?.dob ? errorVisible : errorInvisible}>
            {errors?.user?.dob?.message || '!!!'}
          </span>
        </div>

        <InputNumber
          name="user.params.weight"
          label="Вес"
          placeholder="кг"
          register={register}
          maxValue={251}
          textError={'Максимальное значение не более 251'}
          isInvalid={Boolean(errors?.user?.params?.weight)}
        />
        <InputNumber
          name="user.params.height"
          label="Рост"
          placeholder="см"
          register={register}
          maxValue={251}
          textError={'Максимальное значение не более 251'}
          isInvalid={Boolean(errors?.user?.params?.height)}
        />
      </div>
      <div className={styles.clientPageLayout__contactsWrap}>
        <div>
          <InputPhone name="user.phone_number" register={register} isInvalid={Boolean(errors.user?.phone_number)} />
          <span className={errors?.user?.phone_number ? errorVisible : errorInvisible}>
            {errors?.user?.phone_number?.message || ''}
          </span>
        </div>
        <div>
          <InputEmail
            name="user.email"
            label="Email"
            placeholder="Email"
            isLabel={true}
            register={register}
            isInvalid={Boolean(errors.user?.email)}
          />
          <span className={errors?.user?.email ? errorVisible : errorInvisible}>
            {errors?.user?.email?.message || ''}
          </span>
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
