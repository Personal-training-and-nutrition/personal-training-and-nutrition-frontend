import React from 'react';
import PlanForm from '../../components/PlanForm/PlanForm';
import {trainingData} from '../../utils/constants'

const PlanTrainingAdd: React.FC = () => {

   return (
    <PlanForm textTitle="ПЛАН ТРЕНИРОВОК" namePlan='тренировок' data={trainingData}/>
  );
};
export default PlanTrainingAdd;
