import ResumeLayot from '../ResumeLayot/ResumeLayot';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { toggleVisibleEducation } from '../../../redux/slices/specialistSlice';

const Education: React.FC = () => {
  const dispatch = useAppDispatch();
  const isVisibleEducation = useAppSelector((store) => store.specialist.isVisibleEducation);
  const handleToggleVisible = () => {
    dispatch(toggleVisibleEducation());
  };
  const activity = [{ mesto: 'Яндекс Практикум', period: '2023 гг.' }];
  return (
    <ResumeLayot title="Образование" activity={activity} onClick={handleToggleVisible} isVisible={isVisibleEducation} />
  );
};

export default Education;
