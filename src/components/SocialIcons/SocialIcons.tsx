import styles from './SocialIcons.module.scss';

type SocialIconType = {
  isMessanger?: boolean;
  link?:string;
  phoneNumber?: string;
};
const SocialIcons = ({ isMessanger, link, phoneNumber }: SocialIconType) => {

  return (
    <div className={styles.socialIcons__wrapper}>
      {isMessanger ? (
        <>
          <a title="Telegramm" href={`https://telegram.me/share/url?url=WellCoach&text=${link}`} target="_blank">
            <button type="button" className={styles.socialIcons__btnTelegram}></button>
          </a>
          <a title="Whatsapp" href={`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${link}`} target="_blank">
            <button type="button" className={styles.socialIcons__btnWhatsApp}></button>
          </a>
        </>
      ) : (
        <>

          <button type="button" className={styles.socialIcons__btnVk} onClick={() => console.log('it work!')}></button>
          <a href='https://oauth.mail.ru/login?client_id=c5510ba3fdef489e957d557f7a934605&response_type=code&scope=userinfo&redirect_uri=http://localhost:5173&state=some_state'>
            <button type="button" className={styles.socialIcons__btnMail} ></button>
          </a>

          <button type="button" className={styles.socialIcons__btnYa}></button>
        </>
      )}
    </div>
  );
};

export default SocialIcons;
