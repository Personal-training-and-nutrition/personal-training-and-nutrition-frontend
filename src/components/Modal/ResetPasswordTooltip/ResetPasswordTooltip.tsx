import Button from '../../Button/Button'
import Modal from '../Modal'
import styles from './ResetPasswordTooltip.module.scss'

const ResetPasswordTooltip = () => {
  return (
    <Modal>
      <div className={styles.resetPassTool__wrapper}>
        <span className={styles.resetPassTool__img} ></span>
        <p className={styles.resetPassTool__text}>Пароль успешно изменен</p>
        <Button textBtn="Закрыть" type="button" isValid={true} isDirty={true}></Button>
      </div>
    </Modal>
  )
}

export default ResetPasswordTooltip