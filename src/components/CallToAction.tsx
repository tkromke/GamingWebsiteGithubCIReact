import { FunctionComponent } from "react";
import ActionButtons from "./ActionButtons";
import styles from "./CallToAction.module.css";

const CallToAction: FunctionComponent = () => {
  return (
    <div className={styles.callToAction}>
      <ActionButtons
        buyNow="View All"
        propPadding="var(--padding-7xl) var(--padding-43xl) var(--padding-7xl) var(--padding-44xl)"
      />
    </div>
  );
};

export default CallToAction;
