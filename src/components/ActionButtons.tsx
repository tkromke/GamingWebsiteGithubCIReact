import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ActionButtons.module.css";

export type ActionButtonsType = {
  buyNow?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const ActionButtons: FunctionComponent<ActionButtonsType> = ({
  buyNow,
  propPadding,
}) => {
  const groupButtonStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.actionButtons}>
      <button className={styles.vectorParent} style={groupButtonStyle}>
        <img className={styles.frameChild} alt="" src="/rectangle-1@2x.png" />
        <b className={styles.buyNow}>{buyNow}</b>
      </button>
      <button className={styles.buttonItems}>
        <img
          className={styles.buttonItemsChild}
          alt=""
          src="/rectangle-1.svg"
        />
        <b className={styles.playNow}>Play now</b>
      </button>
    </div>
  );
};

export default ActionButtons;
