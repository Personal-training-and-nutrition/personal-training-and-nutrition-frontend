import PlanUnathLayot from '../../components/PlanUnathLayot/PlanUnathLayot';
import screen from '../../assets/images/planUnauth/icon-planMeal.svg';
import CaloriesSection from '../../components/CaloriesSection/CaloriesSection';

const PlanUnathMeal = () => {
  return (
    <PlanUnathLayot namePlan="Минус 2кг (1 неделя)" subtitle="Меню на неделю" src={screen} text={'Твои рекомендации на этот день.'}>
      <CaloriesSection />
    </PlanUnathLayot>
  );
};

export default PlanUnathMeal;
