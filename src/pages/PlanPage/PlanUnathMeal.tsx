import PlanUnathLayot from '../../components/PlanUnathLayot/PlanUnathLayot';
import screen from '../../assets/images/planUnauth/icon-planMeal.svg';
import CaloriesSection from '../../components/CaloriesSection/CaloriesSection';
import { useEffect } from 'react';
import { useLazyRetrieveUserQuery } from '../../redux/services/userApi';
import { useRetrieveDietPlanQuery } from '../../redux/services/dietApi';

const PlanUnathMeal = () => {

  const url = new URLSearchParams(location.search);
  const id = url.get('id');
  const { data: plan, isSuccess: isSuccessPlan } = useRetrieveDietPlanQuery(id!);
  const [retrieveUser, { data: userData }] = useLazyRetrieveUserQuery();

  useEffect(() => {
    if (isSuccessPlan) {
      retrieveUser(plan?.user);
    }
  }, [isSuccessPlan]);

  return (
    <PlanUnathLayot
      userData = {userData}
      plans={plan?.diet}
      namePlan={plan?.name || ''}
      subtitle="Меню на неделю"
      src={screen}
      text={'Твои рекомендации на этот день.'}
    >
      <CaloriesSection kkal={plan?.kkal} protein={plan?.protein} fat={plan?.fat} carbo={plan?.carbo}/>
    </PlanUnathLayot>
  );
};

export default PlanUnathMeal;
