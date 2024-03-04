import certif from '../../../assets/images/spec-card/certificate.svg';
import Carousel from '../Carousel/Carousel';
import styles from './Certificate.module.scss';

const arrCertif = [certif, certif, certif, certif, certif];
const Certificate = () => {
  const handleClick = (index: number) => {
    console.log(index);
  };
  return (
    <section className={styles.certificate}>
      <h4 className={styles.certificate__title}>Сертификаты</h4>
      <Carousel>
        {arrCertif.map((image, index) => (
          <button className={styles.certificate__btn} onClick={() => handleClick(index)} key={index}>
            <img alt="" src={image} className={styles.certificate__item} />
          </button>
        ))}
      </Carousel>
    </section>
  );
};

export default Certificate;
