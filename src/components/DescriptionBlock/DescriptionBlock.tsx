import { useState } from 'react';
import styles from './DescriptionBlock.module.scss';

type DescriptionProps = {
  title: string;
  children: string;
};

function DescriptionBlock({ title, children }: DescriptionProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={styles.Description}>
      <span className={styles.Description__title}>{title}:</span>
      <span className={styles.Description__text}>
        {children.length < 103 || showMore ? (
          children
        ) : (
          <>
            {children.slice(0, 103) + '...'}{' '}
            <button onClick={() => setShowMore((prev) => !prev)} className={styles.Description__moreBtn}>
              еще
            </button>
          </>
        )}
      </span>
    </div>
  );
}

export default DescriptionBlock;
