import React from 'react';
import styles from './DirectionItem.module.scss';


type TDirectionItem = {
  title: string;
  value:number;
}

const DirectionItem: React.FC<TDirectionItem> = ({title, value}) => {
  const handleClick = () =>{
    console.log(value)
  }

  return (
    <>
      <li role="menuitem" onClick={handleClick} className={styles.directionItem}>
        {title}
      </li>
    </>
  );
};

export default DirectionItem;
