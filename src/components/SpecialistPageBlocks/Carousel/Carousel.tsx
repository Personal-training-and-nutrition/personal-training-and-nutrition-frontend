/* eslint-disable react/prop-types */
import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.scss';

interface ICarousel {
  children?: ReactNode;
}
const Carousel = ({ children }: ICarousel) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDown, setDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  useEffect(() => {
    const containerEl = containerRef.current;
    if (containerEl) {
      if (isDown) {
        containerEl.addEventListener('mousemove', handleMouseMove);
        containerEl.addEventListener('mouseup', handleMouseUp);
      }
    }
  }, [isDown]);
  const handleMouseMove = (evt: MouseEvent) => {
    const containerEl = containerRef.current;
    if (containerEl) {
      if (!isDown) return;
      evt.preventDefault();
      const x = evt.pageX - containerEl.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      containerEl.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    const containerEl = containerRef.current;
    if (containerEl) {
      containerEl.removeEventListener('mousemove', handleMouseMove);
    }
    setDown(false);
  };

  const handleMouseDown = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const containerEl = containerRef.current;
    if (containerEl) {
      setDown(true);
      setStartX(evt.pageX - containerEl.offsetLeft);
      setScrollLeft(containerEl.scrollLeft);
    }
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__container} ref={containerRef} onMouseDown={(evt) => handleMouseDown(evt)}>
        {children}
      </div>
    </div>
  );
};

export default Carousel;
