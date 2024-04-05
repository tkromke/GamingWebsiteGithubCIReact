import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import VisualGallery from "../components/VisualGallery";
import CallToAction from "../components/CallToAction";
import HeaderContent from "../components/HeaderContent";
import TeamMemberGrid from "../components/TeamMemberGrid";
import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import Footer from "../components/Footer";
import styles from "./CITestGaming.module.css";

const CITestGaming: FunctionComponent = () => {
  return (
    <div className={styles.ciTestGaming}>
      <div className={styles.headerContent} />
      <div className={styles.headerContent1} />
      <FrameComponent2 />
      <section className={styles.visualContent}>
        <img className={styles.artboard11} alt="" src="/artboard-1-1@2x.png" />
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame@2x.png"
        />
        <img
          className={styles.visualContentChild}
          loading="lazy"
          alt=""
          src="/group-1.svg"
        />
        <div className={styles.designShape} />
      </section>
      <FrameComponent1 />
      <section className={styles.featuredContent}>
        <div className={styles.featuredContentInner}>
          <div className={styles.chooseYourFavoriteGamesParent}>
            <h1 className={styles.chooseYourFavoriteContainer}>
              <span>{`choose your `}</span>favorite
              <span> games</span>
            </h1>
            <div className={styles.offerSneakPeeksAndPreviewsWrapper}>
              <div className={styles.offerSneakPeeks}>
                Offer sneak peeks and previews of upcoming games, including
                trailers, screenshots, and information about release.
              </div>
            </div>
          </div>
        </div>
        <VisualGallery />
        <CallToAction />
      </section>
      <div className={styles.vRContent}>
        <div className={styles.vRDescriptionParent}>
          <div className={styles.vRDescription}>
            <div className={styles.frameParent}>
              <div className={styles.discoverTheVirtualRealityGParent}>
                <h1 className={styles.discoverTheVirtualContainer}>
                  <span>{`Discover the `}</span>Virtual
                  <span>{` Reality Gaming `}</span>
                </h1>
                <div className={styles.visualElements}>
                  <div className={styles.designShape1} />
                  <img
                    className={styles.imageContainerIcon}
                    alt=""
                    src="/image-container@2x.png"
                  />
                  <img
                    className={styles.image231Transformed11}
                    alt=""
                    src="/image-23-1transformed-1-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.aWellDesignedGaming}>
                A well-designed gaming header often incorporates elements such
                as game characters, iconic symbols, vibrant colors, and dynamic
                visuals to convey excitement, adventure, and the immersive
                nature of gaming.
              </div>
            </div>
          </div>
          <button className={styles.callToAction}>
            <img
              className={styles.callToActionChild}
              alt=""
              src="/rectangle-1.svg"
            />
            <b className={styles.playNow}>Play now</b>
          </button>
        </div>
      </div>
      <div className={styles.headerContent2}>
        <div className={styles.featureIconParent}>
          <img
            className={styles.featureIcon}
            loading="lazy"
            alt=""
            src="/star-1@2x.png"
          />
          <div className={styles.gamingSpaningWrapper}>
            <h1 className={styles.gamingSpaning}>Gaming spaning</h1>
          </div>
        </div>
        <div className={styles.featureIconGroup}>
          <img
            className={styles.featureIcon1}
            loading="lazy"
            alt=""
            src="/star-1-1@2x.png"
          />
          <div className={styles.actionPackedWrapper}>
            <h1 className={styles.actionPacked}>Action - packed</h1>
          </div>
        </div>
        <div className={styles.featureIconContainer}>
          <img
            className={styles.featureIcon2}
            loading="lazy"
            alt=""
            src="/star-1-2@2x.png"
          />
          <div className={styles.mindBendingWrapper}>
            <h1 className={styles.mindBending}>mind - bending</h1>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <img
            className={styles.featureIcon3}
            loading="lazy"
            alt=""
            src="/star-1-3@2x.png"
          />
          <div className={styles.collectionOgGamesWrapper}>
            <h1 className={styles.collectionOgGames}>collection og games</h1>
          </div>
        </div>
      </div>
      <section className={styles.gameCategories}>
        <div className={styles.categoryHeader}>
          <HeaderContent />
          <TeamMemberGrid />
        </div>
      </section>
      <div className={styles.headerContent3}>
        <div className={styles.starParent}>
          <img className={styles.frameChild} alt="" src="/star-1@2x.png" />
          <div className={styles.gamingSpaningContainer}>
            <h1 className={styles.gamingSpaning1}>Gaming spaning</h1>
          </div>
        </div>
        <div className={styles.starGroup}>
          <img className={styles.frameItem} alt="" src="/star-1-1@2x.png" />
          <div className={styles.actionPackedContainer}>
            <h1 className={styles.actionPacked1}>Action - packed</h1>
          </div>
        </div>
        <div className={styles.starContainer}>
          <img className={styles.frameInner} alt="" src="/star-1-2@2x.png" />
          <div className={styles.mindBendingContainer}>
            <h1 className={styles.mindBending1}>mind - bending</h1>
          </div>
        </div>
        <div className={styles.starParent1}>
          <img className={styles.starIcon} alt="" src="/star-1-3@2x.png" />
          <div className={styles.collectionOgGamesContainer}>
            <h1 className={styles.collectionOgGames1}>collection og games</h1>
          </div>
        </div>
      </div>
      <FrameComponent />
      <GroupComponent />
      <section className={styles.backgroundImage}>
        <img className={styles.image2411} alt="" src="/image-24-1-1@2x.png" />
        <img className={styles.pageContentIcon} alt="" src="/frame-2@2x.png" />
        <img
          className={styles.graphicElementIcon}
          loading="lazy"
          alt=""
          src="/vector-5.svg"
        />
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/group-10.svg"
        />
        <img
          className={styles.designElementIcon}
          loading="lazy"
          alt=""
          src="/vector-6.svg"
        />
        <img
          className={styles.groupIcon1}
          loading="lazy"
          alt=""
          src="/group-111.svg"
        />
        <img
          className={styles.backgroundImageChild}
          loading="lazy"
          alt=""
          src="/group-1000001744.svg"
        />
        <img
          className={styles.visualElementsIcon}
          alt=""
          src="/visual-elements.svg"
        />
        <img
          className={styles.visualElementsIcon1}
          alt=""
          src="/visual-elements.svg"
        />
        <img
          className={styles.visualElementsIcon2}
          alt=""
          src="/visual-elements.svg"
        />
        <img
          className={styles.visualElementsIcon3}
          alt=""
          src="/visual-elements.svg"
        />
      </section>
      <Footer />
    </div>
  );
};

export default CITestGaming;
