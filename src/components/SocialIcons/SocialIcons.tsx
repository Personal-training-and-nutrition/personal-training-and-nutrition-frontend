import styles from './SocialIcons.module.scss'

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons__wrapper}>
      <button type="button" className={styles.socialIcons__btnVk} onClick={() => console.log('it work!')}></button>
      <button type="button" className={styles.socialIcons__btnMail}></button>
      <button type="button" className={styles.socialIcons__btnYa}></button>
    </div>
  )
}

export default SocialIcons