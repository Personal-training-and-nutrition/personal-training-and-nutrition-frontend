import styles from './SocialIcons.module.scss';

type SocialIconType = {
  isMessanger: boolean;
};
const SocialIcons = ({ isMessanger }: SocialIconType) => {
  return (
    <div className={styles.socialIcons__wrapper}>
      {isMessanger ? (
        <>
          <button type="button" className={styles.socialIcons__btnTelegram}></button>
          <button type="button" className={styles.socialIcons__btnWhatsApp}></button>
        </>
      ) : (
        <>
          <button type="button" className={styles.socialIcons__btnVk} onClick={() => console.log('it work!')}></button>
          <button type="button" className={styles.socialIcons__btnMail}></button>
          <button type="button" className={styles.socialIcons__btnYa}></button>
        </>
      )}
    </div>
  );
};

export default SocialIcons;
