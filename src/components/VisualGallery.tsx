import { FunctionComponent } from "react";
import styles from "./VisualGallery.module.css";

const VisualGallery: FunctionComponent = () => {
  return (
    <div className={styles.visualGallery}>
      <div className={styles.previewImageWrapper}>
        <img
          className={styles.previewImageIcon}
          loading="lazy"
          alt=""
          src="/rectangle-31@2x.png"
        />
      </div>
      <div className={styles.group}>
        <div className={styles.galleryItems}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group.svg"
          />
          <img
            className={styles.groupIcon1}
            loading="lazy"
            alt=""
            src="/group-12.svg"
          />
          <img className={styles.groupIcon2} alt="" src="/group-2.svg" />
          <img className={styles.groupIcon3} alt="" src="/group-3.svg" />
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
            <div className={styles.iconDetails}>
              <img className={styles.groupIcon4} alt="" src="/group-4@2x.png" />
              <img
                className={styles.groupIcon5}
                loading="lazy"
                alt=""
                src="/group-5.svg"
              />
              <div className={styles.groupParent}>
                <img className={styles.groupIcon6} alt="" src="/group-6.svg" />
                <img
                  className={styles.groupIcon7}
                  loading="lazy"
                  alt=""
                  src="/group-7.svg"
                />
              </div>
              <img className={styles.groupIcon8} alt="" src="/group-8.svg" />
            </div>
            <button className={styles.previewImage}>
              <img
                className={styles.previewGraphicIcon}
                alt=""
                src="/preview-graphic.svg"
              />
              <div className={styles.vectorGroup}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector1@2x.png"
                />
                <b className={styles.sneakPeeks}>sneak peeks</b>
              </div>
            </button>
            <img
              className={styles.previewGraphicIcon1}
              alt=""
              src="/vector-1.svg"
            />
            <img
              className={styles.previewGraphicIcon2}
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <img
            className={styles.galleryIcons}
            loading="lazy"
            alt=""
            src="/vector-3.svg"
          />
          <img
            className={styles.galleryIcons1}
            loading="lazy"
            alt=""
            src="/vector-4.svg"
          />
          <div className={styles.groupGroup}>
            <img className={styles.groupIcon9} alt="" src="/group-9.svg" />
            <img className={styles.frameIcon} alt="" src="/frame-1@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.visualGalleryInner}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-30@2x.png"
        />
      </div>
    </div>
  );
};

export default VisualGallery;
