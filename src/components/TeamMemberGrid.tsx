import { FunctionComponent } from "react";
import styles from "./TeamMemberGrid.module.css";

const TeamMemberGrid: FunctionComponent = () => {
  return (
    <div className={styles.teamMemberGrid}>
      <div className={styles.gameTitle}>
        <h1 className={styles.welcomeToTheContainer}>
          <span>{`Welcome to the top `}</span>games
        </h1>
      </div>
      <div className={styles.gameCategoriesPanel}>
        <button className={styles.vectorParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-12@2x.png"
          />
          <div className={styles.mewestGames}>Mewest games</div>
        </button>
        <button className={styles.gameTypeButtons}>
          <img
            className={styles.gameTypeButtonsChild}
            alt=""
            src="/rectangle-1-3.svg"
          />
          <div className={styles.latestGames}>Latest games</div>
        </button>
        <button className={styles.gameTypeButtons1}>
          <img
            className={styles.gameTypeButtonsItem}
            alt=""
            src="/rectangle-1-3.svg"
          />
          <div className={styles.fightGames}>Fight games</div>
        </button>
        <button className={styles.gameTypeButtons2}>
          <img
            className={styles.gameTypeButtonsInner}
            alt=""
            src="/rectangle-1-5.svg"
          />
          <div className={styles.sportGames}>sport games</div>
        </button>
      </div>
    </div>
  );
};

export default TeamMemberGrid;
