import PersonalDataSpec from '../../components/PersonalDataSpec/PersonalDataSpec';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './SpecialistPage.module.scss';

const SpecialistPage: React.FC = () => {
  return (
    <main className="App__container">
      <TitleBlock isBack={true} isVisibleLinkLike={true} />
      <div className={styles.specialist__page}>
        <PersonalDataSpec />
        {/* <ServiceSpec />
        <AboutSpec />
        <EducationSpec />
        <ExperienceSpec />
        <DocumentsSpec />
        <Feedback /> */}
      </div>
      <button />
    </main>
  );
};

export default SpecialistPage;
