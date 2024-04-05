import { FunctionComponent } from "react";
import styles from "./CallToAction.module.css";

const CallToAction: FunctionComponent = () => {
  return (
    <div className={styles.callToAction}>
      <div className={styles.discoverTheVirtualRealityGParent}>
        <h1 className={styles.discoverTheVirtualContainer}>
          <span>{`Discover the `}</span>Virtual
          <span>{` Reality Gaming `}</span>
        </h1>
        <div className={styles.aWellDesignedGaming}>
          A well-designed gaming header often incorporates elements such as game
          characters, iconic symbols, vibrant colors, and dynamic visuals to
          convey excitement, adventure, and the immersive nature of gaming.
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
