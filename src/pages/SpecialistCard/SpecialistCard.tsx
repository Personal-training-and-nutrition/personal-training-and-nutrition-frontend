import TitleBlock from '../../components/TitleBlock/TitleBlock';
// import styles from './SpecialistCard.module.scss';

const SpecialistCard: React.FC = () => {
  return (
    <main className="App__container">
      <TitleBlock isBack={true} isVisibleLinkLike={true} />
      {/* <InfoSpecialist>
        <PersonalDataSpec />
        <ServiceSpec />
        <AboutSpec />
        <EducationSpec />
        <ExperienceSpec />
        <DocumentsSpec />
        <Feedback />
      </InfoSpecialist>
      <button /> */}
    </main>
  );
};

export default SpecialistCard;
