import { FunctionComponent } from "react";
import QuoteBlock from "./QuoteBlock";
import styles from "./FrameComponent.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.callToActionWrapper}>
      <div className={styles.callToAction}>
        <div className={styles.testimonialPanel}>
          <QuoteBlock
            quoteBox="/quote-box@2x.png"
            oneOfTheStandoutFeaturesO="One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance."
            reviewerAvatars="/ellipse-12@2x.png"
            arleneMcCoy="Arlene McCoy"
            mcDonalds="McDonald's"
          />
          <QuoteBlock
            quoteBox="/rectangle-21@2x.png"
            oneOfTheStandoutFeaturesO="Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming."
            reviewerAvatars="/ellipse-13@2x.png"
            arleneMcCoy="Kathryn Murphy"
            mcDonalds="General Electric"
            propWidth="235.4px"
            propLineHeight="110.6%"
            propMinWidth="89px"
            propRight="33.7px"
          />
        </div>
        <div className={styles.socialMediaIcons}>
          <div className={styles.socialEngagementPanel}>
            <div className={styles.socialEngagementPanelInner}>
              <img className={styles.frameChild} alt="" src="/group-39.svg" />
            </div>
            <img
              className={styles.engagementIndicatorIcon}
              alt=""
              src="/engagement-indicator@2x.png"
            />
            <div className={styles.socialMediaIcons1}>
              <img
                className={styles.socialMediaIconsChild}
                alt=""
                src="/group-40.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
