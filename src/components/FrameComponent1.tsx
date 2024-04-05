import { FunctionComponent } from "react";
import ActionButtons from "./ActionButtons";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.buttonsParent}>
      <div className={styles.buttons}>
        <div className={styles.description}>
          <div className={styles.letYourMindExploreNewWorlParent}>
            <b className={styles.letYourMindContainer}>
              <span className={styles.letYourMindContainer1}>
                <span>{`Let your mind `}</span>explore
                <span> new world</span>
              </span>
            </b>
            <div className={styles.playingElectronicGames}>
              Playing electronic games, whether through consoles, computers,
              mobile phones or another medium altogether. Gaming is a nuanced
              term that suggests regular gameplay, possibly as a hobby.
            </div>
          </div>
        </div>
        <ActionButtons buyNow="Buy now" />
      </div>
      <div className={styles.testimonialsDisplayWrapper}>
        <div className={styles.testimonialsDisplay}>
          <div className={styles.customerCards}>
            <div className={styles.featureItems}>
              <b className={styles.customerAvatars}>300+</b>
            </div>
            <div className={styles.uniqueStyle}>Unique style</div>
          </div>
          <div className={styles.customerCards1}>
            <div className={styles.wrapper}>
              <b className={styles.b}>200+</b>
            </div>
            <div className={styles.projectFinished}>Project finished</div>
          </div>
          <div className={styles.customerCards2}>
            <div className={styles.container}>
              <b className={styles.b1}>500+</b>
            </div>
            <div className={styles.happyCustomer}>Happy customer</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
