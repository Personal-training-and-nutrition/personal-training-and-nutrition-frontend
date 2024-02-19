import Button from '../../components/Button/Button';
import AboutMe from '../../components/SpecialistPageBlocks/AboutMe/AboutMe';
import Certificate from '../../components/SpecialistPageBlocks/Certificate/Certificate';
import Education from '../../components/SpecialistPageBlocks/Education/Education';
import Experience from '../../components/SpecialistPageBlocks/Experience/Experience';
import PersonalDataSpec from '../../components/SpecialistPageBlocks/PersonalDataSpec/PersonalDataSpec';
import Services from '../../components/SpecialistPageBlocks/Services/Services';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import styles from './SpecialistPage.module.scss';

const SpecialistPage: React.FC = () => {
  return (
    <main className="App__container">
      <div className={styles.specialist__container}>
        <TitleBlock isBack={true} isVisibleLinkLike={true} />
        <div className={styles.specialist__page}>
          <PersonalDataSpec />
          <Services />
          <AboutMe />
          <Education />
          <Experience />
          <Certificate />
          {/* <Feedback /> */}
          <div className={styles.specialist__btn}>
            <Button textBtn="Записаться" type="submit" isDirty={true} isValid={true} style={true} />
            <Button textBtn="Написать" type="button" isDirty={true} isValid={true} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SpecialistPage;
