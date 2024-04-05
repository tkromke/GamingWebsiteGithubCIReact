import { FunctionComponent } from "react";
import TeamMemberCards from "./TeamMemberCards";
import styles from "./TeamMemberGrid.module.css";

const TeamMemberGrid: FunctionComponent = () => {
  return (
    <div className={styles.teamMemberGrid}>
      <TeamMemberCards
        rectangle6="/rectangle-6@2x.png"
        rectangle9="/rectangle-9@2x.png"
        memberAvatars="/ellipse-5@2x.png"
        cameronWilliamson="Cameron Williamson"
        gillette="Gillette"
      />
      <TeamMemberCards
        rectangle6="/rectangle-10@2x.png"
        rectangle9="/rectangle-11@2x.png"
        memberAvatars="/ellipse-6@2x.png"
        cameronWilliamson="Dianne Russell"
        gillette="Louis Vuitton"
        propMinWidth="125px"
        propMinWidth1="64px"
      />
      <TeamMemberCards
        rectangle6="/rectangle-12@2x.png"
        rectangle9="/rectangle-13@2x.png"
        memberAvatars="/ellipse-7@2x.png"
        cameronWilliamson="Jane Cooper"
        gillette="MasterCard"
        propMinWidth="106px"
        propMinWidth1="58px"
      />
      <div className={styles.teamMemberCards}>
        <img
          className={styles.teamMemberCardsChild}
          alt=""
          src="/rectangle-14@2x.png"
        />
        <div className={styles.memberPhotoWrapper}>
          <img
            className={styles.memberPhotoIcon}
            loading="lazy"
            alt=""
            src="/rectangle-17@2x.png"
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.corePhilosophiesParent}>
              <div className={styles.corePhilosophies}>core philosophies</div>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/ellipse-8@2x.png"
                />
                <div className={styles.frameContainer}>
                  <div className={styles.codyFisherParent}>
                    <div className={styles.codyFisher}>Cody Fisher</div>
                    <div className={styles.theWaltDisney}>
                      The Walt Disney Company
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.vectorParent}>
            <img
              className={styles.frameItem}
              alt=""
              src="/rectangle-1@2x.png"
            />
            <div className={styles.liveDemo}>Live Demo</div>
          </button>
        </div>
      </div>
      <TeamMemberCards
        rectangle6="/rectangle-15@2x.png"
        rectangle9="/rectangle-18@2x.png"
        memberAvatars="/ellipse-9@2x.png"
        cameronWilliamson="Wade Warren"
        gillette="Gillette"
        propMinWidth="117px"
        propMinWidth1="37px"
      />
      <TeamMemberCards
        rectangle6="/rectangle-16@2x.png"
        rectangle9="/rectangle-19@2x.png"
        memberAvatars="/ellipse-10@2x.png"
        cameronWilliamson="Robert Fox"
        gillette="L'Oréal"
        propMinWidth="93px"
        propMinWidth1="34px"
      />
    </div>
  );
};

export default TeamMemberGrid;
