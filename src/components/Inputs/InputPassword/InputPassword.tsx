import { useState } from 'react'
import styles from './InputPassword.module.scss'
import { UseFormRegister } from 'react-hook-form'
import { InputsType } from '../../../pages/ProfilePage/Profile'

type Props = {
  name: string,
  placeholder: string,
  minLength: number,
  maxLenght: number,
  register: UseFormRegister<InputsType>
}

const InputPassword = ({ name, placeholder, minLength, maxLenght, register }: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  function onShowBtnClick () {
    setIsShowPassword(!isShowPassword)
  }
  return (
    <div className={styles.inputs__wrapper}>
      <input type={!isShowPassword ? 'password' : 'text'} placeholder={placeholder} className={styles.inputs__password} {...register(`${name}` as never, {required: true, minLength: minLength,maxLength:maxLenght})}/>
      <button type='button' className={isShowPassword ? `${styles.inputs__showBtn}` : `${styles.inputs__hideBtn}`} onClick={onShowBtnClick}></button>
    </div>
  )
}

export default InputPassword