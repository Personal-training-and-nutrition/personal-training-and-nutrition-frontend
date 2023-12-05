import styles from "./Registration.module.scss";
import InputEmail from "../Inputs/InputEmail/InputEmail.tsx";
import Button from "../Button/Button.tsx";
import {useForm} from "react-hook-form";
import {InputsType} from "../../pages/ProfilePage/Profile.tsx";
import InputText from "../Inputs/InputText/InputText.tsx";

const EnterData: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: {isDirty, isValid, errors},
  } = useForm<InputsType>({mode: 'all'});

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
  });

  const errorVisible = `${styles.registration__error} ${styles.registration__error_active}`;
  const errorInvisible = `${styles.registration__error}`;
  return (
    <>
      <h2 className={styles.registration__title}>Давайте познакомимся</h2>
      <form className={styles.registration__form} onSubmit={onSubmit}>
        <InputText
          name='first_name'
          placeholder="Ваше имя"
          register={register}
          minLength={2}
          maxLength={50}
          textError={'Поле должно быть от 2 до 50 символов'}
          isInvalid={Boolean(errors.first_name)}
        />
        <span className={errors?.first_name ? errorVisible : errorInvisible}>Имя должно быть от 2 до 50 символов</span>
        <InputText
          name='last_name'
          placeholder="Ваша фамилия"
          register={register}
          minLength={2}
          maxLength={50}
          textError={'Поле должно быть от 2 до 50 символов'}
          isInvalid={Boolean(errors.last_name)}
        />
        <span className={errors?.last_name ? errorVisible : errorInvisible}>Фамилия должна быть от 2 до 50 символов</span>
        <InputEmail
          name="email"
          placeholder="Электронная почта"
          register={register}
          isInvalid={Boolean(errors.email)}
        />
        <span className={errors?.email ? errorVisible : errorInvisible}>{errors?.email?.message || ''}</span>
        <Button textBtn="Дальше" type="submit" isDirty={isDirty} isValid={isValid}/>
      </form>
    </>
  );
};

export default EnterData;
