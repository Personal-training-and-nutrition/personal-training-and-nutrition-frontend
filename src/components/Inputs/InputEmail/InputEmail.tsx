import styles from './InputEmail.module.scss'

type Props = {
  name: string,
  placeholder: string,
}

const InputEmail = ({ name, placeholder }: Props) => {
  return (
    <>
      <input type="email" name={name} id="" placeholder={placeholder} className={styles.inputs__email} />
    </>
  )
}

export default InputEmail