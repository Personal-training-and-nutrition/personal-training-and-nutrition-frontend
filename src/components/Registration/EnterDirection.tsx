import React from 'react';
import DirectionItem from "../DirectionItem/DirectionItem.tsx";
import styles from "./Registration.module.scss";
import {directionData} from "../../utils/constants.tsx";



const EnterDirection: React.FC = () => {
  return (
    <>
      <h2 className={styles.registration__title}>Выберите направление</h2>
      <ul className={styles.registration__listItems}>
        {directionData.map((item) => <DirectionItem key={item.value} title={item.title} value = {item.value}/> )}
      </ul>
    </>

  );
};

export default EnterDirection;
