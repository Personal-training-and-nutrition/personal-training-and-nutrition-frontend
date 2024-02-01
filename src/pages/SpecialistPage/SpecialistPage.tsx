import Education from '../../components/SpecialistPageBlocks/Education/Education';
import Experience from '../../components/SpecialistPageBlocks/Experience/Experience';
import PersonalDataSpec from '../../components/SpecialistPageBlocks/PersonalDataSpec/PersonalDataSpec';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './SpecialistPage.module.scss';

const SpecialistPage: React.FC = () => {
  return (
    <main className="App__container">
      <div className={styles.specialist__container}>
        <TitleBlock isBack={true} isVisibleLinkLike={true} />
        <div className={styles.specialist__page}>
          <PersonalDataSpec />
          {/* <ServiceSpec /> */}
          {/* <AboutSpec /> */}
          <Education />
          <Experience />
          {/* <DocumentsSpec /> */}
          {/* <Feedback /> */}
        </div>
        <button />
      </div>
    </main>
  );
};

export default SpecialistPage;
