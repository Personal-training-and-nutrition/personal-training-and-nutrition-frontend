import PlanUnathLayot from '../../components/PlanUnathLayot/PlanUnathLayot';
import screen from '../../assets/images/planUnauth/icon-planTrain.svg';

const PlanUnathTraining = () => {
  return (
    <PlanUnathLayot namePlan="Входим в ритм!" subtitle="План тренировок на неделю" src={screen} text={'Твой план тренировки на этот день.'}/>

  );
};

export default PlanUnathTraining;
