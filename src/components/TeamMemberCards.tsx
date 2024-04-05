import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TeamMemberCards.module.css";

export type TeamMemberCardsType = {
  rectangle6?: string;
  rectangle9?: string;
  memberAvatars?: string;
  cameronWilliamson?: string;
  gillette?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const TeamMemberCards: FunctionComponent<TeamMemberCardsType> = ({
  rectangle6,
  rectangle9,
  memberAvatars,
  cameronWilliamson,
  gillette,
  propMinWidth,
  propMinWidth1,
}) => {
  const cameronWilliamsonStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const gilletteStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.teamMemberCards}>
      <img className={styles.teamMemberCardsChild} alt="" src={rectangle6} />
      <img
        className={styles.teamMemberCardsItem}
        loading="lazy"
        alt=""
        src={rectangle9}
      />
      <div className={styles.memberInfoPanels}>
        <div className={styles.memberDataContainers}>
          <div className={styles.memberDetailContainers}>
            <div className={styles.corePhilosophies}>core philosophies</div>
            <div className={styles.memberAvatarsParent}>
              <img
                className={styles.memberAvatarsIcon}
                loading="lazy"
                alt=""
                src={memberAvatars}
              />
              <div className={styles.memberNameContainersWrapper}>
                <div className={styles.memberNameContainers}>
                  <div
                    className={styles.cameronWilliamson}
                    style={cameronWilliamsonStyle}
                  >
                    {cameronWilliamson}
                  </div>
                  <div className={styles.gillette} style={gilletteStyle}>
                    {gillette}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.vectorParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-13@2x.png"
          />
          <div className={styles.liveDemo}>Live Demo</div>
        </button>
      </div>
    </div>
  );
};

export default TeamMemberCards;
