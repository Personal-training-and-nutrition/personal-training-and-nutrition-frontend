import styles from './SocialIcons.module.scss';

type SocialIconType = {
  isMessanger?: boolean;
  link?:string;
  phoneNumber?: string;
};
const SocialIcons = ({ isMessanger, link, phoneNumber }: SocialIconType) => {

  // console.log(phoneNumber)
  return (
    <div className={styles.socialIcons__wrapper}>
      {isMessanger ? (
        <>
          <a title="Telegramm" href={`https://telegram.me/share/url?url=WellCoach&text=${link}`} target="_blank" rel="noreferrer">
            <button type="button" className={styles.socialIcons__btnTelegram}></button>
          </a>
          <a title="Whatsapp" href={`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${link}`} target="_blank" rel="noreferrer">
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
