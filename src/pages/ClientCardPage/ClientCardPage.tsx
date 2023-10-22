import TitleBlock from '../../components/TitleBlock/TitleBlock';
import UserInfo from '../../components/UserInfo/UserInfo';
import styles from './ClientCardPage.module.scss';
import plusIcon from '../../assets/images/client-card/button-images/plus-icon.svg';
import phone from '../../assets/images/client-card/phone.svg';
import mail from '../../assets/images/client-card/mail.svg';
import mealPlanImage from '../../assets/images/client-card/plan-image.png';
import workoutPlanImage from '../../assets/images/client-card/workoutPlanImage.png';
import unfold from '../../assets/images/client-card/unfold.svg';
import fold from '../../assets/images/client-card/fold.svg';
import { useEffect, useState } from 'react';
import PlanCard from '../../components/PlanCard/PlanCard';
import { Link, useParams } from 'react-router-dom';
// import { IUser } from '../../redux/types/user';
import { useRetrieveClientQuery } from '../../redux/services/clientsApi.ts';

function ClientCardPage() {
  const [showMore, setShowMore] = useState(true);
  const [showMoretext, setShoeMoreText] = useState(false);
  const { id } = useParams();
  const { data: client, isSuccess } = useRetrieveClientQuery(Number(id));

  // console.log(client);

  // const getText = (client: string) : string => {
  //   if(client.length <= 75) {
  //     return client.slice(0, 74) + '...'
  //   }
  //   return client
  // }
  // const exampleStr = 'Очень длинный текст наполненный жизненным опытом от диет, взлетов и падений'
  // console.log(getText(exampleStr))
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isSuccess)
    return (
      <main className="App__container">
        <div className={styles.clientCard__content}>
          <TitleBlock text="карточка клиента" isBack isEdit path={`/client/edit?id=${id}`} />
          <UserInfo />

          <div className={styles.clientCard__buttons}>
            <Link to={`/meal-plan/create?client=${id}`}>
              <button className={`${styles.clientCard__button} ${styles.clientCard__mealPlanBtn}`}>
                План питания <img className={styles.clientCard__buttonPlusIcon} src={plusIcon} alt="plus-icon" />
              </button>
            </Link>
            <Link to="/workout-plan/create">
              <button className={`${styles.clientCard__button} ${styles.clientCard__workoutPlanBtn}`}>
                План тренировок <img className={styles.clientCard__buttonPlusIcon} src={plusIcon} alt="plus-icon" />
              </button>
            </Link>
          </div>

          <section className={`${styles.clientCard__section} ${styles.clientCard__contacts}`}>
            <h2 className={`${styles.clientCard__title} ${styles.clientCard__contactsTitle}`}>Контакты</h2>
            <div className={`${styles.clientCard__textContainer} ${styles.clientCard__contactsBox}`}>
              <p className={styles.clientCard__contact}>
                <img src={phone} alt="phone-icon" />
                {client?.phone_number || 'Неизвестен'}
              </p>
              <p className={styles.clientCard__contact}>
                <img src={mail} alt="mail-icon" />
                {client?.email}
              </p>
            </div>
          </section>

          <section
            className={
              showMore
                ? `${styles.clientCard__sectionDetails} ${styles.clientCard__sectionDetails_show}`
                : `${styles.clientCard__sectionDetails}`
            }
          >
            <div className={styles.clientCard__moreBlock} onClick={() => setShowMore((prev) => !prev)}>
              <h2 className={styles.clientCard__title}>Подробная информация</h2>
              <img
                className={
                  showMore ? `${styles.clientCard__img} ${styles.clientCard__img_show}` : `${styles.clientCard__img}`
                }
                src={unfold}
                alt="arrow icon"
              />
            </div>
            <div className={`${styles.clientCard__detailsSection} ${styles.clientCard__section}`}>
              <p className={`${styles.clientCard__details} ${styles.clientCard__textContainer}`}>
                Заболевания: <span>{client.diseases ? client.diseases : 'Нет'}</span>
              </p>
              <p className={`${styles.clientCard__details} ${styles.clientCard__textContainer}`}>
                Вредные привычки: <span>{client.bad_habits ? client.bad_habits : 'Нет'}</span>
              </p>
              <p className={`${styles.clientCard__details} ${styles.clientCard__textContainer}`}>
                Опыт диет: <span>{client.exp_diets ? client.exp_diets : 'Нет'}</span>
              </p>
              <p className={`${styles.clientCard__details} ${styles.clientCard__textContainer}`}>
                Предпочтения в еде: <span>{client.food_preferences ? client.food_preferences : 'Нет'}</span>
              </p>
              <p className={`${styles.clientCard__details} ${styles.clientCard__textContainer}`}>
                Опыт тренировок: <span>{client.exp_trainings ? client.exp_trainings : 'Нет'}</span>
              </p>
            </div>
          </section>

          {client.diets.length > 0 ? (
            <section className={styles.clientCard__section}>
              <h2 className={styles.clientCard__title}>Планы питания</h2>

              <Link to="/meal-plan" className={styles.clientCard__link}>
                <PlanCard image={mealPlanImage} title="Минус 2кг (1 неделя)" date="Создан 27 августа 2023" />
              </Link>

              <Link to="/meal-plans" className={styles.clientCard__moreBtn}>
                Смотреть все
              </Link>
            </section>
          ) : (
            ''
          )}

          {client.trainings.length > 0 ? (
            <section className={styles.clientCard__section}>
              <h2 className={styles.clientCard__title}>Планы тренировок</h2>

              <Link to="/workout-report" className={styles.clientCard__link}>
                <PlanCard image={workoutPlanImage} title="Входим в ритм!" date="Создан 27 августа 2023" />
              </Link>

              <Link to="/workout-plans" className={styles.clientCard__moreBtn}>
                Смотреть все
              </Link>
            </section>
          ) : (
            ''
          )}

          <section className={styles.clientCard__section}>
            <h2 className={styles.clientCard__title}>
              Заметка <span className={styles.clientCard__note}>(видите только вы)</span>
            </h2>

            <p className={styles.clientCard__textContainer}>{client.notes ? client.notes : ''}</p>
          </section>
        </div>
      </main>
    );
}

export default ClientCardPage;
