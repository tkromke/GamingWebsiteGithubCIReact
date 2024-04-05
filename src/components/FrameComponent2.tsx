import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent2.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <header className={styles.ciTestGamingInner}>
      <FrameComponent1 />
    </header>
  );
};

export default FrameComponent;
