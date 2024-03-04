import { toggleOpenService } from '../../../redux/slices/specialistSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import styles from './Services.module.scss';
const Services = () => {
  const dispatch = useAppDispatch();
  const isOpenService = useAppSelector((store) => store.specialist.isOpenService);
  const handleClickService = () => {
    dispatch(toggleOpenService());
  };
  const listService = [
    {
      title: 'Консультация online',
      price: 5000,
      discription:
        'Перед консультацией провожу бесплатную беседу-знакомство 30 мин для выстраивания дальнейшей стратегии работы. Бесплатное сопровождение 14 дней после консультации.',
    },
    {
      title: 'Консультация очно Крылатское',
      price: '7000',
      discription: 'Консультация проходит в моем кабинете, в непринужденной обстановке. В результате вы получаете',
    },
    {
      title: 'Разработка индивидуального плана питания',
      price: '10000',
      discription:
        'Для разработки плана нужно будет заполнить пищевой дневник в течение двух недель, после чего мы встречаемся',
    },
    {
      title: 'Совместный поход за продуктами',
      price: '4000',
      discription:
        'Для разработки плана нужно будет заполнить пищевой дневник в течение двух недель, после чего мы встречаемся',
    },
    {
      title: 'Разработка плана тренировок',
      price: '15000',
      discription:
        'Для разработки плана нужно будет заполнить пищевой дневник в течение двух недель, после чего мы встречаемся',
    },
  ];

  const listServiceToRender =
    listService.length <= 3 ? listService : isOpenService ? listService : listService.slice(0, 3);

  return (
    <section className={styles.services}>
      <h3 className={styles.services__title}>Услуги и цены</h3>
      <ul className={styles.services__list}>
        {listServiceToRender.length !== 0
          ? listServiceToRender.map((obj, i) => {
              return (
                <li key={i} className={styles.services__item}>
                  <h4 className={styles.services__name}>{obj.title}</h4>
                  <p className={styles.services__price}>{obj.price} ₽</p>
                  <p className={styles.services__discription}>{obj.discription}</p>
                </li>
              );
            })
          : ''}
        {/* {listServiceToRender.length < listService.length && ( */}
        <div className={styles.services__wrap}>
          <button type="button" className={styles.services__btn} onClick={handleClickService}>
            {isOpenService ? 'Свернуть' : `Все услуги и цены (${listService.length})`}
          </button>
          <span
            className={
              isOpenService
                ? `${styles.services__arrow} ${styles.services__arrow_up}`
                : `${styles.services__arrow} ${styles.services__arrow_down}`
            }
          ></span>
        </div>
        {/* )} */}
      </ul>
    </section>
  );
};

export default Services;
