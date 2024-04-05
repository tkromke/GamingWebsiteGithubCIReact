import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent2";
import VisualGallery from "../components/VisualGallery";
import ActionButtons from "../components/ActionButtons";
import CallToAction from "../components/CallToAction";
import TeamMemberGrid from "../components/TeamMemberGrid";
import TeamMemberCards from "../components/TeamMemberCards";
import FrameComponent2 from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import Footer from "../components/Footer";
import styles from "./CITestGaming.module.css";

const CITestGaming: FunctionComponent = () => {
  return (
    <div className={styles.ciTestGaming}>
      <div className={styles.headerContent} />
      <div className={styles.headerContent1} />
      <header className={styles.menuColumnPair}>
        <div className={styles.navigation}>
          <b className={styles.board}>board</b>
          <div className={styles.description}>
            <div className={styles.navigationItems}>
              <div className={styles.products}>Products</div>
              <div className={styles.appsGames}>{`Apps & Games`}</div>
              <div className={styles.features}>features</div>
              <div className={styles.support}>Support</div>
              <div className={styles.about}>about</div>
            </div>
          </div>
        </div>
      </header>
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
      <FrameComponent />
      <img className={styles.ciTestGamingChild} alt="" src="/group-11@2x.png" />
      <section className={styles.vRContent}>
        <section className={styles.featuredContent}>
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
        </section>
      </section>
      <section className={styles.visualGalleryParent}>
        <VisualGallery />
        <div className={styles.actionButtonsWrapper}>
          <ActionButtons
            buyNow="View All"
            propPadding="var(--padding-7xl) 62px var(--padding-7xl) 63px"
          />
        </div>
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
      </section>
      <section className={styles.gameCategories}>
        <div className={styles.categoryHeader}>
          <CallToAction />
          <button className={styles.callToAction}>
            <img
              className={styles.callToActionChild}
              alt=""
              src="/rectangle-11.svg"
            />
            <b className={styles.playNow}>Play now</b>
          </button>
        </div>
      </section>
      <section className={styles.testimonialContainer}>
        <div className={styles.headerContent2}>
          <div className={styles.featureIconParent}>
            <img
              className={styles.featureIcon}
              loading="lazy"
              alt=""
              src="/star-1@2x.png"
            />
            <div className={styles.featureLabels}>
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
        <div className={styles.frameParent}>
          <div className={styles.teamMemberGridWrapper}>
            <TeamMemberGrid />
          </div>
          <div className={styles.teamMemberCardsParent}>
            <TeamMemberCards
              rectangle6="/rectangle-6@2x.png"
              rectangle9="/rectangle-9@2x.png"
              memberAvatars="/ellipse-5@2x.png"
              cameronWilliamson="Cameron Williamson"
              gillette="Gillette"
            />
            <TeamMemberCards
              rectangle6="/rectangle-10@2x.png"
              rectangle9="/rectangle-111@2x.png"
              memberAvatars="/ellipse-6@2x.png"
              cameronWilliamson="Dianne Russell"
              gillette="Louis Vuitton"
              propMinWidth="125px"
              propMinWidth1="64px"
            />
            <TeamMemberCards
              rectangle6="/rectangle-121@2x.png"
              rectangle9="/rectangle-131@2x.png"
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
              <div className={styles.frameGroup}>
                <div className={styles.frameWrapper}>
                  <div className={styles.corePhilosophiesParent}>
                    <div className={styles.corePhilosophies}>
                      core philosophies
                    </div>
                    <div className={styles.ellipseParent}>
                      <img
                        className={styles.frameChild}
                        loading="lazy"
                        alt=""
                        src="/ellipse-8@2x.png"
                      />
                      <div className={styles.memberDataContainers}>
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
                    src="/rectangle-13@2x.png"
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
        </div>
      </section>
      <div className={styles.headerContent3}>
        <div className={styles.starParent}>
          <img className={styles.frameInner} alt="" src="/star-1@2x.png" />
          <div className={styles.gamingSpaningWrapper}>
            <h1 className={styles.gamingSpaning1}>Gaming spaning</h1>
          </div>
        </div>
        <div className={styles.starGroup}>
          <img className={styles.starIcon} alt="" src="/star-1-1@2x.png" />
          <div className={styles.actionPackedContainer}>
            <h1 className={styles.actionPacked1}>Action - packed</h1>
          </div>
        </div>
        <div className={styles.starContainer}>
          <img className={styles.frameChild1} alt="" src="/star-1-2@2x.png" />
          <div className={styles.mindBendingContainer}>
            <h1 className={styles.mindBending1}>mind - bending</h1>
          </div>
        </div>
        <div className={styles.starParent1}>
          <img className={styles.frameChild2} alt="" src="/star-1-3@2x.png" />
          <div className={styles.collectionOgGamesContainer}>
            <h1 className={styles.collectionOgGames1}>collection og games</h1>
          </div>
        </div>
      </div>
      <FrameComponent2 />
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
          src="/visual-elements1.svg"
        />
        <img
          className={styles.visualElementsIcon2}
          alt=""
          src="/visual-elements2.svg"
        />
        <img
          className={styles.visualElementsIcon3}
          alt=""
          src="/visual-elements3.svg"
        />
      </section>
      <Footer />
    </div>
  );
};

export default CITestGaming;
