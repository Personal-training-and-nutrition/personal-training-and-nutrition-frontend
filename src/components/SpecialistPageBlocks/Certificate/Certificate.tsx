import certif from '../../../assets/images/spec-card/certificate.svg';
import Carousel from '../Carousel/Carousel';
import styles from './Certificate.module.scss';

const arrCertif = [certif, certif, certif, certif, certif];
const Certificate = () => {
  return (
    <section className={styles.certificate}>
      <h4 className={styles.certificate__title}>Сертификаты</h4>
      <Carousel>
        {arrCertif.map((image, index) => (
          <img key={index} className={styles.certificate__item} alt="" src={image} />
        ))}
      </Carousel>
    </section>
  );
};

export default Certificate;
