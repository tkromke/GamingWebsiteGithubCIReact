import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.companyInfo}>
          <div className={styles.copyrightPanel}>
            <div className={styles.companyDetails}>
              <div className={styles.boardWrapper}>
                <b className={styles.board}>board</b>
              </div>
              <div className={styles.aWellDesignedGaming}>
                A well-designed gaming header often incorporates elements such
                as game characters, iconic symbols, vibrant colors, and dynamic
                visuals .
              </div>
            </div>
            <div className={styles.companyName}>
              <div className={styles.contactLabels}>
                <div className={styles.company}>company</div>
                <div className={styles.productLinks}>
                  <div className={styles.products}>products</div>
                  <div className={styles.appsGames}>{`apps & games`}</div>
                  <div className={styles.features}>features</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.copyright2023All}>
              © Copyright 2023, All Rights Reserved by board
            </div>
          </div>
        </div>
        <div className={styles.copyrightNotice}>
          <div className={styles.menuColumns}>
            <div className={styles.help}>help</div>
            <div className={styles.supportParent}>
              <div className={styles.support}>support</div>
              <div className={styles.about}>about</div>
              <div className={styles.contactUs}>contact us</div>
            </div>
          </div>
        </div>
        <div className={styles.menuColumnPair}>
          <div className={styles.resourcesParent}>
            <div className={styles.resources}>resources</div>
            <div className={styles.youtubePlaylistParent}>
              <div className={styles.youtubePlaylist}>youtube playlist</div>
              <div className={styles.howTo}>how to - blog</div>
              <div
                className={styles.termsConditions}
              >{`terms & conditions`}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
