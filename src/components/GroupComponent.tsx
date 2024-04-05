import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = () => {
  return (
    <section className={styles.pageHeaderParent}>
      <img
        className={styles.pageHeaderIcon}
        alt=""
        src="/rectangle-5-1@2x.png"
      />
      <div className={styles.featureCarousel}>
        <div className={styles.featureIndicatorsParent}>
          <img
            className={styles.featureIndicatorsIcon}
            alt=""
            src="/star-1-8@2x.png"
          />
          <div className={styles.featureDescriptions}>
            <h2 className={styles.gamingSpaning}>Gaming spaning</h2>
          </div>
        </div>
        <div className={styles.starParent}>
          <img className={styles.frameChild} alt="" src="/star-1-8@2x.png" />
          <div className={styles.actionPackedWrapper}>
            <h2 className={styles.actionPacked}>Action - packed</h2>
          </div>
        </div>
        <div className={styles.starGroup}>
          <img className={styles.frameItem} alt="" src="/star-1-8@2x.png" />
          <div className={styles.mindBendingWrapper}>
            <h2 className={styles.mindBending}>mind - bending</h2>
          </div>
        </div>
        <div className={styles.starContainer}>
          <img className={styles.frameInner} alt="" src="/star-1-8@2x.png" />
          <div className={styles.collectionOgGamesWrapper}>
            <h2 className={styles.collectionOgGames}>collection og games</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent;
