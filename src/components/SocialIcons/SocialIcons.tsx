import styles from './SocialIcons.module.scss';

type SocialIconType = {
  isMessanger: boolean;
};
const SocialIcons = ({ isMessanger }: SocialIconType) => {
  return (
    <div className={styles.socialIcons__wrapper}>
      {isMessanger ? (
        <>
          <a title="Telegramm" href="https://t.me/telegram" target="_blank">
            <button type="button" className={styles.socialIcons__btnTelegram}></button>
          </a>
          <a title="Whatsapp" href="https://wa.me" target="_blank">
            <button type="button" className={styles.socialIcons__btnWhatsApp}></button>
          </a>
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
