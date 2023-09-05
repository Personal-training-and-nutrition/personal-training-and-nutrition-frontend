import React from "react";
import styles from '../scss/_landing.module.scss'
import Sidebar from "../components/Sidebar/Sidebar.tsx";

const LandingPage: React.FC = () => {
  return (
    <main className={styles.container}>
      <Sidebar/>
      <section className={styles.content}>
        Контент
      </section>
    </main>
  );
}

export default LandingPage;
