import React from 'react';
import DirectionItem from "../DirectionItem/DirectionItem.tsx";
import styles from "./Registration.module.scss";
import {directionData} from "../../utils/constants.tsx";
import {TRegister} from "../../pages/RegisterPage/RegisterPage.tsx";



const EnterDirection: React.FC <TRegister> = ({handleNextStep}) => {
  return (
    <div onClick={handleNextStep}>
      <h2 className={styles.registration__title}>Выберите направление</h2>
      <ul className={styles.registration__listItems}>
        {directionData.map((item) => <DirectionItem key={item.value} title={item.title} value = {item.value}/> )}
      </ul>
    </div>

  );
};

export default EnterDirection;
