import { useState } from 'react';
import ant from '../../../assets/images/spec-card/ant-design-icon.svg';
import tg from '../../../assets/images/spec-card/telegram-icon.svg';
import vk from '../../../assets/images/spec-card/vk-icon.svg';
import youtube from '../../../assets/images/spec-card/youtube-icon.svg';
import styles from './AboutMe.module.scss';
const AboutMe = () => {
  const [isShowMoreText, setShowMoreText] = useState(false);
  const [isShowMoreSkills, setShowMoreSkills] = useState(false);
  const skills = [
    'Потеря веса',
    'Интуитивное питание',
    'Здоровье кишечника',
    'Спортивное питание',
    'Высокое давление',
    'РПП',
    'FODMAP',
    'Потеря веса',
    'Интуитивное питание',
  ];
  const text =
    'Нутрициолог с опытом работы в области питания и здорового образа жизни. Обладаю глубокими знаниями о роли макро- и микроэлементов, витаминов, антиоксидантов и фитонутриентов в поддержании  еще..Нутрициолог с опытом работы в области питания и здорового образа жизни. Обладаю глубокими знаниями о роли макро- и микроэлементов, витаминов, антиоксидантов и фитонутриентов в поддержании ';

  const textToRender = text.length >= 187 ? (isShowMoreText ? text : text.substring(0, 188)) : text;
  const skillsToRender = skills.length <= 7 ? skills : !isShowMoreSkills ? skills.slice(0, 7) : skills;
  const hiddenSkills = skills.length - skillsToRender.length;
  const handleMoreTextBtn = (): void => {
    setShowMoreText(!isShowMoreText);
  };
  const handleMoreSkills = () => {
    setShowMoreSkills(true);
  };

  return (
    <section className={styles.aboutMe}>
      <h4 className={styles.aboutMe__title}>О себе</h4>
      <div className={styles.aboutMe__content}>
        <div className={styles.aboutMe__block}>
          <div className={styles.aboutMe__video}></div>
          <div className={styles.aboutMe__description}>
            <p className={styles.aboutMe__subtitle}>
              {textToRender}
              {textToRender.length >= 187 && (
                <button type="button" className={styles.aboutMe__moreText} onClick={handleMoreTextBtn}>
                  {isShowMoreText ? '..cвернуть' : 'еще..'}
                </button>
              )}
            </p>
          </div>
          <ul className={styles.aboutMe__skillsList}>
            {skillsToRender.length !== 0 &&
              skillsToRender.map((el, i) => (
                <li key={i} className={styles.aboutMe__skill}>
                  {el}
                </li>
              ))}
            {skills.length > skillsToRender.length && (
              <button type="button" className={styles.aboutMe__moreSkills} onClick={handleMoreSkills}>
                {`+${hiddenSkills}`}
              </button>
            )}
          </ul>
        </div>
        <ul className={styles.aboutMe__socialList}>
          <li className={styles.aboutMe__socialItem}>
            <a className={styles.aboutMe__socialLink} href="/#" aria-label="Вконтакте" target="_blank">
              <img src={vk} alt="" />{' '}
            </a>{' '}
          </li>
          <li className={styles.aboutMe__social}>
            <a className={styles.aboutMe__socialLink} href="/#" aria-label="Youtube" target="_blank">
              <img src={youtube} alt="" />{' '}
            </a>
          </li>
          <li className={styles.aboutMe__social}>
            <a className={styles.aboutMe__socialLink} href="/#" aria-label="Телеграмм" target="_blank">
              <img src={tg} alt="" />{' '}
            </a>{' '}
          </li>
          <li className={styles.aboutMe__social}>
            <a className={styles.aboutMe__socialLink} href="/#" aria-label="Ant" target="_blank">
              <img src={ant} alt="" />{' '}
            </a>{' '}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
