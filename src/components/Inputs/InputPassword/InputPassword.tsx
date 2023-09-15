import { useState } from 'react'
import styles from './InputPassword.module.scss'

type Props = {
  name: string,
  placeholder: string,
  minLength: number,
  maxLenght: number,
}

const InputPassword = ({ name, placeholder, minLength, maxLenght }: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  function onShowBtnClick () {
    setIsShowPassword(!isShowPassword)
  }
  return (
    <div className={styles.inputs__wrapper}>
      <input type={!isShowPassword ? 'password' : 'text'} name={name} id="" placeholder={placeholder} className={styles.inputs__password} minLength={minLength} maxLength={maxLenght} />
      <button type='button' className={isShowPassword ? `${styles.inputs__showBtn}` : `${styles.inputs__hideBtn}`} onClick={onShowBtnClick}></button>
    </div>
  )
}

export default InputPassword