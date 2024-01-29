import styles from './Slider.module.scss';

interface IChildrenProps {
  children: React.ReactNode;
}
const Slider: React.FC<IChildrenProps> = ({ children }: IChildrenProps) => {
  return (
    <div className={styles.slider}>
      <div className={styles.slider__window}>
        <div className={styles.slider__container}>{children}</div>
      </div>
    </div>
  );
};

export default Slider;
