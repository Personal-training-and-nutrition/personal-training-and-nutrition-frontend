import styles from './Textarea.module.scss'

type Props = {
  placeholder: string;
  name: string;
}

const Textarea = ({ placeholder, name }: Props) => {
  return (
    <>
      <textarea name={name} id="" className={styles.textarea__input} placeholder={placeholder} ></textarea>
    </>
  )
}

export default Textarea