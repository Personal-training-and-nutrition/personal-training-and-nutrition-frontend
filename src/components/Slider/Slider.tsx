import { useEffect, useRef, useState } from 'react';
import foto from '../../assets/images/spec-card/foto-spec.svg';
import styles from './Slider.module.scss';

const arrImage: string[] = [foto, foto, foto, foto, foto];
const Slider = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDown, setDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(null);
  const [scrollLeft, setScrollLeft] = useState<number>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const WIDTH_SLIDE_ITEM = 343;
  const containerEl = containerRef.current;
  useEffect(() => {
    const containerEl = containerRef.current;
    if (containerEl) {
      if (isDown) {
        containerEl.addEventListener('mousemove', handleMouseMove);
        containerEl.addEventListener('mouseup', handleMouseUp);
      }
      return () => {
        containerEl.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDown]);
  const handleMouseMove = (e) => {
    if (containerEl) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - containerEl.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      containerEl.scrollLeft = scrollLeft - walk;
    }
  };
  const findActiveSlide = () => {
    if (containerEl) {
      // const scrollWidth = containerEl.scrollWidth; // ширина всей карусели
      const scrollLeft = containerEl.scrollLeft; // на сколько сдвинута карусель влево
      // console.log('scrollLeft <= WIDTH_SLIDE_ITEM', scrollLeft, WIDTH_SLIDE_ITEM);
      // console.log('scrollLeft <= scrollWidth - WIDTH_SLIDE_ITEM', scrollLeft, scrollWidth - WIDTH_SLIDE_ITEM);

      if (scrollLeft >= 0 && scrollLeft < 89) setActiveSlide(0);
      if (scrollLeft >= 89 && scrollLeft <= 440) setActiveSlide(1);
      if (scrollLeft >= 440 && scrollLeft <= 790) setActiveSlide(2);
      if (scrollLeft >= 790 && scrollLeft <= 1140) setActiveSlide(3);
      if (scrollLeft >= 1140) setActiveSlide(4);
    }
  };
  const handleMouseUp = (e) => {
    if (containerEl) {
      findActiveSlide();
      containerEl.removeEventListener('mousemove', handleMouseMove);
    }
    setDown(false);
  };

  const handleMouseDown = (e) => {
    if (containerEl) {
      setDown(true);
      setStartX(e.pageX - containerEl.offsetLeft);
      setScrollLeft(containerEl.scrollLeft);
    }
  };

  const handlerClickDot = (index: number) => {
    if (containerEl) {
      containerEl.scrollTo({
        left: (WIDTH_SLIDE_ITEM ?? 0) * index,
        behavior: 'smooth',
      });
    }
    setActiveSlide(index);
  };
  return (
    <div className={styles.slider}>
      <div className={styles.slider__container} ref={containerRef} onMouseDown={handleMouseDown}>
        {arrImage.map((image, index) => (
          <img key={index} className={styles.slider__item} alt="" src={image} />
        ))}
      </div>
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
