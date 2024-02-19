import { useRef, useState } from 'react';
import foto from '../../assets/images/spec-card/foto-spec.svg';
import styles from './Slider.module.scss';

const arrImage: string[] = [foto, foto, foto, foto, foto];
const Slider = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const WIDTH_SLIDE_ITEM = 343;

  const handlerClickDot = (index: number) => {
    const containerEl = containerRef.current;
    setActiveSlide(index);
    containerEl?.scrollTo({
      left: (WIDTH_SLIDE_ITEM ?? 0) * index,
      behavior: 'smooth',
    });
  };

  const prevSlides = () => {
    const containerEl = containerRef.current;
    if (containerEl) {
      const { scrollLeft } = containerEl;
      if (scrollLeft === 0) return;
      else {
        containerEl.scrollTo({
          left: scrollLeft - WIDTH_SLIDE_ITEM,
          behavior: 'smooth',
        });
        setActiveSlide((prev) => --prev);
      }
    }
  };
  const nextSlides = () => {
    if (activeSlide + 1 === arrImage.length) return;
    else {
      const containerEl = containerRef.current;
      if (containerEl) {
        const { scrollLeft } = containerEl;

        containerEl.scrollTo({
          left: (WIDTH_SLIDE_ITEM ?? 0) + scrollLeft,
          behavior: 'smooth',
        });
      }
      setActiveSlide((prev) => ++prev);
    }
  };

  return (
    <div ref={rootRef} className={styles.slider}>
      <div ref={containerRef} className={styles.slider__container}>
        {arrImage.map((image, index) => (
          <img key={index} className={styles.slider__foto} alt="" src={image} />
        ))}
      </div>
      <button
        type="button"
        className={`${styles.slider__btn} ${styles.slider__btn_prev}`}
        onClick={prevSlides}
      ></button>
      <button
        type="button"
        className={`${styles.slider__btn} ${styles.slider__btn_next}`}
        onClick={nextSlides}
      ></button>
      <div className={styles.slider__dots}>
        {arrImage.map((_, index) => {
          const styleDot =
            activeSlide === index ? `${styles.slider__dot} ${styles.slider__dot_active}` : `${styles.slider__dot}`;

          return (
            <button key={index} type="button" className={styleDot} onClick={() => handlerClickDot(index)}></button>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
