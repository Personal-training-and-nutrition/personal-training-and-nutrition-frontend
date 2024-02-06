import ResumeLayot from '../ResumeLayot/ResumeLayot';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { toggleVisibleExperience } from '../../../redux/slices/specialistSlice';

const Experience: React.FC = () => {
  const dispatch = useAppDispatch();
  const isVisibleExperience = useAppSelector((store) => store.specialist.isVisibleExperience);

  const activity = [
    { mesto: 'Индивидуальные консультации', period: 'с 2018 г.' },
    { mesto: 'DōTERRA RUS LLC, ведущий нутрициолог', period: '2020–2022 гг.' },
  ];
  const handleToggleVisible = () => {
    dispatch(toggleVisibleExperience());
  };
  return (
    <ResumeLayot
      title="Опыт"
      subtitle={'7 лет'}
      activity={activity}
      onClick={handleToggleVisible}
      isVisible={isVisibleExperience}
    />
  );
};

export default Experience;
