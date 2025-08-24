import styles from './mainInfo.module.css';

export const MainInfo = () => (
  <section className={styles.mainInfo}>
    <div className={styles.wings}>
      <h1 className={styles.mainInfoTitle}>Trusted by millions</h1>
      <h2 className={styles.mainInfoSubtitle}>on their path to pregnancy</h2>
    </div>
      <p className={styles.mainInfoRegularText}>
          Expert cycle tracking, precise fertility insights, and personalized health
          guidance — tailored just for you.
      </p>
  </section>
);