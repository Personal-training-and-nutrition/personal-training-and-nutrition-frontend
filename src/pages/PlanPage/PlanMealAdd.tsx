import React from 'react';
import PlanForm from '../../components/PlanForm/PlanForm';
import {mealData} from '../../utils/constants'

const PlanMealAdd: React.FC = () => {

   return (
    <PlanForm textTitle="ПЛАН ПИТАНИЯ" namePlan='питания' data={mealData}/>
  );
};
export default PlanMealAdd;
