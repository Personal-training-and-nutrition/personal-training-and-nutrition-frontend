import Textarea from '../Inputs/Textarea/Textarea';
import styles from './SpecNote.module.scss'

type Props = {
  textareaName: string;
  textareaPlaceholder: string;
}

const SpecNote = ({ textareaName, textareaPlaceholder }: Props) => {
  return (
    <div className={styles.sn__wrapper}>
      <div className={styles.sn__titleWrap}>
      <h3 className={styles.sn__title}>Заметка</h3>
      <p className={styles.sn__text}>{`(видите только вы)`}</p>
      </div>
      <Textarea name={textareaName} placeholder={textareaPlaceholder} />
    </div>
  )
}

export default SpecNote