import PlanUnathLayot from '../../components/PlanUnathLayot/PlanUnathLayot';
import screen from '../../assets/images/planUnauth/icon-planTrain.svg';
import { useEffect } from 'react';
import { useRetrieveTrainingPlanQuery } from '../../redux/services/trainingApi';
import { useLazyRetrieveUserQuery } from '../../redux/services/userApi';

const PlanUnathTraining = () => {
  const url = new URLSearchParams(location.search);
  const id = url.get('id');
  const { data: plan, isSuccess: isSuccessPlan } = useRetrieveTrainingPlanQuery(id!);
  const [retrieveUser, { data: userData }] = useLazyRetrieveUserQuery();

  useEffect(() => {
    if (isSuccessPlan) {
      retrieveUser(plan?.user);
    }
  }, [isSuccessPlan]);

  return (
    <PlanUnathLayot
      userData={userData}
      plans={plan?.training}
      namePlan={plan?.name || ''}
      subtitle="План тренировок на неделю"
      src={screen}
      text={'Твой план тренировки на этот день.'}
    />
  );
};

export default PlanUnathTraining;
